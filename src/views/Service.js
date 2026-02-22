export default class ServiceView {
    constructor(type) {
        this.type = type;

        this.contentData = {
            'cross-border': {
                title: "W Appraisal Company | Cross-border Valuation",
                headline: "Cross-border Valuation & Advisory",
                purpose: "International coordination with local nuance and global documentation standards.",
                who: ["Institutional investors", "Fund managers", "Developers"],
                scope: [
                    "Cross-border coordination",
                    "Valuation reporting",
                    "Documentation",
                    "Stakeholder communication"
                ],
                methodology: [
                    "Market approach",
                    "Income approach",
                    "Cost approach",
                    "Context of fair value measurement"
                ],
                deliverables: [
                    "Executive summary",
                    "Full valuation report",
                    "Assumptions schedule",
                    "Sensitivity analysis",
                    "Documentation appendix"
                ],
                quality: [
                    "Methodological transparency",
                    "Documentation trail",
                    "Independent review step"
                ]
            },
            'financial-reporting': {
                title: "W Appraisal Company | Financial Reporting",
                headline: "Lending & Financial Reporting Valuation",
                purpose: "Fair value context, audit-ready documentation, and consistency of assumptions.",
                who: ["Financial institutions", "Fund managers", "REITs"],
                scope: [
                    "Fair value measurement context",
                    "Financial reporting alignment",
                    "Audit-ready documentation",
                    "Consistency of assumptions over time"
                ],
                methodology: [
                    "Market approach",
                    "Income approach (DCF modeling)",
                    "Cost approach",
                    "Context of IFRS / US GAAP"
                ],
                deliverables: [
                    "Executive summary",
                    "Full valuation report",
                    "Assumptions schedule",
                    "Sensitivity analysis",
                    "Audit liaison"
                ],
                quality: [
                    "Methodological transparency",
                    "Documentation trail",
                    "Independent review step"
                ]
            },
            'dispute-support': {
                title: "W Appraisal Company | Dispute Support",
                headline: "Appraisal Review & Dispute Support",
                purpose: "Independent second opinion, assumption review, and risk clarification.",
                who: ["Institutional investors", "Legal counsel", "Private clients"],
                scope: [
                    "Independent second opinion",
                    "Assumption review",
                    "Methodology assessment",
                    "Risk clarification memo"
                ],
                methodology: [
                    "Market approach review",
                    "Income approach validation",
                    "Cost approach verification",
                    "Standards compliance check"
                ],
                deliverables: [
                    "Executive summary",
                    "Review report",
                    "Assumptions schedule variance",
                    "Risk clarification memo",
                    "Documentation appendix"
                ],
                quality: [
                    "Methodological transparency",
                    "Documentation trail",
                    "Independent review step"
                ]
            }
        };
    }

    async render() {
        const data = this.contentData[this.type];
        if (!data) return '<div class="container section"><h2>Service not found</h2></div>';

        document.title = data.title;

        return `
            <div class="view-service fade-in">
                <!-- Header -->
                <section class="page-header section text-center" style="padding-bottom: 3rem;">
                    <div class="container">
                        <h1 class="mb-3">${data.headline}</h1>
                        <p class="text-secondary" style="max-width: 800px; margin: 0 auto; font-size: 1.1rem;">
                            ${data.purpose}
                        </p>
                    </div>
                </section>

                <section class="section pt-0">
                    <div class="container">
                        <div class="grid-2">
                            <!-- Left Column: Scope & Methodology -->
                            <div>
                                <div class="card mb-4">
                                    <h3 class="text-accent mb-3">Scope of Work</h3>
                                    <ul class="check-list">
                                        ${data.scope.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="card mb-4">
                                    <h3 class="text-accent mb-3">Methodology Overview</h3>
                                    <ul class="bullet-list">
                                        ${data.methodology.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                            
                            <!-- Right Column: Audiences, Deliverables, Quality -->
                            <div>
                                <div class="card mb-4">
                                    <h3 class="text-primary mb-3">Who It Is For</h3>
                                    <div class="tags">
                                        ${data.who.map(item => `<span class="badge badge-outline">${item}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="card mb-4">
                                    <h3 class="text-primary mb-3">Deliverables</h3>
                                    <ul class="bullet-list">
                                        ${data.deliverables.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="card mb-4">
                                    <h3 class="text-primary mb-3">Quality & Standards</h3>
                                    <ul class="bullet-list">
                                        ${data.quality.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <!-- CTA Section -->
                        <div class="cta-section mt-5 text-center card" style="background: rgba(34,211,238,0.02); max-width: 800px; margin-left: auto; margin-right: auto;">
                            <h3 class="mb-3">Ready to Discuss Your Portfolio?</h3>
                            <div class="d-flex justify-content-center" style="gap: 1rem;">
                                <a href="#/contact" data-link class="btn btn-primary" data-i18n="btn_req_proposal">Request a Proposal</a>
                                <a href="#/team" data-link class="btn btn-secondary">Speak With Our Team</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <style>
                .page-header {
                    background: radial-gradient(circle at 50% 10%, rgba(34,211,238,0.05) 0%, transparent 70%);
                }
                .check-list, .bullet-list {
                    padding-left: 0;
                }
                .check-list li, .bullet-list li {
                    color: var(--text-secondary);
                    margin-bottom: 0.75rem;
                    position: relative;
                    padding-left: 1.5rem;
                }
                .check-list li::before {
                    content: "✓";
                    position: absolute;
                    left: 0;
                    color: var(--accent);
                    font-weight: bold;
                }
                .bullet-list li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--text-secondary);
                }
                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .badge-outline {
                    border: 1px solid var(--border-color);
                    background: transparent;
                    color: var(--text-secondary);
                }
                .d-flex { display: flex; }
                .justify-content-center { justify-content: center; }
            </style>
        `;
    }
}
