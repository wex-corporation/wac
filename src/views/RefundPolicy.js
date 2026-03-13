export default class RefundPolicyView {
    constructor() {
        this.title = 'W Appraisal Company | Refund Policy';
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-refund-policy fade-in">
                <section class="page-header section text-center" style="padding-bottom: 2rem;">
                    <div class="container">
                        <h1 class="mb-3">
                            <span class="en-only">Refund Policy</span>
                            <span class="kr-only">환불정책</span>
                        </h1>
                        <p class="text-secondary en-only">Desktop Appraisal single-payment service refund standards</p>
                        <p class="text-secondary kr-only">탁상 감정평가 단건 결제 서비스 환불 기준</p>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container" style="max-width: 960px;">
                        <div class="card mb-4">
                            <h3 class="mb-3">
                                <span class="en-only">Refund eligibility</span>
                                <span class="kr-only">환불 가능 기준</span>
                            </h3>
                            <ul class="policy-list en-only">
                                <li>Full refund is available if the buyer requests cancellation before an analyst is assigned and before service work begins.</li>
                                <li>Full refund is available if W Appraisal Company determines that the request cannot be processed due to insufficient information or an internal service limitation.</li>
                                <li>If duplicate payment occurs, the duplicate amount is refunded in full after confirmation.</li>
                            </ul>
                            <ul class="policy-list kr-only">
                                <li>분석 담당자 배정 전이며 실제 서비스 작업이 시작되기 전에는 전액 환불이 가능합니다.</li>
                                <li>제출 정보 부족 또는 내부 처리 제한으로 W Appraisal Company가 서비스를 진행할 수 없다고 판단한 경우 전액 환불합니다.</li>
                                <li>중복 결제가 확인되면 중복 결제 금액은 전액 환불됩니다.</li>
                            </ul>
                        </div>

                        <div class="grid-2 mb-4">
                            <div class="card">
                                <h3 class="mb-3">
                                    <span class="en-only">Cases where refund is restricted</span>
                                    <span class="kr-only">환불이 제한되는 경우</span>
                                </h3>
                                <ul class="policy-list en-only">
                                    <li>Refund is not available once data collection, market review, or drafting work has started for the paid order.</li>
                                    <li>Refund is not available after the desktop appraisal summary has been delivered by email.</li>
                                    <li>Refund is not available for dissatisfaction based only on market movement or subjective expectation differences after delivery.</li>
                                </ul>
                                <ul class="policy-list kr-only">
                                    <li>유료 주문에 대해 자료 수집, 시장 검토 또는 초안 작성이 시작된 이후에는 환불이 불가합니다.</li>
                                    <li>탁상 감정평가 요약본이 이메일로 발송된 이후에는 환불이 불가합니다.</li>
                                    <li>결과 발송 후 시장 변동이나 주관적 기대 차이에 따른 단순 불만족은 환불 사유가 되지 않습니다.</li>
                                </ul>
                            </div>

                            <div class="card">
                                <h3 class="mb-3">
                                    <span class="en-only">How to request a refund</span>
                                    <span class="kr-only">환불 요청 방법</span>
                                </h3>
                                <ul class="policy-list en-only">
                                    <li>Email info@wappraisal.com with your name, email address, property address, and payment date.</li>
                                    <li>We review refund eligibility and respond in principle within 1 business day.</li>
                                    <li>Once approved, card cancellation or refund processing is completed according to the payment provider timeline.</li>
                                </ul>
                                <ul class="policy-list kr-only">
                                    <li>이름, 이메일 주소, 물건 주소, 결제일을 포함해 info@wappraisal.com 으로 환불 요청해 주세요.</li>
                                    <li>영업일 기준 원칙적으로 1일 이내 환불 가능 여부를 검토하여 회신합니다.</li>
                                    <li>승인 후 카드 취소 또는 환불 처리는 결제사 기준 일정에 따라 진행됩니다.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card mb-4">
                            <h3 class="mb-3">
                                <span class="en-only">Processing time</span>
                                <span class="kr-only">환불 처리 기간</span>
                            </h3>
                            <p class="text-secondary en-only">
                                Approved refunds are generally initiated immediately, but the final posting time may vary by card issuer or payment provider. In most cases, the refund is reflected within 3 to 5 business days.
                            </p>
                            <p class="text-secondary kr-only">
                                환불 승인 후 즉시 취소 또는 환불 접수를 진행하지만, 최종 반영 시점은 카드사 또는 결제대행사 사정에 따라 달라질 수 있습니다. 일반적으로 3영업일에서 5영업일 이내 반영됩니다.
                            </p>
                        </div>

                        <div class="card refund-cta">
                            <h3 class="mb-3">
                                <span class="en-only">Related purchase page</span>
                                <span class="kr-only">관련 결제 페이지</span>
                            </h3>
                            <p class="text-secondary en-only">You can review the product description, service scope, price, and guest checkout notice on the desktop appraisal page.</p>
                            <p class="text-secondary kr-only">탁상 감정평가 페이지에서 상품 설명, 제공 범위, 결제 금액, 비회원 구매 가능 여부를 함께 확인할 수 있습니다.</p>
                            <a href="/desktop-appraisal" data-link class="btn btn-primary">
                                <span class="en-only">Open Desktop Appraisal Page</span>
                                <span class="kr-only">탁상 감정평가 페이지 열기</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <style>
                .view-refund-policy .page-header {
                    background: radial-gradient(circle at 20% 20%, rgba(34,211,238,0.06), transparent 40%);
                }
                .policy-list {
                    padding-left: 0;
                }
                .policy-list li {
                    position: relative;
                    padding-left: 1.4rem;
                    margin-bottom: 0.85rem;
                    color: var(--text-secondary);
                }
                .policy-list li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--accent);
                }
                .refund-cta {
                    text-align: center;
                }
            </style>
        `;
    }
}
