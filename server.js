import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml; charset=utf-8'
};

function resolvePath(urlPath) {
    const pathname = decodeURIComponent(urlPath.split('?')[0]);
    const normalizedPath = normalize(pathname === '/' ? '/index.html' : pathname).replace(/^(\.\.(\/|\\|$))+/, '');
    const filePath = join(rootDir, normalizedPath);

    if (!filePath.startsWith(rootDir)) {
        return null;
    }

    return filePath;
}

const server = createServer(async (request, response) => {
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

server.listen(port, () => {
    console.log(`WAC site is running at http://127.0.0.1:${port}`);
});
