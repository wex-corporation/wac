const quoteEmail = 'one@wexcorporation.com';

function getLocalizedText(enText, krText) {
    return window.appState?.currentLang === 'kr' ? krText : enText;
}

function getFieldValue(id) {
    return document.getElementById(id)?.value.trim() || '';
}

function getSelectText(id) {
    const select = document.getElementById(id);
    return select?.selectedOptions?.[0]?.textContent.trim() || '';
}

function buildMailtoUrl() {
    const subject = '[W Appraisal Company] 감정평가 견적 요청';
    const bodyLines = [
        '감정평가 견적 요청이 접수되었습니다.',
        '',
        '이름: ' + getFieldValue('da_name'),
        '이메일: ' + getFieldValue('da_email'),
        '회사/소속: ' + getFieldValue('da_company'),
        '연락처: ' + getFieldValue('da_phone'),
        '',
        '평가대상 부동산 주소: ' + getFieldValue('da_address'),
        '물건 유형: ' + getSelectText('da_type'),
        '예상 면적: ' + getFieldValue('da_area') + ' sqm',
        '필요 기한: ' + getFieldValue('da_due_date'),
        '이용 목적: ' + getSelectText('da_purpose'),
        '',
        '추가 내용:',
        getFieldValue('da_context') || '(미입력)',
        '',
        '위 내용으로 감정평가 견적을 요청합니다.'
    ];

    return 'mailto:' + quoteEmail
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));
}

export default class DesktopAppraisalView {
    constructor() {
        this.title = 'W Appraisal Company | Valuation Quote Request';
    }

    async render() {
        document.title = this.title;

        return `
            <div class="view-desktop-appraisal fade-in">
                <section class="page-header section" style="padding-bottom: 3rem;">
                    <div class="container">
                        <div class="purchase-badge-wrap mb-3">
                            <span class="purchase-badge en-only">Quote request. No payment required.</span>
                            <span class="purchase-badge kr-only">감정평가 견적 요청. 결제 없이 문의할 수 있습니다.</span>
                        </div>
                        <h1 class="mb-3">
                            <span class="en-only">Valuation Quote Request</span>
                            <span class="kr-only">감정평가 견적 요청</span>
                        </h1>
                        <p class="text-secondary mb-4 checkout-subcopy en-only">
                            Share basic property and engagement details. The request opens as an email to one@wexcorporation.com so the team can review scope and respond with a quotation.
                        </p>
                        <p class="text-secondary mb-4 checkout-subcopy kr-only">
                            기본 물건 정보와 의뢰 목적을 남겨주시면 one@wexcorporation.com으로 견적 요청 메일이 작성됩니다. 담당자가 범위와 일정을 검토한 뒤 견적을 안내드립니다.
                        </p>
                        <div class="hero-facts">
                            <div class="hero-fact card">
                                <strong class="en-only">Request type</strong>
                                <strong class="kr-only">요청 유형</strong>
                                <span class="en-only">Appraisal quotation</span>
                                <span class="kr-only">감정평가 견적</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Recipient</strong>
                                <strong class="kr-only">수신 이메일</strong>
                                <span>${quoteEmail}</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Payment</strong>
                                <strong class="kr-only">결제</strong>
                                <span class="en-only">Not required</span>
                                <span class="kr-only">불필요</span>
                            </div>
                            <div class="hero-fact card">
                                <strong class="en-only">Next step</strong>
                                <strong class="kr-only">다음 단계</strong>
                                <span class="en-only">Scope review and quote</span>
                                <span class="kr-only">범위 검토 및 견적 안내</span>
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
                                        <span class="en-only">What to include</span>
                                        <span class="kr-only">견적 요청에 필요한 정보</span>
                                    </h3>
                                    <p class="text-secondary en-only">
                                        A useful quotation starts with the property address, property type, approximate area, required timeline, intended use, and any reporting standards or lender/auditor requirements that should be considered.
                                    </p>
                                    <p class="text-secondary kr-only">
                                        정확한 견적을 위해 평가대상 주소, 물건 유형, 대략적인 면적, 필요 기한, 이용 목적, 적용 기준이나 금융기관/감사 대응 필요 여부를 함께 알려주세요.
                                    </p>
                                </div>

                                <div class="grid-2 mb-4">
                                    <div class="card">
                                        <h3 class="mb-3">
                                            <span class="en-only">Typical quote scope</span>
                                            <span class="kr-only">주요 견적 범위</span>
                                        </h3>
                                        <ul class="feature-list en-only">
                                            <li>Formal real estate appraisal or valuation advisory</li>
                                            <li>Cross-border valuation support and bilingual documentation</li>
                                            <li>Financial reporting, lending, transaction, or internal review use cases</li>
                                            <li>Scope, timeline, deliverables, and fee estimate after review</li>
                                        </ul>
                                        <ul class="feature-list kr-only">
                                            <li>정식 부동산 감정평가 또는 가치평가 자문</li>
                                            <li>크로스보더 평가 지원 및 한/영 문서화</li>
                                            <li>재무보고, 담보대출, 거래 검토, 내부 의사결정 목적</li>
                                            <li>검토 후 범위, 일정, 산출물, 보수 견적 안내</li>
                                        </ul>
                                    </div>

                                    <div class="card">
                                        <h3 class="mb-3">
                                            <span class="en-only">Before submission</span>
                                            <span class="kr-only">제출 전 확인 사항</span>
                                        </h3>
                                        <ul class="feature-list en-only">
                                            <li>This page does not process payment.</li>
                                            <li>Submitting the form opens your email app with a prepared message.</li>
                                            <li>Please send the email to complete the request.</li>
                                            <li>You may attach documents directly in your email app.</li>
                                        </ul>
                                        <ul class="feature-list kr-only">
                                            <li>이 페이지에서는 결제가 진행되지 않습니다.</li>
                                            <li>견적 요청 버튼을 누르면 작성된 메일이 열립니다.</li>
                                            <li>메일 앱에서 전송을 눌러야 요청이 완료됩니다.</li>
                                            <li>관련 자료는 메일 앱에서 파일로 첨부할 수 있습니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="desktop-order-column">
                                <div class="card order-summary-card mb-4">
                                    <div class="order-summary-row">
                                        <span class="en-only">Request</span>
                                        <span class="kr-only">요청 항목</span>
                                        <strong class="en-only">Valuation Quote</strong>
                                        <strong class="kr-only">감정평가 견적</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Send to</span>
                                        <span class="kr-only">수신처</span>
                                        <strong>${quoteEmail}</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Fee</span>
                                        <span class="kr-only">견적 요청 비용</span>
                                        <strong class="en-only">No upfront payment</strong>
                                        <strong class="kr-only">사전 결제 없음</strong>
                                    </div>
                                    <div class="order-summary-row">
                                        <span class="en-only">Response</span>
                                        <span class="kr-only">응답</span>
                                        <strong class="en-only">After scope review</strong>
                                        <strong class="kr-only">범위 검토 후 안내</strong>
                                    </div>
                                </div>

                                <div id="quoteForm" class="card contact-form-card">
                                    <form id="desktopForm" class="contact-form">
                                        <h3 class="mb-4 text-primary">
                                            <span class="en-only">Property & Contact Information</span>
                                            <span class="kr-only">물건 및 연락처 정보</span>
                                        </h3>

                                        <div class="guest-checkout-note mb-4">
                                            <strong class="en-only">Email quote request</strong>
                                            <strong class="kr-only">이메일 견적 요청</strong>
                                            <p class="text-secondary en-only">Fill in the fields below. Your email app will open with a prepared request addressed to one@wexcorporation.com.</p>
                                            <p class="text-secondary kr-only">아래 정보를 입력하면 one@wexcorporation.com 앞으로 작성된 견적 요청 메일이 열립니다.</p>
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
                                                    <option value="hotel">Hospitality / 숙박시설</option>
                                                    <option value="logistics">Logistics / 물류시설</option>
                                                    <option value="other">Other / 기타</option>
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

                                        <div class="grid-2 mb-3">
                                            <div class="form-group">
                                                <label for="da_email" data-i18n="da_email">Email *</label>
                                                <input type="email" id="da_email" required class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label for="da_phone">
                                                    <span class="en-only">Phone</span>
                                                    <span class="kr-only">연락처</span>
                                                </label>
                                                <input type="tel" id="da_phone" class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group mb-3">
                                            <label for="da_company">
                                                <span class="en-only">Company / Organization</span>
                                                <span class="kr-only">회사 / 소속</span>
                                            </label>
                                            <input type="text" id="da_company" class="form-control">
                                        </div>

                                        <div class="form-group mb-3">
                                            <label for="da_purpose">
                                                <span class="en-only">Purpose of valuation *</span>
                                                <span class="kr-only">감정평가 목적 *</span>
                                            </label>
                                            <select id="da_purpose" required class="form-control">
                                                <option value="" selected disabled>Select purpose... / 목적 선택...</option>
                                                <option value="transaction">Transaction / 매매 또는 거래 검토</option>
                                                <option value="lending">Lending / 담보대출</option>
                                                <option value="financial-reporting">Financial reporting / 재무보고</option>
                                                <option value="investment-review">Investment review / 투자 검토</option>
                                                <option value="dispute">Dispute or review / 분쟁 또는 검토</option>
                                                <option value="other">Other / 기타</option>
                                            </select>
                                        </div>

                                        <div class="form-group mb-4">
                                            <label for="da_context">
                                                <span class="en-only">Additional details</span>
                                                <span class="kr-only">추가 내용</span>
                                            </label>
                                            <textarea id="da_context" rows="4" class="form-control" placeholder="Standards, preferred timeline, documents available, or special assumptions"></textarea>
                                        </div>

                                        <div class="agreement-box mb-4">
                                            <label class="agreement-item">
                                                <input id="agreeEmail" type="checkbox" required>
                                                <span class="en-only">I understand this request will open my email app and must be sent from there.</span>
                                                <span class="kr-only">메일 앱이 열리며, 요청 완료를 위해 메일 앱에서 직접 전송해야 함을 이해했습니다.</span>
                                            </label>
                                            <label class="agreement-item">
                                                <input id="agreePrivacy" type="checkbox" required>
                                                <span class="en-only">I agree that the submitted information may be used to review the appraisal quote request.</span>
                                                <span class="kr-only">입력한 정보가 감정평가 견적 검토를 위해 사용될 수 있음에 동의합니다.</span>
                                            </label>
                                        </div>

                                        <div id="quoteStatus" class="checkout-status" aria-live="polite"></div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary submit-btn">
                                                <span class="en-only">Prepare Quote Request Email</span>
                                                <span class="kr-only">견적 요청 메일 작성하기</span>
                                            </button>
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
                .desktop-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
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
                    overflow-wrap: anywhere;
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
                .order-summary-row strong {
                    overflow-wrap: anywhere;
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
                textarea.form-control {
                    border-radius: 20px;
                    resize: vertical;
                    min-height: 128px;
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
                @media (max-width: 1180px) {
                    .desktop-layout {
                        grid-template-columns: 1fr;
                    }
                    .desktop-order-column {
                        position: static;
                    }
                }
                @media (max-width: 980px) {
                    .hero-facts {
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
                    .hero-facts {
                        grid-template-columns: 1fr;
                    }
                    .order-summary-card,
                    .contact-form-card {
                        border-radius: 24px;
                    }
                    .guest-checkout-note,
                    .agreement-box {
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
                    .order-summary-card,
                    .contact-form-card {
                        padding: 1.2rem;
                    }
                }
            </style>
        `;
    }

    attachEvents() {
        const form = document.getElementById('desktopForm');
        const statusEl = document.getElementById('quoteStatus');

        if (!form || !statusEl) {
            return;
        }

        form.addEventListener('submit', event => {
            event.preventDefault();

            if (!form.reportValidity()) {
                return;
            }

            statusEl.className = 'checkout-status is-visible is-success';
            statusEl.textContent = getLocalizedText(
                'Your email app is opening with the quote request. Please send the email to complete the request.',
                '견적 요청 메일이 열립니다. 메일 앱에서 전송을 눌러야 요청이 완료됩니다.'
            );

            window.location.href = buildMailtoUrl();
        });
    }
}
