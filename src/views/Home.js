export default class HomeView {
    constructor() {
        this.title = 'W Appraisal Company | Open property intelligence';
    }

    async render() {
        document.title = this.title;

        return `
            <div class="view-home fade-in">
                <section class="home-hero section">
                    <div class="hero-media"></div>
                    <div class="container hero-grid">
                        <div class="hero-copy">
                            <span class="eyebrow mb-3">
                                <span class="en-only">Real-World Property Intelligence</span>
                                <span class="kr-only">실물자산 부동산 인텔리전스</span>
                            </span>
                            <h1 class="hero-headline mb-3">
                                <span class="en-only">Open the real estate intelligence layer.</span>
                                <span class="kr-only">부동산 인텔리전스 레이어를 엽니다.</span>
                            </h1>
                            <p class="hero-subcopy mb-4 text-secondary display-copy">
                                <span class="en-only">Institutional-grade valuation, underwriting context, and desktop appraisal workflows designed for cross-border real estate and emerging RWA structures.</span>
                                <span class="kr-only">크로스보더 부동산과 확장되는 RWA 구조를 위해 설계된 기관급 가치평가, 언더라이팅 컨텍스트, 탁상 감정 워크플로우를 제공합니다.</span>
                            </p>
                            <div class="hero-actions mb-4">
                                <a href="/contact" data-link class="btn btn-primary" data-i18n="btn_req_proposal">Request a Proposal</a>
                                <a href="/desktop-appraisal" data-link class="btn btn-secondary">
                                    <span class="en-only">Try Desktop Appraisal</span>
                                    <span class="kr-only">탁상 감정 결제 보기</span>
                                </a>
                            </div>
                            <div class="pill-row">
                                <span class="pill" data-i18n="trust_1">International standards context</span>
                                <span class="pill" data-i18n="trust_2">Independent practice</span>
                                <span class="pill" data-i18n="trust_3">Bilingual delivery</span>
                            </div>
                        </div>

                        <div class="hero-panel card">
                            <span class="eyebrow mb-3">
                                <span class="en-only">Active Modules</span>
                                <span class="kr-only">활성 모듈</span>
                            </span>
                            <div class="hero-panel-list">
                                <a href="/services/cross-border" data-link class="hero-module">
                                    <span class="hero-module-label">01</span>
                                    <div>
                                        <strong data-i18n="nav_service_1">Cross-border Valuation & Advisory</strong>
                                        <p class="text-secondary en-only">Deal, reporting, and cross-border narrative alignment.</p>
                                        <p class="text-secondary kr-only">딜, 보고, 크로스보더 내러티브 정렬을 위한 가치평가 자문.</p>
                                    </div>
                                </a>
                                <a href="/services/financial-reporting" data-link class="hero-module">
                                    <span class="hero-module-label">02</span>
                                    <div>
                                        <strong data-i18n="nav_service_2">Lending & Financial Reporting</strong>
                                        <p class="text-secondary en-only">Audit-ready outputs and lender-facing documentation.</p>
                                        <p class="text-secondary kr-only">감사 대응용 산출물과 금융기관 대응 문서화.</p>
                                    </div>
                                </a>
                                <a href="/desktop-appraisal" data-link class="hero-module module-accent">
                                    <span class="hero-module-label">03</span>
                                    <div>
                                        <strong data-i18n="nav_desktop_appraisal">Desktop Appraisal (KRW 1,000)</strong>
                                        <p class="text-secondary en-only">Single-payment entry product with guest checkout.</p>
                                        <p class="text-secondary kr-only">비회원 결제가 가능한 단건 결제형 엔트리 상품.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="hero-strip card">
                            <div class="hero-strip-copy">
                                <span class="en-only">Built for institutional review, desktop decisioning, and property workflows that need cleaner evidence.</span>
                                <span class="kr-only">기관 검토, 탁상 의사결정, 더 명확한 근거가 필요한 부동산 워크플로우에 맞춰 설계되었습니다.</span>
                            </div>
                            <div class="hero-strip-links">
                                <a href="/process" data-link class="link-arrow">
                                    <span data-i18n="nav_process">Process & Standards</span> <span>&rarr;</span>
                                </a>
                                <a href="/refund-policy" data-link class="link-arrow">
                                    <span class="en-only">Refund Policy</span>
                                    <span class="kr-only">환불정책</span> <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="home-logo-strip">
                    <div class="container">
                        <div class="logo-cloud">
                            <span>IVS</span>
                            <span>IFRS / US GAAP</span>
                            <span>RICS</span>
                            <span>KCA</span>
                            <span>REITs</span>
                            <span>FUNDS</span>
                            <span>LENDERS</span>
                            <span>FAMILY OFFICES</span>
                        </div>
                    </div>
                </section>

                <section class="section home-announcements">
                    <div class="container">
                        <div class="section-header-row mb-4">
                            <div>
                                <span class="eyebrow mb-2">
                                    <span class="en-only">Announcements</span>
                                    <span class="kr-only">업데이트</span>
                                </span>
                                <h2 class="mb-2">
                                    <span class="en-only">Operational signals across valuation and RWA readiness.</span>
                                    <span class="kr-only">가치평가와 RWA 준비도를 잇는 운영 신호들.</span>
                                </h2>
                            </div>
                        </div>
                        <div class="grid-4">
                            <a href="/desktop-appraisal" data-link class="card update-card update-ink">
                                <span class="update-tag">PRODUCT</span>
                                <h3 class="mb-2 en-only">Desktop appraisal checkout is live</h3>
                                <h3 class="mb-2 kr-only">탁상 감정 결제 페이지가 오픈되었습니다</h3>
                                <p class="text-secondary en-only">A KRW 1,000 single-payment workflow with guest checkout, refund notice, and report request intake.</p>
                                <p class="text-secondary kr-only">1,000원 단건 결제, 비회원 구매, 환불 안내, 보고서 요청 접수가 한 화면에서 가능합니다.</p>
                            </a>
                            <a href="/case-studies" data-link class="card update-card update-grid">
                                <span class="update-tag">CASE</span>
                                <h3 class="mb-2 en-only">Cross-border office and logistics valuation notes</h3>
                                <h3 class="mb-2 kr-only">크로스보더 오피스 및 물류 자산 사례를 정리했습니다</h3>
                                <p class="text-secondary en-only">Examples of institution-facing documentation under reporting and financing pressure.</p>
                                <p class="text-secondary kr-only">보고 및 금융 조달 상황에서 요구되는 기관 대응 문서화 예시를 담았습니다.</p>
                            </a>
                            <a href="/process" data-link class="card update-card update-photo">
                                <span class="update-tag">METHOD</span>
                                <h3 class="mb-2 en-only">Evidence architecture for audit and dispute review</h3>
                                <h3 class="mb-2 kr-only">감사 및 분쟁 검토를 위한 증거 구조를 표준화합니다</h3>
                                <p class="text-secondary en-only">Traceable assumptions, market references, and a cleaner review chain.</p>
                                <p class="text-secondary kr-only">추적 가능한 가정, 시장 근거, 더 명확한 검토 체인을 제공합니다.</p>
                            </a>
                            <a href="/insights" data-link class="card update-card update-accent">
                                <span class="update-tag">INSIGHT</span>
                                <h3 class="mb-2 en-only">RWA underwriting needs a stronger property layer</h3>
                                <h3 class="mb-2 kr-only">RWA 언더라이팅에는 더 강한 부동산 레이어가 필요합니다</h3>
                                <p class="text-secondary en-only">Why tokenized structures still depend on disciplined appraisal, assumptions, and local market intelligence.</p>
                                <p class="text-secondary kr-only">토큰화 구조도 결국 정교한 가치평가, 가정, 현지 시장 인텔리전스에 의존합니다.</p>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="section section-light home-metrics">
                    <div class="container">
                        <div class="metrics-layout">
                            <div class="metrics-intro">
                                <span class="eyebrow mb-3">
                                    <span class="en-only">Operating Layer</span>
                                    <span class="kr-only">운영 레이어</span>
                                </span>
                                <h2 class="mb-3">
                                    <span class="en-only">Decision support for property finance, not just report production.</span>
                                    <span class="kr-only">단순 보고서 생산이 아니라, 부동산 금융 의사결정을 위한 지원 레이어입니다.</span>
                                </h2>
                                <p class="text-secondary display-copy en-only">The interface is built like an institutional landing page: headline, signal cards, hard metrics, ecosystem context, perspectives, and direct transaction paths.</p>
                                <p class="text-secondary display-copy kr-only">기관형 랜딩 구조를 참고해 헤드라인, 시그널 카드, 핵심 지표, 생태계 컨텍스트, 인사이트, 직접 결제 경로까지 한 흐름으로 재구성했습니다.</p>
                            </div>
                            <div class="metrics-grid">
                                <div class="metric-card">
                                    <div class="metric-value">48h</div>
                                    <div class="metric-label en-only">Desktop appraisal delivery target</div>
                                    <div class="metric-label kr-only">탁상 감정 제공 목표 시간</div>
                                </div>
                                <div class="metric-card">
                                    <div class="metric-value">2</div>
                                    <div class="metric-label en-only">Bilingual report languages</div>
                                    <div class="metric-label kr-only">보고서 제공 언어 수</div>
                                </div>
                                <div class="metric-card">
                                    <div class="metric-value">3</div>
                                    <div class="metric-label en-only">Core valuation product tracks</div>
                                    <div class="metric-label kr-only">핵심 상품 트랙 수</div>
                                </div>
                                <div class="metric-card">
                                    <div class="metric-value">KRW 1K</div>
                                    <div class="metric-label en-only">Entry desktop appraisal fee</div>
                                    <div class="metric-label kr-only">엔트리 탁상 감정 결제 금액</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section section-light home-ecosystem">
                    <div class="container ecosystem-layout">
                        <div>
                            <span class="eyebrow mb-3">
                                <span class="en-only">Coverage</span>
                                <span class="kr-only">커버리지</span>
                            </span>
                            <h2 class="mb-3">
                                <span class="en-only">Structured for funds, lenders, owners, and emerging onchain property operators.</span>
                                <span class="kr-only">펀드, 금융기관, 자산 보유자, 온체인 부동산 운영 주체까지 고려한 구조입니다.</span>
                            </h2>
                            <p class="text-secondary display-copy en-only">Instead of generic corporate pages, the new system surfaces who the platform is built for, what frameworks it references, and where the user should go next.</p>
                            <p class="text-secondary display-copy kr-only">일반적인 기업형 소개 페이지가 아니라, 누구를 위해 설계되었는지, 어떤 기준을 참조하는지, 다음 행동이 무엇인지 한눈에 드러나도록 구성했습니다.</p>
                        </div>
                        <div class="ecosystem-stack">
                            <span>REITs</span>
                            <span>FUNDS</span>
                            <span>BANKS</span>
                            <span>RWA SPONSORS</span>
                            <span>FAMILY OFFICES</span>
                            <span>DEVELOPERS</span>
                        </div>
                    </div>
                </section>

                <section class="section section-plum home-perspectives">
                    <div class="container">
                        <div class="section-header-row mb-4">
                            <div>
                                <span class="eyebrow mb-2">
                                    <span class="en-only">Perspectives</span>
                                    <span class="kr-only">인사이트</span>
                                </span>
                                <h2 class="mb-2">
                                    <span class="en-only">Perspective-led cards for market context and operating clarity.</span>
                                    <span class="kr-only">시장 맥락과 운영 명확성을 위한 퍼스펙티브 카드.</span>
                                </h2>
                            </div>
                        </div>
                        <div class="grid-2">
                            <div class="card perspective-card">
                                <span class="update-tag">BRIEF</span>
                                <h3 class="mb-3 en-only">Desktop products are only defensible when scope is explicit.</h3>
                                <h3 class="mb-3 kr-only">탁상형 상품은 범위가 명확할 때만 방어 가능합니다.</h3>
                                <p class="text-secondary en-only">A low-friction purchase flow still needs visible scope boundaries, refund conditions, and clear statements on what is not included.</p>
                                <p class="text-secondary kr-only">마찰이 적은 결제 흐름이라도 제공 범위, 환불 조건, 미포함 사항이 명확해야 심사와 실제 운영 모두 안정적입니다.</p>
                                <a href="/refund-policy" data-link class="link-arrow">
                                    <span class="en-only">Open policy</span>
                                    <span class="kr-only">정책 보기</span> <span>&rarr;</span>
                                </a>
                            </div>
                            <div class="card perspective-card">
                                <span class="update-tag">NOTE</span>
                                <h3 class="mb-3 en-only">RWA-style UX works well for property services when trust markers come first.</h3>
                                <h3 class="mb-3 kr-only">RWA형 UX는 신뢰 마커가 먼저 나올 때 부동산 서비스에도 잘 맞습니다.</h3>
                                <p class="text-secondary en-only">That means standards, buyer types, payment structure, and evidence architecture should be visible before long-form copy.</p>
                                <p class="text-secondary kr-only">즉 긴 설명보다 앞서 기준 체계, 구매 가능 대상, 결제 구조, 증거 설계가 먼저 보여야 합니다.</p>
                                <a href="/process" data-link class="link-arrow">
                                    <span class="en-only">See process</span>
                                    <span class="kr-only">프로세스 보기</span> <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section home-system">
                    <div class="container">
                        <div class="system-panel card">
                            <div class="system-main">
                                <span class="eyebrow mb-3">
                                    <span class="en-only">System</span>
                                    <span class="kr-only">시스템</span>
                                </span>
                                <h2 class="mb-3">
                                    <span class="en-only">One interface for advisory, underwriting, and lightweight property execution.</span>
                                    <span class="kr-only">자문, 언더라이팅, 경량 실행을 하나의 인터페이스로 연결합니다.</span>
                                </h2>
                                <p class="text-secondary display-copy en-only">The structure follows a product landing rhythm rather than a traditional corporate brochure: headline, modules, social proof, signal cards, hard metrics, and immediate conversion paths.</p>
                                <p class="text-secondary display-copy kr-only">전통적인 회사소개 브로셔가 아니라, 제품 랜딩의 리듬에 맞춰 헤드라인, 모듈, 신뢰 요소, 시그널 카드, 핵심 지표, 즉시 전환 경로로 재구성했습니다.</p>
                            </div>
                            <div class="system-tiles">
                                <a href="/services/cross-border" data-link class="system-tile">
                                    <span>01</span>
                                    <strong data-i18n="nav_service_1">Cross-border Valuation & Advisory</strong>
                                </a>
                                <a href="/services/financial-reporting" data-link class="system-tile">
                                    <span>02</span>
                                    <strong data-i18n="nav_service_2">Lending & Financial Reporting</strong>
                                </a>
                                <a href="/services/dispute-support" data-link class="system-tile">
                                    <span>03</span>
                                    <strong data-i18n="nav_service_3">Appraisal Review & Dispute Support</strong>
                                </a>
                                <a href="/desktop-appraisal" data-link class="system-tile system-tile-highlight">
                                    <span>04</span>
                                    <strong data-i18n="nav_desktop_appraisal">Desktop Appraisal (KRW 1,000)</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section section-light home-cta">
                    <div class="container">
                        <div class="cta-stage">
                            <div class="cta-main">
                                <span class="eyebrow mb-3">
                                    <span class="en-only">Next step</span>
                                    <span class="kr-only">다음 단계</span>
                                </span>
                                <h2 class="mb-3">
                                    <span class="en-only">Move from site visit to conversion without breaking the tone.</span>
                                    <span class="kr-only">랜딩에서 전환까지 같은 톤으로 이어지도록 설계했습니다.</span>
                                </h2>
                                <p class="text-secondary display-copy en-only">Proposal request, desktop appraisal payment, and refund review now sit inside the same design language.</p>
                                <p class="text-secondary display-copy kr-only">제안 요청, 탁상 감정 결제, 환불 검토가 모두 동일한 디자인 언어 안에 연결됩니다.</p>
                            </div>
                            <div class="cta-cards">
                                <a href="/contact" data-link class="cta-card">
                                    <strong data-i18n="nav_contact">Contact</strong>
                                    <p class="text-secondary en-only">For funds, lenders, and larger mandates.</p>
                                    <p class="text-secondary kr-only">펀드, 금융기관, 대형 의뢰를 위한 경로.</p>
                                </a>
                                <a href="/desktop-appraisal" data-link class="cta-card">
                                    <strong data-i18n="nav_desktop_appraisal">Desktop Appraisal (KRW 1,000)</strong>
                                    <p class="text-secondary en-only">Single-payment entry flow with guest checkout.</p>
                                    <p class="text-secondary kr-only">비회원 결제가 가능한 단건 결제 흐름.</p>
                                </a>
                                <a href="/refund-policy" data-link class="cta-card">
                                    <strong class="en-only">Refund Policy</strong>
                                    <strong class="kr-only">환불정책</strong>
                                    <p class="text-secondary en-only">Visible standards before payment and after order intake.</p>
                                    <p class="text-secondary kr-only">결제 전후 모두 확인 가능한 환불 기준.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style>
                .home-hero {
                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    padding-top: clamp(56px, 8vw, 88px);
                    padding-bottom: 2rem;
                }
                .hero-media {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(180deg, rgba(5, 8, 20, 0.12), rgba(5, 8, 20, 0.82)),
                        linear-gradient(90deg, rgba(5, 8, 20, 0.84), rgba(5, 8, 20, 0.22) 48%, rgba(5, 8, 20, 0.72)),
                        url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=80') center/cover;
                    border-bottom-left-radius: 34px;
                    border-bottom-right-radius: 34px;
                    overflow: hidden;
                }
                .hero-grid {
                    position: relative;
                    z-index: 1;
                    min-height: clamp(640px, 78vh, 860px);
                    display: grid;
                    grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.72fr);
                    gap: 1.75rem;
                    align-items: center;
                    padding: clamp(1.5rem, 3vw, 2.5rem) 0 0;
                }
                .hero-copy {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0;
                }
                .hero-headline {
                    max-width: 10ch;
                }
                .hero-subcopy {
                    max-width: 56ch;
                }
                .hero-actions {
                    display: flex;
                    gap: 0.85rem;
                    flex-wrap: wrap;
                }
                .hero-copy .pill-row {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 0.75rem;
                    max-width: 720px;
                    width: 100%;
                }
                .hero-copy .pill {
                    justify-content: center;
                    min-height: 54px;
                    text-align: center;
                    line-height: 1.35;
                    padding: 0.85rem 0.95rem;
                }
                .hero-panel {
                    width: min(100%, 500px);
                    margin: 0 0 0 auto;
                    align-self: center;
                }
                .hero-panel-list {
                    display: grid;
                    gap: 0.8rem;
                }
                .hero-module {
                    display: grid;
                    grid-template-columns: 42px 1fr;
                    gap: 1rem;
                    padding: 1rem;
                    border-radius: 18px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .hero-module:hover {
                    background: rgba(255, 255, 255, 0.08);
                }
                .hero-module strong {
                    display: block;
                    margin-bottom: 0.4rem;
                }
                .hero-module p {
                    font-size: 0.9rem;
                }
                .hero-module-label {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                    font-weight: 800;
                }
                .module-accent {
                    background: rgba(186, 162, 255, 0.14);
                    border-color: rgba(186, 162, 255, 0.25);
                }
                .hero-strip {
                    position: relative;
                    z-index: 1;
                    margin-top: 1rem;
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    align-items: center;
                }
                .hero-strip-copy {
                    color: var(--text-secondary);
                    max-width: 44rem;
                }
                .hero-strip-links {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                }
                .home-logo-strip {
                    position: relative;
                    z-index: 1;
                    padding: 1.4rem 0 0;
                }
                .logo-cloud {
                    display: grid;
                    grid-template-columns: repeat(8, minmax(0, 1fr));
                    gap: 0.8rem;
                    align-items: center;
                }
                .logo-cloud span {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 58px;
                    border-radius: 18px;
                    border: 1px solid var(--border-color);
                    background: rgba(255, 255, 255, 0.03);
                    color: var(--text-secondary);
                    font-size: 0.82rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                }
                .home-announcements {
                    padding-top: 2rem;
                }
                .section-header-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    align-items: end;
                }
                .update-card {
                    min-height: 260px;
                }
                .update-tag {
                    display: inline-flex;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding: 0.5rem 0.75rem;
                    border-radius: 999px;
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    color: var(--text-secondary);
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                }
                .update-ink {
                    background:
                        linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01)),
                        rgba(11, 16, 34, 0.96);
                }
                .update-grid {
                    background:
                        linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01)),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        rgba(10, 14, 28, 0.96);
                    background-size: auto, 24px 24px, 24px 24px, auto;
                }
                .update-photo {
                    background:
                        linear-gradient(180deg, rgba(5, 8, 20, 0.32), rgba(5, 8, 20, 0.94)),
                        url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80') center/cover;
                }
                .update-accent {
                    background:
                        linear-gradient(180deg, rgba(186, 162, 255, 0.28), rgba(54, 19, 94, 0.95)),
                        rgba(47, 9, 82, 0.96);
                }
                .metrics-layout,
                .ecosystem-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
                    gap: 2rem;
                    align-items: start;
                }
                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 1px;
                    border-radius: 28px;
                    overflow: hidden;
                    background: var(--border-color-dark);
                }
                .metric-card {
                    background: rgba(255, 255, 255, 0.94);
                    padding: 2rem;
                }
                .ecosystem-stack {
                    display: grid;
                    gap: 0.8rem;
                    align-content: start;
                    justify-items: end;
                }
                .ecosystem-stack span {
                    font-size: clamp(1.7rem, 4vw, 3.5rem);
                    line-height: 1;
                    font-weight: 700;
                    color: rgba(18, 22, 41, 0.22);
                    letter-spacing: -0.06em;
                }
                .ecosystem-stack span:nth-child(3) {
                    color: var(--text-dark);
                }
                .home-perspectives .card {
                    background: rgba(255, 255, 255, 0.06);
                }
                .system-panel {
                    display: grid;
                    grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
                    gap: 1.8rem;
                    background:
                        radial-gradient(circle at top right, rgba(186, 162, 255, 0.16), transparent 35%),
                        linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
                        rgba(11, 17, 36, 0.96);
                }
                .system-tiles {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 1rem;
                }
                .system-tile {
                    display: grid;
                    gap: 0.8rem;
                    align-content: start;
                    min-height: 172px;
                    padding: 1.25rem;
                    border-radius: 22px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.04);
                }
                .system-tile span {
                    color: var(--text-muted);
                    font-size: 0.8rem;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                }
                .system-tile-highlight {
                    background: rgba(186, 162, 255, 0.16);
                    border-color: rgba(186, 162, 255, 0.28);
                }
                .cta-stage {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 244, 248, 0.96));
                    border: 1px solid var(--border-color-dark);
                    border-radius: 30px;
                    padding: clamp(1.5rem, 3vw, 2rem);
                    box-shadow: var(--shadow-soft);
                }
                .cta-cards {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 1rem;
                    margin-top: 1.4rem;
                }
                .cta-card {
                    display: grid;
                    gap: 0.6rem;
                    padding: 1.35rem;
                    border-radius: 20px;
                    background: rgba(18, 22, 41, 0.04);
                    border: 1px solid var(--border-color-dark);
                    color: var(--text-dark);
                }
                .cta-card:hover {
                    transform: translateY(-3px);
                }
                @media (max-width: 1080px) {
                    .hero-grid,
                    .metrics-layout,
                    .ecosystem-layout,
                    .system-panel {
                        grid-template-columns: 1fr;
                    }
                    .hero-headline {
                        max-width: 12ch;
                    }
                    .hero-panel {
                        width: min(100%, 680px);
                        margin-left: 0;
                    }
                }
                @media (max-width: 900px) {
                    .logo-cloud {
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                    .update-card {
                        min-height: 220px;
                    }
                    .metrics-grid,
                    .cta-cards,
                    .system-tiles {
                        grid-template-columns: 1fr;
                    }
                    .hero-strip {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .hero-copy .pill-row {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }
                @media (max-width: 768px) {
                    .hero-grid {
                        min-height: auto;
                        gap: 1rem;
                        padding-top: 0.75rem;
                    }
                    .hero-copy {
                        padding: 1.5rem 0 0;
                    }
                    .hero-headline,
                    .hero-subcopy {
                        max-width: none;
                    }
                    .hero-panel {
                        margin-bottom: 0;
                    }
                    .hero-actions {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    .hero-actions .btn {
                        width: 100%;
                    }
                    .logo-cloud {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                    .logo-cloud span {
                        min-height: 50px;
                        font-size: 0.72rem;
                        letter-spacing: 0.05em;
                    }
                    .section-header-row {
                        align-items: start;
                    }
                    .hero-strip-links {
                        width: 100%;
                        flex-direction: column;
                        align-items: stretch;
                    }
                    .hero-strip-links .link-arrow {
                        justify-content: space-between;
                    }
                    .hero-copy .pill-row {
                        grid-template-columns: 1fr;
                        max-width: none;
                    }
                    .hero-copy .pill {
                        min-height: 48px;
                    }
                    .metric-card {
                        padding: 1.4rem;
                    }
                    .system-tile {
                        min-height: 132px;
                    }
                    .cta-stage {
                        padding: 1.1rem;
                        border-radius: 24px;
                    }
                    .ecosystem-stack {
                        justify-items: start;
                    }
                }
                @media (max-width: 560px) {
                    .home-hero {
                        padding-top: 1.25rem;
                        padding-bottom: 1rem;
                    }
                    .hero-headline {
                        max-width: none;
                    }
                    .hero-module {
                        grid-template-columns: 36px 1fr;
                        gap: 0.75rem;
                        padding: 0.9rem;
                    }
                    .hero-module-label {
                        width: 36px;
                        height: 36px;
                        font-size: 0.72rem;
                    }
                    .hero-strip {
                        padding: 1rem;
                    }
                    .hero-copy .pill {
                        font-size: 0.82rem;
                        padding: 0.8rem 0.9rem;
                    }
                    .update-card {
                        min-height: auto;
                    }
                    .metrics-grid {
                        border-radius: 22px;
                    }
                    .metric-card {
                        padding: 1.2rem;
                    }
                    .ecosystem-stack span {
                        font-size: clamp(1.5rem, 10vw, 2.4rem);
                    }
                    .system-panel {
                        gap: 1rem;
                    }
                    .cta-card {
                        padding: 1rem;
                    }
                }
            </style>
        `;
    }
}
