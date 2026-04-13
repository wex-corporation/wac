import { createServer } from 'node:http';
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

import { checkoutProducts, tossPublicConfig } from './src/config/tossPayments.js';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 4173);
const runtimeDir = join(rootDir, '.runtime');
const ordersFile = join(runtimeDir, 'payment-orders.json');

const tossSecretKey = process.env.TOSS_SECRET_KEY || 'test_sk_DLJOpm5Qrl1ROZLJWQWe8PNdxbWn';

const mimeTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml; charset=utf-8'
};

function getCorsHeaders(request) {
    const origin = request.headers.origin;

    if (!origin) {
        return {};
    }

    const allowedOrigins = new Set([
        'http://127.0.0.1:4173',
        'http://localhost:4173',
        'https://wappraisalcompany.com',
        'https://www.wappraisalcompany.com'
    ]);

    if (!allowedOrigins.has(origin)) {
        return {};
    }

    return {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
        'Access-Control-Max-Age': '86400',
        Vary: 'Origin'
    };
}

function getBaseUrl(request) {
    const origin = request.headers.origin;

    if (origin) {
        return origin;
    }

    const protocol = request.headers['x-forwarded-proto'] || 'http';
    return `${protocol}://${request.headers.host}`;
}

function createOrderId() {
    const stamp = Date.now();
    const random = Math.random().toString(36).slice(2, 10).toUpperCase();
    return `WAC_${stamp}_${random}`;
}

function json(request, response, statusCode, payload) {
    response.writeHead(statusCode, {
        ...getCorsHeaders(request),
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store'
    });
    response.end(JSON.stringify(payload));
}

function sanitizeString(value) {
    return String(value || '').trim();
}

function serializeOrder(order) {
    return {
        orderId: order.orderId,
        productId: order.productId,
        productNameEn: order.productNameEn,
        productNameKr: order.productNameKr,
        amount: order.amount,
        currency: order.currency,
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        propertyAddress: order.propertyAddress,
        propertyType: order.propertyType,
        area: order.area,
        dueDate: order.dueDate,
        reportUse: order.reportUse,
        status: order.status,
        createdAt: order.createdAt,
        approvedAt: order.approvedAt || null
    };
}

async function ensureOrdersFile() {
    await mkdir(runtimeDir, { recursive: true });

    try {
        await access(ordersFile);
    } catch {
        await writeFile(ordersFile, JSON.stringify({ orders: {} }, null, 2));
    }
}

async function readOrderStore() {
    await ensureOrdersFile();
    const raw = await readFile(ordersFile, 'utf8');

    if (!raw.trim()) {
        return { orders: {} };
    }

    return JSON.parse(raw);
}

async function writeOrderStore(store) {
    await mkdir(runtimeDir, { recursive: true });
    await writeFile(ordersFile, JSON.stringify(store, null, 2));
}

async function saveOrder(order) {
    const store = await readOrderStore();
    store.orders[order.orderId] = order;
    await writeOrderStore(store);
    return order;
}

async function getOrder(orderId) {
    const store = await readOrderStore();
    return store.orders[orderId] || null;
}

async function updateOrder(orderId, updates) {
    const store = await readOrderStore();
    const order = store.orders[orderId];

    if (!order) {
        return null;
    }

    store.orders[orderId] = {
        ...order,
        ...updates,
        updatedAt: new Date().toISOString()
    };

    await writeOrderStore(store);
    return store.orders[orderId];
}

async function readJsonBody(request) {
    const chunks = [];

    for await (const chunk of request) {
        chunks.push(chunk);
    }

    if (!chunks.length) {
        return {};
    }

    const rawBody = Buffer.concat(chunks).toString('utf8');

    if (!rawBody.trim()) {
        return {};
    }

    return JSON.parse(rawBody);
}

function resolvePath(urlPath) {
    const pathname = decodeURIComponent(urlPath.split('?')[0]);

    if (pathname.startsWith('/api/')) {
        return null;
    }

    const normalizedPath = normalize(pathname === '/' ? '/index.html' : pathname).replace(/^(\.\.(\/|\\|$))+/, '');
    const segments = normalizedPath.split(/[\\/]/).filter(Boolean);

    if (segments.some(segment => segment.startsWith('.'))) {
        return null;
    }

    const filePath = join(rootDir, normalizedPath);

    if (!filePath.startsWith(rootDir)) {
        return null;
    }

    return filePath;
}

async function handleCreateOrder(request, response) {
    try {
        const payload = await readJsonBody(request);
        const productId = sanitizeString(payload.productId);
        const product = checkoutProducts.find(item => item.id === productId);

        if (!product) {
            json(request, response, 400, { message: 'Unknown product.' });
            return;
        }

        const propertyAddress = sanitizeString(payload.propertyAddress);
        const propertyType = sanitizeString(payload.propertyType);
        const dueDate = sanitizeString(payload.dueDate);
        const customerName = sanitizeString(payload.customerName);
        const customerEmail = sanitizeString(payload.customerEmail);
        const reportUse = sanitizeString(payload.reportUse);
        const area = Number(payload.area);

        if (!propertyAddress || !propertyType || !dueDate || !customerName || !customerEmail || !reportUse || !Number.isFinite(area) || area <= 0) {
            json(request, response, 400, { message: 'Required checkout fields are missing.' });
            return;
        }

        const now = new Date().toISOString();
        const order = {
            orderId: createOrderId(),
            productId: product.id,
            productNameEn: product.nameEn,
            productNameKr: product.nameKr,
            orderName: product.orderName,
            amount: product.price,
            currency: product.currency,
            customerName,
            customerEmail,
            propertyAddress,
            propertyType,
            area,
            dueDate,
            reportUse,
            merchantName: tossPublicConfig.merchantName,
            mid: tossPublicConfig.mid,
            status: 'READY',
            createdAt: now,
            updatedAt: now
        };

        await saveOrder(order);

        json(request, response, 200, {
            orderId: order.orderId,
            orderName: order.orderName,
            amount: order.amount,
            currency: order.currency,
            customerName: order.customerName,
            customerEmail: order.customerEmail,
            successUrl: `${getBaseUrl(request)}/payments/success`,
            failUrl: `${getBaseUrl(request)}/payments/fail`
        });
    } catch (error) {
        console.error(error);
        json(request, response, 500, { message: 'Failed to create checkout order.' });
    }
}

async function handleConfirmPayment(request, response) {
    try {
        const payload = await readJsonBody(request);
        const paymentKey = sanitizeString(payload.paymentKey);
        const orderId = sanitizeString(payload.orderId);
        const amount = Number(payload.amount);

        if (!paymentKey || !orderId || !Number.isFinite(amount)) {
            json(request, response, 400, { message: 'Payment confirmation parameters are invalid.' });
            return;
        }

        const order = await getOrder(orderId);

        if (!order) {
            json(request, response, 404, { message: 'Order not found.' });
            return;
        }

        if (order.amount !== amount) {
            json(request, response, 400, { message: 'Amount does not match the prepared order.' });
            return;
        }

        if (order.status === 'PAID' && order.paymentKey === paymentKey) {
            json(request, response, 200, {
                ok: true,
                alreadyConfirmed: true,
                order: serializeOrder(order),
                payment: order.payment
            });
            return;
        }

        const tossResponse = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${Buffer.from(`${tossSecretKey}:`).toString('base64')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                paymentKey,
                orderId,
                amount
            })
        });

        const tossResult = await tossResponse.json().catch(() => ({}));

        if (!tossResponse.ok) {
            await updateOrder(orderId, {
                status: 'CONFIRM_FAILED',
                lastError: tossResult
            });
            json(request, response, tossResponse.status, {
                message: tossResult.message || 'Payment approval failed.',
                code: tossResult.code || 'TOSS_CONFIRM_FAILED'
            });
            return;
        }

        const updatedOrder = await updateOrder(orderId, {
            status: 'PAID',
            paymentKey,
            approvedAt: tossResult.approvedAt || new Date().toISOString(),
            payment: {
                paymentKey,
                orderName: tossResult.orderName,
                method: tossResult.method,
                status: tossResult.status,
                totalAmount: tossResult.totalAmount,
                approvedAt: tossResult.approvedAt,
                receiptUrl: tossResult.receipt?.url || null,
                cardCompany: tossResult.card?.company || null
            }
        });

        json(request, response, 200, {
            ok: true,
            order: serializeOrder(updatedOrder),
            payment: updatedOrder.payment
        });
    } catch (error) {
        console.error(error);
        json(request, response, 500, { message: 'Failed to confirm the TossPayments order.' });
    }
}

const server = createServer(async (request, response) => {
    const requestUrl = new URL(request.url || '/', `http://${request.headers.host || `127.0.0.1:${port}`}`);

    if (request.method === 'OPTIONS' && requestUrl.pathname.startsWith('/api/')) {
        response.writeHead(204, getCorsHeaders(request));
        response.end();
        return;
    }

    if (request.method === 'POST' && requestUrl.pathname === '/api/orders') {
        await handleCreateOrder(request, response);
        return;
    }

    if (request.method === 'POST' && requestUrl.pathname === '/api/payments/confirm') {
        await handleConfirmPayment(request, response);
        return;
    }

    const filePath = resolvePath(request.url || '/');

    if (!filePath) {
        response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Forbidden');
        return;
    }

    try {
        const body = await readFile(filePath);
        const mimeType = mimeTypes[extname(filePath)] || 'application/octet-stream';
        response.writeHead(200, { 'Content-Type': mimeType });
        response.end(body);
    } catch {
        if (!extname(filePath)) {
            try {
                const indexBody = await readFile(join(rootDir, 'index.html'));
                response.writeHead(200, { 'Content-Type': mimeTypes['.html'] });
                response.end(indexBody);
                return;
            } catch {
                // Fall through to 404 below.
            }
        }

        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Not Found');
    }
});

ensureOrdersFile()
    .then(() => {
        server.listen(port, () => {
            console.log(`WAC site is running at http://127.0.0.1:${port}`);
        });
    })
    .catch(error => {
        console.error('Failed to initialize checkout storage.');
        console.error(error);
        process.exit(1);
    });
