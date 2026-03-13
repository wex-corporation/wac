export default class HomeView {
    constructor() {
        this.title = "W Appraisal Company | Valuation you can defend";
    }

    async render() {
        document.title = this.title;

        return `
            <div class="view-home fade-in">
                <!-- Hero Section -->
                <section class="hero section">
                    <div class="container text-center">
                        <h1 class="hero-headline mb-3 fade-in delay-1" data-i18n="hero_headline">Valuation you can defend</h1>
                        <p class="hero-subcopy mb-4 text-secondary fade-in delay-2" data-i18n="hero_subcopy">
                            Global standards context. Transparent methodology. Independent analysis. Delivered in Korean and English.
                        </p>
                        <div class="hero-actions fade-in delay-3">
                            <a href="/contact" data-link class="btn btn-primary" data-i18n="btn_req_proposal">Request a Proposal</a>
                            <a href="/services/cross-border" data-link class="btn btn-secondary ml-3" data-i18n="btn_explore_services" style="margin-left: 1rem;">Explore Our Services</a>
                        </div>
                    </div>
                </section>

                <!-- Trust Strip -->
                <section class="trust-strip section fade-in delay-3">
                    <div class="container">
                        <div class="trust-badges">
                            <div class="trust-badge card">
                                <span data-i18n="trust_1">International standards context</span>
                            </div>
                            <div class="trust-badge card">
                                <span data-i18n="trust_2">Independent practice</span>
                            </div>
                            <div class="trust-badge card">
                                <span data-i18n="trust_3">Bilingual delivery</span>
                            </div>
                            <div class="trust-badge card">
                                <span data-i18n="trust_4">Documented methodology</span>
                            </div>
                            <div class="trust-badge card">
                                <span data-i18n="trust_5">Quality control framework</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Services Overview -->
                <section id="services" class="services-overview section">
                    <div class="container">
                        <div class="grid-3">
                            <!-- Service 1 -->
                            <div class="card service-card">
                                <h3 data-i18n="nav_service_1">Cross-border Valuation & Advisory</h3>
                                <p class="text-secondary mb-4" data-i18n="srv_1_desc">International coordination with local nuance and global documentation standards.</p>
                                <a href="/services/cross-border" data-link class="text-accent link-arrow">
                                    <span data-i18n="btn_learn_more">Learn More</span> &rarr;
                                </a>
                            </div>
                            <!-- Service 2 -->
                            <div class="card service-card">
                                <h3 data-i18n="nav_service_2">Lending & Financial Reporting</h3>
                                <p class="text-secondary mb-4" data-i18n="srv_2_desc">Fair value context, audit-ready documentation, and consistency of assumptions.</p>
                                <a href="/services/financial-reporting" data-link class="text-accent link-arrow">
                                    <span data-i18n="btn_learn_more">Learn More</span> &rarr;
                                </a>
                            </div>
                            <!-- Service 3 -->
                            <div class="card service-card">
                                <h3 data-i18n="nav_service_3">Appraisal Review & Dispute Support</h3>
                                <p class="text-secondary mb-4" data-i18n="srv_3_desc">Independent second opinion, assumption review, and risk clarification.</p>
                                <a href="/services/dispute-support" data-link class="text-accent link-arrow">
                                    <span data-i18n="btn_learn_more">Learn More</span> &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Process Section -->
                <section class="process-section section">
                    <div class="container text-center">
                        <h2 data-i18n="process_title" class="mb-5">Structured Methodology. Transparent Documentation.</h2>
                        <div class="process-timeline">
                            <div class="process-node card">
                                <div class="node-number text-accent">1</div>
                                <h4 data-i18n="step_1">Scope Definition</h4>
                            </div>
                            <div class="process-line"></div>
                            <div class="process-node card">
                                <div class="node-number text-accent">2</div>
                                <h4 data-i18n="step_2">Data Collection & Assumptions</h4>
                            </div>
                            <div class="process-line"></div>
                            <div class="process-node card">
                                <div class="node-number text-accent">3</div>
                                <h4 data-i18n="step_3">Valuation Analysis</h4>
                            </div>
                            <div class="process-line"></div>
                            <div class="process-node card">
                                <div class="node-number text-accent">4</div>
                                <h4 data-i18n="step_4">Quality Control & Review</h4>
                            </div>
                            <div class="process-line"></div>
                            <div class="process-node card">
                                <div class="node-number text-accent">5</div>
                                <h4 data-i18n="step_5">Deliverables & Documentation</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- About -> short section -->
                <section class="about-section section">
                    <div class="container text-center">
                        <h2 data-i18n="about_title" class="mb-3">About the Firm</h2>
                        <p class="text-secondary" style="max-width: 800px; margin: 0 auto; font-size: 1.1rem; line-height: 1.8;" data-i18n="about_copy">
                            W Appraisal Company is a cross-border real estate valuation and advisory firm serving institutional investors, financial institutions, REITs, funds, and high-net-worth clients. We deliver defensible valuation, audit-ready documentation, and globally aligned standards with local market intelligence.
                        </p>
                    </div>
                </section>
            </div>
            
            <style>
                .hero {
                    min-height: 70vh;
                    display: flex;
                    align-items: center;
                    background: radial-gradient(circle at 50% 30%, rgba(34,211,238,0.05) 0%, transparent 70%);
                }
                .hero-headline {
                    font-size: clamp(2.5rem, 5vw, 4.5rem);
                    font-weight: 700;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                }
                .hero-subcopy {
                    font-size: 1.25rem;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .trust-strip {
                    background: rgba(255,255,255,0.02);
                    border-top: 1px solid var(--border-color);
                    border-bottom: 1px solid var(--border-color);
                    padding: 3rem 0;
                }
                .trust-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    justify-content: center;
                }
                .trust-badge {
                    padding: 1rem 1.5rem;
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    background: rgba(31, 41, 55, 0.5);
                    color: var(--text-secondary);
                }
                .trust-badge:hover {
                    color: var(--text-primary);
                }
                
                .process-timeline {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                .process-node {
                    flex: 1;
                    min-width: 180px;
                    padding: 2rem 1.5rem;
                    position: relative;
                    text-align: center;
                }
                .node-number {
                    font-size: 2rem;
                    font-weight: 700;
                    opacity: 0.5;
                    margin-bottom: 0.5rem;
                }
                .process-node h4 { margin: 0; font-size: 0.95rem; }
                
                .process-line {
                    height: 2px;
                    background: var(--border-color);
                    flex: 0 1 30px;
                }
                
                @media (max-width: 992px) {
                    .process-timeline { flex-direction: column; align-items: stretch; }
                    .process-line { height: 30px; width: 2px; margin: 0 auto; }
                }
            </style>
        `;
    }
}
