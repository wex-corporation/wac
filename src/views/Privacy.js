export default class PrivacyView {
    constructor() {
        this.title = "W Appraisal Company | Privacy Policy";
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-privacy fade-in">
                <section class="page-header section text-center" style="padding-bottom: 2rem;">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="privacy_title">Privacy Policy</h1>
                        <p class="text-secondary" data-i18n="privacy_last_updated">Last Updated: October 2023</p>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container" style="max-width: 800px; line-height: 1.8;">
                        <div class="card p-5">
                            <h3 class="mb-3 text-primary" data-i18n="privacy_h1">1. Information We Collect</h3>
                            <p class="text-secondary mb-4" data-i18n="privacy_p1">We collect information you provide directly to us, such as when you request a proposal, submit a form for a desktop appraisal, or communicate with us. This may include your name, email address, property details, and other contact information.</p>

                            <h3 class="mb-3 text-primary" data-i18n="privacy_h2">2. How We Use Information</h3>
                            <p class="text-secondary mb-4" data-i18n="privacy_p2">We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and for compliance with legal obligations.</p>

                            <h3 class="mb-3 text-primary" data-i18n="privacy_h3">3. Information Sharing</h3>
                            <p class="text-secondary mb-4" data-i18n="privacy_p3">We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. All client data and property information is kept strictly confidential in accordance with our professional standards.</p>

                            <h3 class="mb-3 text-primary" data-i18n="privacy_h4">4. Contact Us</h3>
                            <p class="text-secondary" data-i18n="privacy_p4">If you have any questions about this Privacy Policy, please contact us at info@wappraisal.com.</p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
