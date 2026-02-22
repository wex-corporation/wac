export default class InsightsView {
    constructor() {
        this.title = "W Appraisal Company | Insights";
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-insights fade-in">
                <section class="page-header section text-center">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="insights_main_title">Market Insights & Perspectives</h1>
                        <p class="text-secondary" style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
                            Research briefs and valuation perspectives from our independent practice.
                        </p>
                    </div>
                </section>

                <section class="section pt-0">
                    <div class="container" style="max-width: 900px;">
                        <!-- Insight 1 -->
                        <div class="insight-row mb-5 pb-5">
                            <span class="text-accent mb-2 d-block" style="font-size: 0.85rem;">Q1 2026</span>
                            <h2 class="mb-3">Navigating Fair Value in Volatile Markets</h2>
                            <p class="text-secondary mb-4">
                                As capitalization rates adjust to the new interest rate environment, documenting the rationale behind yield selection has never been more critical for audit success.
                            </p>
                            <a href="#" class="text-primary link-arrow">Read Brief &rarr;</a>
                        </div>
                        
                        <!-- Insight 2 -->
                        <div class="insight-row mb-5 pb-5">
                            <span class="text-accent mb-2 d-block" style="font-size: 0.85rem;">Q4 2025</span>
                            <h2 class="mb-3">Cross-border Valuations: The IVS and USPAP Bridge</h2>
                            <p class="text-secondary mb-4">
                                An analysis of how international capital flows are forcing greater alignment between regional valuation standards and global documentation expectations.
                            </p>
                            <a href="#" class="text-primary link-arrow">Read Brief &rarr;</a>
                        </div>
                    </div>
                </section>
            </div>
            
            <style>
                .insight-row {
                    border-bottom: 1px solid var(--border-color);
                }
                .insight-row:last-child {
                    border-bottom: none;
                }
                .d-block { display: block; }
                .link-arrow {
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .link-arrow:hover { gap: 0.75rem; }
            </style>
        `;
    }
}
