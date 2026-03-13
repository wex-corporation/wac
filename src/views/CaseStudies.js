export default class CaseStudiesView {
    constructor() {
        this.title = "W Appraisal Company | Case Studies";
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-cases fade-in">
                <section class="page-header section text-center">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="case_main_title">Case Highlights</h1>
                        <p class="text-secondary" style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
                            Demonstrating defensible valuation across complex global assets.
                        </p>
                    </div>
                </section>

                <section class="section pt-0">
                    <div class="container">
                        <div class="grid-3">
                            <!-- Case 1 -->
                            <div class="card">
                                <span class="badge mb-2">Office & Logistics</span>
                                <h3 class="mb-2">Cross-border Portfolio Valuation</h3>
                                <p class="text-secondary mb-3"><strong>Purpose:</strong> US REIT Financial Reporting</p>
                                <p class="text-secondary mb-3"><strong>Challenge:</strong> Reconciling local Asian market data with US GAAP fair value requirements under tight audit deadlines.</p>
                                <p class="text-primary mb-4"><strong>Outcome:</strong> Fully documented valuation models cleared by Big 4 auditors without methodology adjustments.</p>
                                <a href="#" class="btn btn-secondary btn-sm" data-i18n="btn_view_case">View Case</a>
                            </div>

                            <!-- Case 2 -->
                            <div class="card">
                                <span class="badge mb-2">Mixed-use</span>
                                <h3 class="mb-2">Development Asset Financing</h3>
                                <p class="text-secondary mb-3"><strong>Purpose:</strong> Secured Lending</p>
                                <p class="text-secondary mb-3"><strong>Challenge:</strong> Complex gross development value (GDV) assessment requiring independent construction cost verification.</p>
                                <p class="text-primary mb-4"><strong>Outcome:</strong> Transparent risk assessment provided the lender with clarity to underwrite a $150M senior facility.</p>
                                <a href="#" class="btn btn-secondary btn-sm" data-i18n="btn_view_case">View Case</a>
                            </div>

                            <!-- Case 3 -->
                            <div class="card">
                                <span class="badge mb-2">Hospitality</span>
                                <h3 class="mb-2">Dispute Support & Review</h3>
                                <p class="text-secondary mb-3"><strong>Purpose:</strong> Litigation Support</p>
                                <p class="text-secondary mb-3"><strong>Challenge:</strong> Reviewing a highly contested valuation of a luxury resort with subjective premium assumptions.</p>
                                <p class="text-primary mb-4"><strong>Outcome:</strong> Independent review memo highlighting methodological flaws, leading to successful renegotiation.</p>
                                <a href="#" class="btn btn-secondary btn-sm" data-i18n="btn_view_case">View Case</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <style>
                .badge {
                    display: inline-block;
                    padding: 4px 10px;
                    background: rgba(186,162,255,0.14);
                    color: var(--accent);
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .pt-0 { padding-top: 0; }
            </style>
        `;
    }
}
