import { checkoutProducts, checkoutUseCases, tossPublicConfig } from '../config/tossPayments.js';
import { formatKrw, getGuestCustomerKey, loadTossPaymentsSdk } from '../lib/tossPayments.js';

const product = checkoutProducts[0];

function renderList(items) {
    return items.map(item => `<li>${item}</li>`).join('');
}

function getLocalizedText(enText, krText) {
    return window.appState?.currentLang === 'kr' ? krText : enText;
}

export default class DesktopAppraisalView {
    constructor() {
        this.title = 'W Appraisal Company | Desktop Appraisal Checkout';
        this.paymentClient = null;
        this.isSubmitting = false;
    }

    async render() {
        document.title = this.title;

        const useCaseCards = checkoutUseCases.map((useCase, index) => `
            <article class="checkout-case card">
                <span class="checkout-case-index">0${index + 1}</span>
                <h3 class="mb-2">
                    <span class="en-only">${useCase.labelEn}</span>
                    <span class="kr-only">${useCase.labelKr}</span>
                </h3>
                <p class="text-secondary en-only">${useCase.copyEn}</p>
                <p class="text-secondary kr-only">${useCase.copyKr}</p>
            </article>
        `).join('');

        return `
            <div class="view-desktop-appraisal fade-in">
                <section class="page-header section" style="padding-bottom: 3rem;">
                    <div class="container">
                        <div class="purchase-badge-wrap mb-3">
                            <span class="purchase-badge en-only">Guest checkout available. No sign-up required.</span>
                            <span class="purchase-badge kr-only">비회원 구매 가능. 회원가입 없이 바로 결제할 수 있습니다.</span>
                        </div>
                        <h1 class="mb-3">
                            <span class="en-only">Desktop Appraisal Checkout</span>
                            <span class="kr-only">탁상 감정평가 결제</span>
                        </h1>
                        <p class="text-secondary mb-4 checkout-subcopy en-only">
                            Review the product, confirm the use case, enter the property details, and continue with TossPayments checkout.
                        </p>
                        <p class="text-secondary mb-4 checkout-subcopy kr-only">
                            상품 설명과 구매 케이스를 확인한 뒤 물건 정보를 입력하고 토스페이먼츠로 결제를 진행할 수 있습니다.
                        </p>
                        <div class="hero-facts">
                            <div class="hero-fact card">
                                <strong class="en-only">Checkout price</strong>
                                <strong class="kr-only">결제 금액</strong>
                                <span>KRW ${formatKrw(product.price)}</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Delivery</strong>
                                <strong class="kr-only">제공 일정</strong>
                                <span class="en-only">${product.deliveryEn}</span>
                                <span class="kr-only">${product.deliveryKr}</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Buyer type</strong>
                                <strong class="kr-only">구매 대상</strong>
                                <span class="en-only">${product.audienceEn}</span>
                                <span class="kr-only">${product.audienceKr}</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Payment gateway</strong>
                                <strong class="kr-only">결제 수단</strong>
                                <span>TossPayments</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container">
                        <div class="checkout-highlight-grid mb-4">
                            <div class="card featured-checkout-card">
                                <span class="eyebrow mb-3">
                                    <span class="en-only">Purchasable Product</span>
                                    <span class="kr-only">실제 결제 상품</span>
                                </span>
                                <div class="featured-checkout-head">
                                    <div>
                                        <h2 class="mb-2">
                                            <span class="en-only">${product.nameEn}</span>
                                            <span class="kr-only">${product.nameKr}</span>
                                        </h2>
                                        <p class="text-secondary en-only">${product.shortDescriptionEn}</p>
                                        <p class="text-secondary kr-only">${product.shortDescriptionKr}</p>
                                    </div>
                                    <div class="featured-checkout-price">
                                        <span class="en-only">Single payment</span>
                                        <span class="kr-only">단건 결제</span>
                                        <strong>KRW ${formatKrw(product.price)}</strong>
                                    </div>
                                </div>
                                <div class="featured-checkout-meta">
                                    <div>
                                        <span class="en-only">Merchant</span>
                                        <span class="kr-only">상호명</span>
                                        <strong>${tossPublicConfig.merchantName}</strong>
                                    </div>
                                    <div>
                                        <span class="en-only">Report type</span>
                                        <span class="kr-only">산출물 형태</span>
                                        <strong class="en-only">${product.reportTypeEn}</strong>
                                        <strong class="kr-only">${product.reportTypeKr}</strong>
                                    </div>
                                    <div>
                                        <span class="en-only">Delivery</span>
                                        <span class="kr-only">제공 일정</span>
                                        <strong class="en-only">${product.deliveryEn}</strong>
                                        <strong class="kr-only">${product.deliveryKr}</strong>
                                    </div>
                                </div>
                                <div class="notice-links" style="margin-top: 1.5rem;">
                                    <a href="#checkoutForm" class="btn btn-primary checkout-scroll-btn">
                                        <span class="en-only">Proceed to Checkout</span>
                                        <span class="kr-only">결제 진행하기</span>
                                    </a>
                                    <a href="/refund-policy" data-link class="btn btn-secondary">
                                        <span class="en-only">View Refund Policy</span>
                                        <span class="kr-only">환불정책 보기</span>
                                    </a>
                                </div>
                            </div>
                            <div class="checkout-case-grid">
                                ${useCaseCards}
                            </div>
                        </div>

                        <div class="desktop-layout">
                            <div class="desktop-content">
                                <div class="card mb-4">
                                    <h3 class="mb-3">
                                        <span class="en-only">Product description</span>
                                        <span class="kr-only">상품 상세 설명</span>
                                    </h3>
                                    <p class="text-secondary en-only">${product.descriptionEn}</p>
                                    <p class="text-secondary kr-only">${product.descriptionKr}</p>
                                </div>

                                <div class="grid-2 mb-4">
                                    <div class="card">
                                        <h3 class="mb-3">
                                            <span class="en-only">Included in the service</span>
                                            <span class="kr-only">제공 범위</span>
                                        </h3>
                                        <ul class="feature-list en-only">${renderList(product.scopeEn)}</ul>
                                        <ul class="feature-list kr-only">${renderList(product.scopeKr)}</ul>
                                    </div>

                                    <div class="card">
                                        <h3 class="mb-3">
                                            <span class="en-only">Service limitations</span>
                                            <span class="kr-only">제한 사항</span>
                                        </h3>
                                        <ul class="feature-list en-only">${renderList(product.limitationsEn)}</ul>
                                        <ul class="feature-list kr-only">${renderList(product.limitationsKr)}</ul>
                                    </div>
                                </div>

                                <div class="card">
                                    <h3 class="mb-3">
                                        <span class="en-only">Purchase notice</span>
                                        <span class="kr-only">구매 안내</span>
                                    </h3>
                                    <ul class="feature-list en-only">
                                        <li>The checkout is available without creating an account.</li>
                                        <li>Property details submitted on this page are used to create the paid request.</li>
                                        <li>The TossPayments approval step is completed after the payment window returns to the success page.</li>
                                    </ul>
                                    <ul class="feature-list kr-only">
                                        <li>회원가입 없이 비회원으로 바로 결제할 수 있습니다.</li>
                                        <li>이 페이지에서 입력한 물건 정보는 유료 의뢰 접수 정보로 함께 저장됩니다.</li>
                                        <li>토스페이먼츠 결제창 이후 성공 페이지에서 승인 절차가 완료됩니다.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="desktop-order-column">
                                <div class="card order-summary-card mb-4">
                                    <div class="order-summary-row">
                                        <span class="en-only">Product</span>
                                        <span class="kr-only">상품명</span>
                                        <strong class="en-only">${product.nameEn}</strong>
                                        <strong class="kr-only">${product.nameKr}</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Single payment amount</span>
                                        <span class="kr-only">단건 결제 금액</span>
                                        <strong>KRW ${formatKrw(product.price)}</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Buyer type</span>
                                        <span class="kr-only">구매 가능 대상</span>
                                        <strong class="en-only">${product.audienceEn}</strong>
                                        <strong class="kr-only">${product.audienceKr}</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Delivery method</span>
                                        <span class="kr-only">제공 방식</span>
                                        <strong class="en-only">${product.deliveryEn}</strong>
                                        <strong class="kr-only">${product.deliveryKr}</strong>
                                    </div>
                                </div>

                                <div id="checkoutForm" class="card contact-form-card">
                                    <form id="desktopForm" class="contact-form">
                                        <input type="hidden" id="productId" value="${product.id}">
                                        <h3 class="mb-4 text-primary">
                                            <span class="en-only">Property & Contact Information</span>
                                            <span class="kr-only">물건 및 연락처 정보</span>
                                        </h3>

                                        <div class="guest-checkout-note mb-4">
                                            <strong class="en-only">Guest purchase</strong>
                                            <strong class="kr-only">비회원 구매</strong>
                                            <p class="text-secondary en-only">Enter the buyer and property information below, then continue with TossPayments checkout.</p>
                                            <p class="text-secondary kr-only">아래에 구매자와 물건 정보를 입력한 후 토스페이먼츠 결제로 이어집니다.</p>
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

                                        <div class="form-group mb-4 p-4 price-box">
                                            <div class="price-box-header">
                                                <div>
                                                    <h4 class="mb-2" data-i18n="da_payment_title">Payment Required</h4>
                                                    <p class="text-secondary mb-0" data-i18n="da_payment_desc">
                                                        The one-time desktop appraisal fee is KRW 1,000, with delivery by email within 48 hours.
                                                    </p>
                                                </div>
                                                <div class="price-box-amount">KRW ${formatKrw(product.price)}</div>
                                            </div>
                                        </div>

                                        <div class="payment-widget-shell mb-4">
                                            <div class="payment-widget-head mb-3">
                                                <strong class="en-only">Supported payment window</strong>
                                                <strong class="kr-only">지원 결제창</strong>
                                                <p class="text-secondary en-only">After you submit, TossPayments opens a hosted checkout window for card and easy-pay methods.</p>
                                                <p class="text-secondary kr-only">제출 버튼을 누르면 카드 및 간편결제를 지원하는 토스페이먼츠 호스티드 결제창이 열립니다.</p>
                                            </div>
                                            <div id="paymentMethodPanel" class="payment-widget-slot payment-window-panel">
                                                <div class="payment-method-pill-row">
                                                    <span class="payment-method-pill">CARD</span>
                                                    <span class="payment-method-pill">Toss Pay</span>
                                                    <span class="payment-method-pill">Naver Pay</span>
                                                    <span class="payment-method-pill">Samsung Pay</span>
                                                    <span class="payment-method-pill">Kakao Pay</span>
                                                </div>
                                                <p class="text-secondary mb-0 en-only">Availability depends on the buyer environment and the methods supported by TossPayments in the hosted card window.</p>
                                                <p class="text-secondary mb-0 kr-only">실제 노출 방식은 구매자 환경과 토스페이먼츠 호스티드 카드 결제창의 지원 범위에 따라 달라집니다.</p>
                                            </div>
                                        </div>

                                        <div id="checkoutStatus" class="checkout-status" aria-live="polite"></div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary submit-btn" data-i18n="da_btn_pay">Pay KRW 1,000 and Submit</button>
                                        </div>
                                    </form>
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
                .checkout-subcopy {
                    max-width: 840px;
                    font-size: 1.08rem;
                }
                .checkout-highlight-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
                    gap: 1.4rem;
                    align-items: stretch;
                }
                .featured-checkout-card {
                    background:
                        linear-gradient(180deg, rgba(186, 162, 255, 0.18), rgba(31, 41, 55, 0.92)),
                        rgba(15, 23, 42, 0.9);
                }
                .featured-checkout-head {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    gap: 1rem;
                    align-items: start;
                }
                .featured-checkout-price {
                    min-width: 160px;
                    padding: 1rem 1.15rem;
                    border-radius: 20px;
                    background: rgba(15, 23, 42, 0.55);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    display: grid;
                    gap: 0.35rem;
                }
                .featured-checkout-price span,
                .featured-checkout-meta span {
                    font-size: 0.82rem;
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                .featured-checkout-price strong {
                    font-size: 1.55rem;
                }
                .featured-checkout-meta {
                    margin-top: 1.5rem;
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 0.9rem;
                }
                .featured-checkout-meta div {
                    padding: 1rem;
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    background: rgba(255, 255, 255, 0.03);
                    display: grid;
                    gap: 0.35rem;
                }
                .checkout-case-grid {
                    display: grid;
                    gap: 1rem;
                }
                .checkout-case {
                    padding: 1.35rem;
                    position: relative;
                    min-height: 168px;
                }
                .checkout-case-index {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    border-radius: 999px;
                    background: rgba(186, 162, 255, 0.12);
                    color: var(--accent);
                    font-size: 0.86rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                .desktop-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1.28fr) minmax(360px, 0.84fr);
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
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 1rem;
                }
                .hero-fact {
                    padding: 1.4rem;
                }
                .hero-fact strong {
                    display: block;
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    margin-bottom: 0.4rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                .hero-fact span {
                    font-size: 1.02rem;
                    line-height: 1.45;
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
                    background-color: rgba(0, 0, 0, 0.2);
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
                    background: rgba(255, 255, 255, 0.02);
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
                    background: rgba(186, 162, 255, 0.08);
                    border-radius: 12px;
                    border: 1px solid var(--border-color);
                }
                .price-box-header {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    gap: 1rem;
                    align-items: center;
                }
                .price-box-amount {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: var(--accent);
                    white-space: nowrap;
                }
                .payment-widget-shell {
                    border: 1px solid var(--border-color);
                    border-radius: 18px;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                }
                .payment-widget-head p {
                    margin-bottom: 0;
                }
                .payment-widget-slot {
                    border-radius: 18px;
                    background: rgba(255, 255, 255, 0.02);
                }
                .payment-window-panel {
                    padding: 1.15rem;
                    display: grid;
                    gap: 1rem;
                }
                .payment-method-pill-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                }
                .payment-method-pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.55rem 0.85rem;
                    border-radius: 999px;
                    border: 1px solid rgba(186, 162, 255, 0.2);
                    background: rgba(186, 162, 255, 0.08);
                    color: var(--text-primary);
                    font-size: 0.88rem;
                    font-weight: 600;
                }
                .checkout-status {
                    display: none;
                    margin-bottom: 1rem;
                    border-radius: 16px;
                    padding: 0.95rem 1rem;
                    font-size: 0.94rem;
                    line-height: 1.6;
                }
                .checkout-status.is-visible {
                    display: block;
                }
                .checkout-status.is-error {
                    background: rgba(239, 68, 68, 0.12);
                    border: 1px solid rgba(239, 68, 68, 0.28);
                    color: #fecaca;
                }
                .checkout-status.is-success {
                    background: rgba(34, 197, 94, 0.12);
                    border: 1px solid rgba(34, 197, 94, 0.28);
                    color: #bbf7d0;
                }
                .submit-btn {
                    width: 100%;
                    font-size: 1.05rem;
                    padding: 14px 24px;
                }
                .checkout-scroll-btn {
                    scroll-behavior: smooth;
                }
                @media (max-width: 1180px) {
                    .checkout-highlight-grid,
                    .desktop-layout {
                        grid-template-columns: 1fr;
                    }
                    .desktop-order-column {
                        position: static;
                    }
                    .checkout-case-grid {
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                    }
                }
                @media (max-width: 980px) {
                    .hero-facts,
                    .featured-checkout-meta,
                    .checkout-case-grid {
                        grid-template-columns: 1fr 1fr;
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
                    .hero-facts,
                    .featured-checkout-meta,
                    .checkout-case-grid {
                        grid-template-columns: 1fr;
                    }
                    .featured-checkout-head,
                    .price-box-header {
                        grid-template-columns: 1fr;
                    }
                    .featured-checkout-price {
                        min-width: 0;
                    }
                    .notice-links,
                    .notice-links .btn {
                        width: 100%;
                    }
                    .notice-links {
                        flex-direction: column;
                    }
                    .order-summary-card,
                    .contact-form-card,
                    .featured-checkout-card,
                    .checkout-case {
                        border-radius: 24px;
                    }
                    .guest-checkout-note,
                    .agreement-box,
                    .price-box,
                    .payment-widget-shell {
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
                    .price-box-amount {
                        font-size: 1.4rem;
                    }
                }
                @media (max-width: 560px) {
                    .checkout-subcopy,
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
                    .featured-checkout-card,
                    .checkout-case,
                    .order-summary-card,
                    .contact-form-card {
                        padding: 1.2rem;
                    }
                }
            </style>
        `;
    }

    async attachEvents() {
        const form = document.getElementById('desktopForm');
        const submitButton = form?.querySelector('button[type="submit"]');
        const statusEl = document.getElementById('checkoutStatus');
        const checkoutAnchor = document.querySelector('.checkout-scroll-btn');

        if (checkoutAnchor) {
            checkoutAnchor.addEventListener('click', event => {
                event.preventDefault();
                document.getElementById('checkoutForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        if (!form || !submitButton || !statusEl) {
            return;
        }

        const setStatus = (type, message) => {
            statusEl.className = 'checkout-status';
            statusEl.textContent = '';

            if (!message) {
                return;
            }

            statusEl.classList.add('is-visible', type === 'error' ? 'is-error' : 'is-success');
            statusEl.textContent = message;
        };

        const setSubmitting = isSubmitting => {
            this.isSubmitting = isSubmitting;
            submitButton.disabled = isSubmitting;
            submitButton.textContent = isSubmitting
                ? getLocalizedText('Preparing secure payment...', '안전한 결제를 준비하고 있습니다...')
                : getLocalizedText('Pay KRW 1,000 and Submit', '1,000원 결제 및 요청 제출');
        };

        try {
            await loadTossPaymentsSdk();
            const tossPayments = window.TossPayments(tossPublicConfig.clientKey);
            this.paymentClient = tossPayments.payment({
                customerKey: getGuestCustomerKey()
            });
        } catch (error) {
            setStatus('error', getLocalizedText(
                'TossPayments checkout failed to initialize. Refresh the page and try again.',
                '토스페이먼츠 결제창을 초기화하지 못했습니다. 새로고침 후 다시 시도해 주세요.'
            ));
            console.error(error);
        }

        form.addEventListener('submit', async event => {
            event.preventDefault();

            if (this.isSubmitting) {
                return;
            }

            if (!this.paymentClient) {
                setStatus('error', getLocalizedText(
                    'The payment window is not ready yet. Please wait a moment and try again.',
                    '결제창이 아직 준비되지 않았습니다. 잠시 후 다시 시도해 주세요.'
                ));
                return;
            }

            if (!form.reportValidity()) {
                return;
            }

            setSubmitting(true);
            setStatus('', '');

            const payload = {
                productId: document.getElementById('productId')?.value,
                propertyAddress: document.getElementById('da_address')?.value.trim(),
                propertyType: document.getElementById('da_type')?.value,
                area: Number(document.getElementById('da_area')?.value),
                dueDate: document.getElementById('da_due_date')?.value,
                customerName: document.getElementById('da_name')?.value.trim(),
                customerEmail: document.getElementById('da_email')?.value.trim(),
                reportUse: document.getElementById('da_purpose')?.value
            };

            try {
                const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const order = await response.json();

                if (!response.ok) {
                    throw new Error(order.message || 'ORDER_CREATE_FAILED');
                }

                sessionStorage.setItem('wac-last-order', JSON.stringify({
                    orderId: order.orderId,
                    productId: payload.productId,
                    customerEmail: payload.customerEmail
                }));

                await this.paymentClient.requestPayment({
                    method: 'CARD',
                    amount: {
                        currency: product.currency,
                        value: product.price
                    },
                    orderId: order.orderId,
                    orderName: order.orderName,
                    successUrl: order.successUrl,
                    failUrl: order.failUrl,
                    customerEmail: order.customerEmail,
                    customerName: order.customerName,
                    windowTarget: window.innerWidth <= 768 ? 'self' : 'iframe',
                    card: {
                        flowMode: 'DEFAULT'
                    }
                });
            } catch (error) {
                setSubmitting(false);
                setStatus('error', error.message === 'ORDER_CREATE_FAILED'
                    ? getLocalizedText(
                        'The order could not be created. Please review the form and try again.',
                        '주문 정보를 생성하지 못했습니다. 입력 내용을 확인한 뒤 다시 시도해 주세요.'
                    )
                    : getLocalizedText(
                        error.message || 'Checkout failed before payment approval.',
                        `결제 승인 전 단계에서 오류가 발생했습니다. ${error.message || ''}`.trim()
                    ));
                console.error(error);
            }
        });
    }
}
