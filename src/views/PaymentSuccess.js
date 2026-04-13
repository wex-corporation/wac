import { ApiError, requestJson } from '../lib/api.js';
import { formatKrw } from '../lib/tossPayments.js';

function getMessage(enText, krText) {
    return window.appState?.currentLang === 'kr' ? krText : enText;
}

function getConfirmApiErrorMessage(error) {
    const isProductionStaticHost = ['wappraisalcompany.com', 'www.wappraisalcompany.com'].includes(window.location.hostname);

    if (error instanceof ApiError && error.code === 'NON_JSON_RESPONSE') {
        return isProductionStaticHost
            ? getMessage(
                'The payment approval API is not attached on this static domain yet. The checkout server must be connected before payment approval can complete.',
                '현재 이 정적 도메인에는 결제 승인 API가 연결되어 있지 않습니다. 결제 승인을 완료하려면 서버형 결제 API가 연결되어야 합니다.'
            )
            : getMessage(
                'The payment approval API returned HTML instead of JSON. Please verify that the checkout server is running.',
                '결제 승인 API 대신 HTML 페이지가 응답했습니다. 결제 서버가 정상 실행 중인지 확인해 주세요.'
            );
    }

    if (error instanceof ApiError && error.code === 'INVALID_JSON') {
        return getMessage(
            'The payment approval API returned malformed JSON. Please try again after the server response format is fixed.',
            '결제 승인 API가 잘못된 JSON을 반환했습니다. 서버 응답 형식을 점검한 뒤 다시 시도해 주세요.'
        );
    }

    return error?.message || getMessage(
        'Payment approval could not be completed automatically.',
        '결제 승인 처리를 자동으로 완료하지 못했습니다.'
    );
}

export default class PaymentSuccessView {
    constructor() {
        this.title = 'W Appraisal Company | Payment Success';
    }

    async render() {
        document.title = this.title;

        return `
            <div class="view-payment-result fade-in">
                <section class="section">
                    <div class="container" style="max-width: 940px;">
                        <div class="card payment-result-card">
                            <span class="eyebrow mb-3">
                                <span class="en-only">Payment Success</span>
                                <span class="kr-only">결제 성공</span>
                            </span>
                            <h1 class="mb-3">
                                <span class="en-only">Confirming your TossPayments order.</span>
                                <span class="kr-only">토스페이먼츠 결제 승인을 확인하고 있습니다.</span>
                            </h1>
                            <p class="text-secondary mb-4 en-only">Once approval is confirmed, the order summary and receipt information will appear below.</p>
                            <p class="text-secondary mb-4 kr-only">승인이 완료되면 아래에 주문 정보와 영수증 링크가 표시됩니다.</p>
                            <div id="paymentResultBody" class="payment-result-body">
                                <div class="payment-result-loader">
                                    <span class="payment-loader-dot"></span>
                                    <span class="payment-loader-dot"></span>
                                    <span class="payment-loader-dot"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style>
                .payment-result-card {
                    padding: 2rem;
                    background:
                        radial-gradient(circle at top left, rgba(34, 211, 238, 0.12), transparent 28%),
                        linear-gradient(180deg, rgba(17, 24, 39, 0.98), rgba(30, 41, 59, 0.96));
                }
                .payment-result-loader {
                    display: inline-flex;
                    gap: 0.55rem;
                    align-items: center;
                }
                .payment-loader-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 999px;
                    background: rgba(186, 162, 255, 0.9);
                    animation: paymentPulse 1s ease-in-out infinite;
                }
                .payment-loader-dot:nth-child(2) {
                    animation-delay: 0.15s;
                }
                .payment-loader-dot:nth-child(3) {
                    animation-delay: 0.3s;
                }
                .payment-result-summary {
                    display: grid;
                    gap: 1rem;
                }
                .payment-result-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 1rem;
                }
                .payment-result-item {
                    padding: 1rem 1.1rem;
                    border-radius: 18px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    display: grid;
                    gap: 0.3rem;
                }
                .payment-result-item span {
                    color: var(--text-secondary);
                    font-size: 0.84rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                .payment-result-item strong {
                    font-size: 1rem;
                    line-height: 1.5;
                }
                .payment-result-banner {
                    border-radius: 20px;
                    padding: 1.15rem 1.25rem;
                    background: rgba(34, 197, 94, 0.12);
                    border: 1px solid rgba(34, 197, 94, 0.3);
                    color: #dcfce7;
                }
                .payment-result-actions {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-top: 0.5rem;
                }
                .payment-error-box {
                    border-radius: 18px;
                    padding: 1rem 1.1rem;
                    background: rgba(239, 68, 68, 0.12);
                    border: 1px solid rgba(239, 68, 68, 0.28);
                    color: #fecaca;
                }
                @keyframes paymentPulse {
                    0%, 80%, 100% {
                        opacity: 0.3;
                        transform: scale(0.8);
                    }
                    40% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @media (max-width: 768px) {
                    .payment-result-card {
                        padding: 1.35rem;
                    }
                    .payment-result-grid {
                        grid-template-columns: 1fr;
                    }
                    .payment-result-actions,
                    .payment-result-actions .btn {
                        width: 100%;
                    }
                }
            </style>
        `;
    }

    async attachEvents() {
        const resultBody = document.getElementById('paymentResultBody');

        if (!resultBody) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const paymentKey = params.get('paymentKey');
        const orderId = params.get('orderId');
        const amount = Number(params.get('amount'));

        if (!paymentKey || !orderId || Number.isNaN(amount)) {
            resultBody.innerHTML = `
                <div class="payment-error-box">
                    ${getMessage(
                        'The payment callback is missing required information. Please try checkout again.',
                        '결제 콜백 정보가 누락되었습니다. 다시 결제를 진행해 주세요.'
                    )}
                </div>
                <div class="payment-result-actions">
                    <a href="/desktop-appraisal" data-link class="btn btn-primary">${getMessage('Back to checkout', '결제 페이지로 돌아가기')}</a>
                </div>
            `;
            return;
        }

        try {
            const result = await requestJson('/api/payments/confirm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    paymentKey,
                    orderId,
                    amount
                })
            });

            const receiptUrl = result.payment?.receiptUrl;
            const approvedAt = result.payment?.approvedAt
                ? new Date(result.payment.approvedAt).toLocaleString('ko-KR')
                : '-';
            const productName = window.appState?.currentLang === 'kr'
                ? result.order.productNameKr
                : result.order.productNameEn;

            resultBody.innerHTML = `
                <div class="payment-result-summary">
                    <div class="payment-result-banner">
                        ${getMessage(
                            'Payment approval is complete. The paid desktop appraisal request has been received successfully.',
                            '결제 승인이 완료되었고 유료 탁상 감정평가 요청이 정상 접수되었습니다.'
                        )}
                    </div>
                    <div class="payment-result-grid">
                        <div class="payment-result-item">
                            <span>${getMessage('Product', '상품')}</span>
                            <strong>${productName}</strong>
                        </div>
                        <div class="payment-result-item">
                            <span>${getMessage('Amount', '결제 금액')}</span>
                            <strong>KRW ${formatKrw(result.order.amount)}</strong>
                        </div>
                        <div class="payment-result-item">
                            <span>${getMessage('Order ID', '주문번호')}</span>
                            <strong>${result.order.orderId}</strong>
                        </div>
                        <div class="payment-result-item">
                            <span>${getMessage('Approved at', '승인 시각')}</span>
                            <strong>${approvedAt}</strong>
                        </div>
                        <div class="payment-result-item">
                            <span>${getMessage('Buyer', '구매자')}</span>
                            <strong>${result.order.customerName}</strong>
                        </div>
                        <div class="payment-result-item">
                            <span>${getMessage('Email', '이메일')}</span>
                            <strong>${result.order.customerEmail}</strong>
                        </div>
                        <div class="payment-result-item">
                            <span>${getMessage('Property address', '대상 부동산 주소')}</span>
                            <strong>${result.order.propertyAddress}</strong>
                        </div>
                        <div class="payment-result-item">
                            <span>${getMessage('Requested delivery', '필요 기한')}</span>
                            <strong>${result.order.dueDate}</strong>
                        </div>
                    </div>
                    <div class="payment-result-actions">
                        ${receiptUrl ? `<a href="${receiptUrl}" target="_blank" rel="noreferrer" class="btn btn-secondary">${getMessage('Open receipt', '영수증 보기')}</a>` : ''}
                        <a href="/refund-policy" data-link class="btn btn-secondary">${getMessage('Refund policy', '환불정책')}</a>
                        <a href="/contact" data-link class="btn btn-primary">${getMessage('Contact WAC', 'WAC 문의하기')}</a>
                    </div>
                </div>
            `;
        } catch (error) {
            resultBody.innerHTML = `
                <div class="payment-error-box">
                    ${getMessage(
                        'Payment approval could not be completed automatically. Please contact W Appraisal Company with your order ID if the issue persists.',
                        '결제 승인 처리를 자동으로 완료하지 못했습니다. 문제가 계속되면 주문번호와 함께 W Appraisal Company로 문의해 주세요.'
                    )}
                    <div style="margin-top: 0.65rem; font-weight: 600;">${getConfirmApiErrorMessage(error)}</div>
                </div>
                <div class="payment-result-actions">
                    <a href="/desktop-appraisal" data-link class="btn btn-primary">${getMessage('Try again', '다시 시도하기')}</a>
                    <a href="/contact" data-link class="btn btn-secondary">${getMessage('Contact support', '문의하기')}</a>
                </div>
            `;
            console.error(error);
        }
    }
}
