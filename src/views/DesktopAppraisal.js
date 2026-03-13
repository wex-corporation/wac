export default class DesktopAppraisalView {
    constructor() {
        this.title = 'W Appraisal Company | Desktop Appraisal';
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-desktop-appraisal fade-in">
                <section class="page-header section" style="padding-bottom: 3rem;">
                    <div class="container">
                        <div class="purchase-badge-wrap mb-3">
                            <span class="purchase-badge en-only">Guest checkout available. No sign-up required.</span>
                            <span class="purchase-badge kr-only">비회원 구매 가능. 회원가입 없이 바로 결제할 수 있습니다.</span>
                        </div>
                        <h1 class="mb-3" data-i18n="da_title">Desktop Appraisal Request</h1>
                        <p class="text-secondary mb-4" style="max-width: 840px; font-size: 1.08rem;" data-i18n="da_subtitle">
                            Provide basic property details for a quick desktop valuation.
                        </p>
                        <div class="hero-facts">
                            <div class="hero-fact card">
                                <strong class="en-only">Service Price</strong>
                                <strong class="kr-only">결제 금액</strong>
                                <span>KRW 1,000</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Delivery</strong>
                                <strong class="kr-only">제공 일정</strong>
                                <span class="en-only">Within 48 hours by email</span>
                                <span class="kr-only">결제 후 48시간 이내 이메일 발송</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Purchase Type</strong>
                                <strong class="kr-only">구매 방식</strong>
                                <span class="en-only">Single payment / guest purchase</span>
                                <span class="kr-only">단건 결제 / 비회원 구매 가능</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container">
                        <div class="desktop-layout">
                            <div class="desktop-content">
                                <div class="card mb-4">
                                    <h3 class="mb-3">
                                        <span class="en-only">What this product includes</span>
                                        <span class="kr-only">상품 설명</span>
                                    </h3>
                                    <p class="text-secondary en-only">
                                        This is a single-property desktop appraisal request service. After payment, the client submits the property address, property type, area, and due date. W Appraisal Company reviews publicly available market data and internal valuation assumptions, then sends a concise desktop appraisal summary by email.
                                    </p>
                                    <p class="text-secondary kr-only">
                                        본 상품은 단일 부동산 1건을 대상으로 하는 탁상 감정평가 신청 서비스입니다. 결제 후 고객이 물건 주소, 물건 유형, 면적, 필요 기한을 제출하면, W Appraisal Company가 공개 시장자료와 내부 평가 가정을 검토하여 요약형 탁상 감정 결과를 이메일로 발송합니다.
                                    </p>
                                </div>

                                <div class="grid-2 mb-4">
                                    <div class="card">
                                        <h3 class="mb-3">
                                            <span class="en-only">Included in the service</span>
                                            <span class="kr-only">제공 범위</span>
                                        </h3>
                                        <ul class="feature-list en-only">
                                            <li>Desktop review for one property</li>
                                            <li>Indicative value range and market positioning</li>
                                            <li>Key assumptions and valuation commentary</li>
                                            <li>Email delivery within 48 hours after payment</li>
                                        </ul>
                                        <ul class="feature-list kr-only">
                                            <li>단일 부동산 1건 기준 탁상 검토</li>
                                            <li>추정 가치 범위 및 시장 포지셔닝 의견</li>
                                            <li>주요 가정 및 가치 판단 코멘트</li>
                                            <li>결제 후 48시간 이내 이메일 발송</li>
                                        </ul>
                                    </div>

                                    <div class="card">
                                        <h3 class="mb-3">
                                            <span class="en-only">Service limitations</span>
                                            <span class="kr-only">제한 사항</span>
                                        </h3>
                                        <ul class="feature-list en-only">
                                            <li>No on-site inspection is included</li>
                                            <li>No legal due diligence or title verification</li>
                                            <li>Not a formal full appraisal report for regulated filing</li>
                                            <li>Based on information provided by the buyer and market data available at review time</li>
                                        </ul>
                                        <ul class="feature-list kr-only">
                                            <li>현장 실사는 포함되지 않습니다</li>
                                            <li>법률 실사 및 권리관계 검토는 포함되지 않습니다</li>
                                            <li>법정 제출용 정식 감정평가서와는 다릅니다</li>
                                            <li>고객 제공 정보와 검토 시점의 시장자료를 기준으로 작성됩니다</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="card mb-4">
                                    <h3 class="mb-3">
                                        <span class="en-only">Suitable use cases</span>
                                        <span class="kr-only">권장 이용 목적</span>
                                    </h3>
                                    <ul class="feature-list en-only">
                                        <li>Early-stage pricing sanity check before a transaction review</li>
                                        <li>Preliminary internal reference for a financing or investment discussion</li>
                                        <li>Quick market-based value check for a property owner or prospective buyer</li>
                                    </ul>
                                    <ul class="feature-list kr-only">
                                        <li>매입 또는 매각 검토 전 초기 가격 적정성 확인</li>
                                        <li>금융 또는 투자 검토를 위한 사전 내부 참고자료</li>
                                        <li>소유자 또는 매수 예정자의 빠른 시세 점검</li>
                                    </ul>
                                </div>

                                <div class="card">
                                    <h3 class="mb-3">
                                        <span class="en-only">Refund and purchase notice</span>
                                        <span class="kr-only">환불 및 구매 안내</span>
                                    </h3>
                                    <p class="text-secondary en-only">
                                        This product is available to both members and non-members. No login is required to place an order. Refund requests are handled under the separate refund policy page, and the main standards are visible before payment.
                                    </p>
                                    <p class="text-secondary kr-only">
                                        본 상품은 회원/비회원 모두 구매할 수 있으며, 결제를 위해 별도의 회원가입이 필요하지 않습니다. 환불 기준은 별도의 환불정책 페이지에서 확인할 수 있고, 주요 기준은 결제 전에도 안내됩니다.
                                    </p>
                                    <div class="notice-links">
                                        <a href="/refund-policy" data-link class="btn btn-secondary">
                                            <span class="en-only">View Refund Policy</span>
                                            <span class="kr-only">환불정책 보기</span>
                                        </a>
                                        <a href="/contact" data-link class="btn btn-primary">
                                            <span class="en-only">Contact for Corporate Requests</span>
                                            <span class="kr-only">기업 의뢰 문의하기</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="desktop-order-column">
                                <div class="card order-summary-card mb-4">
                                    <div class="order-summary-row">
                                        <span class="en-only">Product</span>
                                        <span class="kr-only">상품명</span>
                                        <strong class="en-only">Desktop Appraisal</strong>
                                        <strong class="kr-only">탁상 감정평가</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Single payment amount</span>
                                        <span class="kr-only">단건 결제 금액</span>
                                        <strong>KRW 1,000</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Buyer type</span>
                                        <span class="kr-only">구매 가능 대상</span>
                                        <strong class="en-only">Members and non-members</strong>
                                        <strong class="kr-only">회원 및 비회원</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Delivery method</span>
                                        <span class="kr-only">제공 방식</span>
                                        <strong class="en-only">Email report</strong>
                                        <strong class="kr-only">이메일 보고서</strong>
                                    </div>
                                </div>

                                <div class="card contact-form-card">
                                    <form id="desktopForm" class="contact-form">
                                        <h3 class="mb-4 text-primary" data-i18n="da_form_info">Property & Contact Information</h3>

                                        <div class="guest-checkout-note mb-4">
                                            <strong class="en-only">Guest purchase</strong>
                                            <strong class="kr-only">비회원 구매</strong>
                                            <p class="text-secondary en-only">This order form works without creating an account. Enter your name and email, then proceed to payment.</p>
                                            <p class="text-secondary kr-only">회원가입 없이 이름과 이메일만 입력하면 바로 결제를 진행할 수 있습니다.</p>
                                        </div>

                                        <div class="form-group mb-3">
                                            <label for="da_address" data-i18n="da_address">Target Property Address *</label>
                                            <input type="text" id="da_address" required class="form-control">
                                        </div>

                                        <div class="grid-2 mb-3">
                                            <div class="form-group">
                                                <label for="da_type" data-i18n="da_type">Property Type *</label>
                                                <select id="da_type" required class="form-control">
                                                    <option value="" selected disabled data-i18n="da_type_select">Select type...</option>
                                                    <option value="residential" data-i18n="da_residential">Residential</option>
                                                    <option value="commercial" data-i18n="da_commercial">Commercial</option>
                                                    <option value="land" data-i18n="da_land">Land</option>
                                                    <option value="industrial" data-i18n="da_industrial">Industrial</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="da_area" data-i18n="da_area">Estimated Area (sqm) *</label>
                                                <input type="number" id="da_area" min="1" required class="form-control">
                                            </div>
                                        </div>

                                        <div class="grid-2 mb-3">
                                            <div class="form-group">
                                                <label for="da_due_date" data-i18n="da_due_date">Date Needed By *</label>
                                                <input type="date" id="da_due_date" required class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label for="da_name" data-i18n="da_name">Name *</label>
                                                <input type="text" id="da_name" required class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group mb-3">
                                            <label for="da_email" data-i18n="da_email">Email *</label>
                                            <input type="email" id="da_email" required class="form-control">
                                        </div>

                                        <div class="form-group mb-4">
                                            <label for="da_purpose">
                                                <span class="en-only">Use of report *</span>
                                                <span class="kr-only">이용 목적 *</span>
                                            </label>
                                            <select id="da_purpose" required class="form-control">
                                                <option value="" selected disabled>Owner reference / 소유자 참고용 등 선택</option>
                                                <option value="owner">Owner reference / 소유자 참고용</option>
                                                <option value="buyer">Buyer screening / 매수 검토용</option>
                                                <option value="internal">Internal business review / 내부 검토용</option>
                                            </select>
                                        </div>

                                        <div class="agreement-box mb-4">
                                            <label class="agreement-item">
                                                <input id="agreeRefund" type="checkbox" required>
                                                <span class="en-only">I reviewed the <a href="/refund-policy" data-link class="text-accent">refund policy</a> and understand the refund conditions.</span>
                                                <span class="kr-only"><a href="/refund-policy" data-link class="text-accent">환불정책</a>을 확인했고 환불 조건을 이해했습니다.</span>
                                            </label>
                                            <label class="agreement-item">
                                                <input id="agreeService" type="checkbox" required>
                                                <span class="en-only">I understand this is a paid digital service for one property and that no membership is required to purchase.</span>
                                                <span class="kr-only">본 상품이 단일 부동산 1건에 대한 유료 디지털 서비스이며, 회원가입 없이 구매 가능함을 확인했습니다.</span>
                                            </label>
                                        </div>

                                        <div class="form-group mb-4 p-4 text-center price-box">
                                            <h4 class="mb-2" data-i18n="da_payment_title">Payment Required</h4>
                                            <h2 class="text-accent mb-3">KRW 1,000</h2>
                                            <p class="text-secondary mb-0" style="font-size: 0.9rem;" data-i18n="da_payment_desc">
                                                The one-time desktop appraisal fee is KRW 1,000, with delivery by email within 48 hours.
                                            </p>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary submit-btn" data-i18n="da_btn_pay">Pay KRW 1,000 and Submit</button>
                                        </div>
                                    </form>

                                    <div id="daFormSuccess" class="form-success" style="display: none; text-align: left; padding: 1rem 0 0;">
                                        <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;">&#10003;</div>
                                        <h3 class="text-accent mb-2" data-i18n="da_success_title">Payment Successful & Request Received</h3>
                                        <p class="text-secondary mb-3" data-i18n="da_success_desc">
                                            Thank you. Your KRW 1,000 payment was completed and your desktop appraisal request has been received. The report will be sent to your email shortly.
                                        </p>
                                        <p class="text-secondary en-only">For refund-related questions, please refer to the refund policy or email info@wappraisal.com.</p>
                                        <p class="text-secondary kr-only">환불 관련 문의는 환불정책 페이지 또는 info@wappraisal.com 으로 문의해 주세요.</p>
                                        <a href="/refund-policy" data-link class="btn btn-secondary">
                                            <span class="en-only">Open Refund Policy</span>
                                            <span class="kr-only">환불정책 열기</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style>
                .view-desktop-appraisal .page-header {
                    background:
                        radial-gradient(circle at 10% 20%, rgba(34, 211, 238, 0.08), transparent 35%),
                        radial-gradient(circle at 85% 10%, rgba(255, 255, 255, 0.05), transparent 30%);
                }
                .desktop-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1.35fr) minmax(340px, 0.85fr);
                    gap: 2rem;
                    align-items: start;
                }
                .desktop-order-column {
                    position: sticky;
                    top: 110px;
                }
                .purchase-badge-wrap {
                    display: flex;
                    justify-content: flex-start;
                }
                .purchase-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    border: 1px solid rgba(34, 211, 238, 0.35);
                    color: var(--accent);
                    background: rgba(34, 211, 238, 0.08);
                    border-radius: 999px;
                    padding: 0.65rem 1rem;
                    font-size: 0.9rem;
                    font-weight: 600;
                }
                .hero-facts {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 1rem;
                }
                .hero-fact {
                    padding: 1.5rem;
                }
                .hero-fact strong {
                    display: block;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin-bottom: 0.4rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                .hero-fact span {
                    font-size: 1.05rem;
                }
                .feature-list {
                    padding-left: 0;
                }
                .feature-list li {
                    position: relative;
                    color: var(--text-secondary);
                    padding-left: 1.35rem;
                    margin-bottom: 0.9rem;
                }
                .feature-list li::before {
                    content: "•";
                    color: var(--accent);
                    position: absolute;
                    left: 0;
                }
                .notice-links {
                    display: flex;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-top: 1.5rem;
                }
                .order-summary-card {
                    background: linear-gradient(180deg, rgba(34, 211, 238, 0.08), rgba(31, 41, 55, 0.95));
                }
                .order-summary-row {
                    display: grid;
                    gap: 0.35rem;
                    padding: 0.95rem 0;
                    border-bottom: 1px solid var(--border-color);
                }
                .order-summary-row:first-child {
                    padding-top: 0;
                }
                .order-summary-row:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                .order-summary-row span {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }
                .guest-checkout-note {
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1rem 1rem 0.85rem;
                }
                .guest-checkout-note strong {
                    display: block;
                    margin-bottom: 0.4rem;
                }
                .guest-checkout-note p {
                    font-size: 0.92rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }
                .form-control {
                    width: 100%;
                    padding: 0.8rem 1rem;
                    background-color: rgba(0,0,0,0.2);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-btn);
                    color: var(--text-primary);
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color var(--transition-normal);
                }
                .form-control:focus {
                    outline: none;
                    border-color: var(--accent);
                }
                select.form-control {
                    appearance: none;
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-position: right 1rem center;
                    background-size: 1em;
                }
                .agreement-box {
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 1rem;
                    background: rgba(255,255,255,0.02);
                }
                .agreement-item {
                    display: flex;
                    gap: 0.75rem;
                    align-items: flex-start;
                    color: var(--text-secondary);
                    font-size: 0.92rem;
                }
                .agreement-item + .agreement-item {
                    margin-top: 0.85rem;
                }
                .agreement-item input {
                    margin-top: 0.25rem;
                }
                .price-box {
                    background: rgba(186,162,255,0.08);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                }
                .submit-btn {
                    width: 100%;
                    font-size: 1.05rem;
                    padding: 14px 24px;
                }
                @media (max-width: 1100px) {
                    .desktop-layout {
                        grid-template-columns: 1fr;
                    }
                    .desktop-order-column {
                        position: static;
                    }
                }
                @media (max-width: 900px) {
                    .hero-facts {
                        grid-template-columns: 1fr;
                    }
                }
                @media (max-width: 768px) {
                    .view-desktop-appraisal .page-header {
                        padding-bottom: 2rem !important;
                    }
                    .purchase-badge {
                        width: 100%;
                        justify-content: center;
                        text-align: center;
                        line-height: 1.45;
                    }
                    .hero-fact {
                        padding: 1.15rem;
                    }
                    .notice-links,
                    .notice-links .btn {
                        width: 100%;
                    }
                    .notice-links {
                        flex-direction: column;
                    }
                    .order-summary-card,
                    .contact-form-card {
                        border-radius: 24px;
                    }
                    .guest-checkout-note,
                    .agreement-box,
                    .price-box {
                        border-radius: 18px;
                    }
                    .agreement-item {
                        gap: 0.6rem;
                        font-size: 0.88rem;
                    }
                    .agreement-item input {
                        flex: 0 0 auto;
                    }
                    .form-control {
                        font-size: 16px;
                        padding: 0.9rem 0.95rem;
                    }
                    .submit-btn {
                        font-size: 1rem;
                    }
                    .text-center .btn {
                        width: 100%;
                    }
                }
                @media (max-width: 560px) {
                    .hero-facts {
                        gap: 0.75rem;
                    }
                    .hero-fact span,
                    .order-summary-row strong {
                        font-size: 0.98rem;
                    }
                    .order-summary-row {
                        padding: 0.8rem 0;
                    }
                    .guest-checkout-note p,
                    .agreement-item {
                        line-height: 1.5;
                    }
                    .form-group label {
                        font-size: 0.86rem;
                    }
                }
            </style>
        `;
    }

    attachEvents() {
        const form = document.getElementById('desktopForm');
        const successContent = document.getElementById('daFormSuccess');

        if (!form || !successContent) {
            return;
        }

        form.addEventListener('submit', event => {
            event.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.textContent = window.appState?.getTranslation('da_processing') || 'Preparing secure payment...';
                button.disabled = true;
            }

            window.setTimeout(() => {
                form.style.display = 'none';
                successContent.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1500);
        });
    }
}
