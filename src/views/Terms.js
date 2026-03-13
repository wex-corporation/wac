export default class TermsView {
    constructor() {
        this.title = 'W Appraisal Company | Terms of Service';
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-terms fade-in">
                <section class="page-header section text-center" style="padding-bottom: 2rem;">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="terms_title">Terms of Service</h1>
                        <p class="text-secondary" data-i18n="terms_last_updated">Last Updated: March 2026</p>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container" style="max-width: 800px; line-height: 1.8;">
                        <div class="card p-5">
                            <h3 class="mb-3 text-primary">Scope of Services</h3>
                            <p class="text-secondary mb-4">The information on this website is provided for general business inquiry purposes. Any valuation or advisory engagement begins only after a separate written agreement confirms scope, assumptions, timing, fees, and deliverables.</p>

                            <h3 class="mb-3 text-primary">Professional Reliance</h3>
                            <p class="text-secondary mb-4">Reports, analyses, and supporting materials are prepared for the client and purpose identified in the engagement documents. Third-party reliance is not permitted unless expressly stated in writing.</p>

                            <h3 class="mb-3 text-primary">Website Content</h3>
                            <p class="text-secondary mb-4">All website content is provided on an as-is basis and may be updated without notice. Case studies, market commentary, and illustrative materials are for informational purposes only and do not constitute valuation advice.</p>

                            <h3 class="mb-3 text-primary">Contact</h3>
                            <p class="text-secondary">For engagement or legal inquiries, please contact info@wappraisal.com.</p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
