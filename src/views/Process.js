export default class ProcessView {
    constructor() {
        this.title = "W Appraisal Company | Process & Standards";
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-process fade-in">
                <!-- Header -->
                <section class="page-header section text-center">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="process_main_title">Structured Methodology. Transparent Documentation.</h1>
                        <p class="text-secondary" style="max-width: 800px; margin: 0 auto; font-size: 1.1rem;">
                            Our process ensures every valuation is defensible, documented, and aligned with global standards.
                        </p>
                    </div>
                </section>

                <section class="section">
                    <div class="container">
                        <div class="grid-2">
                            <!-- Scope Definition Framework -->
                            <div class="card mb-4">
                                <h3 class="text-accent mb-3">Scope Definition Framework</h3>
                                <ul>
                                    <li class="mb-2">&bull; Engagement structure</li>
                                    <li class="mb-2">&bull; Purpose</li>
                                    <li class="mb-2">&bull; Valuation date</li>
                                    <li class="mb-2">&bull; Assumptions</li>
                                </ul>
                            </div>

                            <!-- Standards Context -->
                            <div class="card mb-4">
                                <h3 class="text-accent mb-3">Standards Context</h3>
                                <ul>
                                    <li class="mb-2">&bull; International valuation standards context</li>
                                    <li class="mb-2">&bull; Financial reporting framework alignment</li>
                                    <li class="mb-2">&bull; Professional independence</li>
                                </ul>
                            </div>

                            <!-- Documentation Framework -->
                            <div class="card mb-4">
                                <h3 class="text-accent mb-3">Documentation Framework</h3>
                                <ul>
                                    <li class="mb-2">&bull; Source referencing</li>
                                    <li class="mb-2">&bull; Assumption log</li>
                                    <li class="mb-2">&bull; Model transparency</li>
                                    <li class="mb-2">&bull; Audit-ready structure</li>
                                </ul>
                            </div>

                            <!-- Quality Control -->
                            <div class="card mb-4">
                                <h3 class="text-accent mb-3">Quality Control</h3>
                                <ul>
                                    <li class="mb-2">&bull; Internal review stage</li>
                                    <li class="mb-2">&bull; Cross-check of assumptions</li>
                                    <li class="mb-2">&bull; Consistency verification</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Independence & Conflicts -->
                        <div class="card mt-5 text-center" style="max-width: 800px; margin-left: auto; margin-right: auto;">
                            <h3 class="mb-3">Independence & Conflicts</h3>
                            <p class="text-secondary">
                                Clear independence statement. No bias. No contingent outcomes.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            
            <style>
                .page-header {
                    background: radial-gradient(circle at 10% 50%, rgba(34,211,238,0.03) 0%, transparent 60%);
                }
                .view-process ul { padding-left: 0; }
                .view-process li { color: var(--text-secondary); }
            </style>
        `;
    }
}
