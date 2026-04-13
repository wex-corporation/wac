function getMessage(enText, krText) {
    return window.appState?.currentLang === 'kr' ? krText : enText;
}

export default class PaymentFailView {
    constructor() {
        this.title = 'W Appraisal Company | Payment Failed';
    }

    async render() {
        document.title = this.title;

        return `
            <div class="view-payment-fail fade-in">
                <section class="section">
                    <div class="container" style="max-width: 860px;">
                        <div class="card payment-fail-card">
                            <span class="eyebrow mb-3">
                                <span class="en-only">Payment Failed</span>
                                <span class="kr-only">결제 실패</span>
                            </span>
                            <h1 class="mb-3">
                                <span class="en-only">The TossPayments checkout was not completed.</span>
                                <span class="kr-only">토스페이먼츠 결제가 완료되지 않았습니다.</span>
                            </h1>
                            <p class="text-secondary mb-4 en-only">The reason from TossPayments is shown below. You can review the order page and try again.</p>
                            <p class="text-secondary mb-4 kr-only">아래에 토스페이먼츠에서 전달한 사유를 표시합니다. 결제 페이지로 돌아가 다시 시도할 수 있습니다.</p>
                            <div id="paymentFailBody"></div>
                        </div>
                    </div>
                </section>
            </div>

            <style>
                .payment-fail-card {
                    padding: 2rem;
                    background:
                        radial-gradient(circle at top left, rgba(239, 68, 68, 0.12), transparent 28%),
                        linear-gradient(180deg, rgba(17, 24, 39, 0.98), rgba(30, 41, 59, 0.96));
                }
                .payment-fail-box {
                    border-radius: 18px;
                    padding: 1.1rem 1.2rem;
                    background: rgba(239, 68, 68, 0.12);
                    border: 1px solid rgba(239, 68, 68, 0.28);
                    color: #fecaca;
                    line-height: 1.7;
                }
                .payment-fail-code {
                    display: block;
                    margin-top: 0.5rem;
                    font-weight: 700;
                    color: #fff;
                }
                .payment-fail-actions {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                }
                @media (max-width: 768px) {
                    .payment-fail-card {
                        padding: 1.35rem;
                    }
                    .payment-fail-actions,
                    .payment-fail-actions .btn {
                        width: 100%;
                    }
                }
            </style>
        `;
    }

    attachEvents() {
        const failBody = document.getElementById('paymentFailBody');

        if (!failBody) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const code = params.get('code') || 'UNKNOWN_ERROR';
        const message = params.get('message') || getMessage('The payment was cancelled or declined.', '결제가 취소되었거나 승인되지 않았습니다.');
        const orderId = params.get('orderId');

        failBody.innerHTML = `
            <div class="payment-fail-box">
                <div>${message}</div>
                <span class="payment-fail-code">CODE: ${code}</span>
                ${orderId ? `<span class="payment-fail-code">${getMessage('Order ID', '주문번호')}: ${orderId}</span>` : ''}
            </div>
            <div class="payment-fail-actions">
                <a href="/desktop-appraisal" data-link class="btn btn-primary">${getMessage('Back to checkout', '결제 페이지로 돌아가기')}</a>
                <a href="/contact" data-link class="btn btn-secondary">${getMessage('Contact WAC', 'WAC 문의하기')}</a>
            </div>
        `;
    }
}
