export default class AccessibilityView {
    constructor() {
        this.title = 'W Appraisal Company | Accessibility Statement';
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-accessibility fade-in">
                <section class="page-header section text-center" style="padding-bottom: 2rem;">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="accessibility_title">Accessibility Statement</h1>
                        <p class="text-secondary" data-i18n="accessibility_last_updated">Last Updated: March 2026</p>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container" style="max-width: 800px; line-height: 1.8;">
                        <div class="card p-5">
                            <h3 class="mb-3 text-primary">Commitment</h3>
                            <p class="text-secondary mb-4">We aim to make this website usable for as many visitors as possible by supporting clear navigation, readable typography, responsive layouts, and keyboard-friendly interactions.</p>

                            <h3 class="mb-3 text-primary">Continuous Improvement</h3>
                            <p class="text-secondary mb-4">Accessibility is an ongoing effort. We regularly review the site for usability issues and improve content structure, color contrast, and form clarity where needed.</p>

                            <h3 class="mb-3 text-primary">Feedback</h3>
                            <p class="text-secondary">If you encounter an accessibility barrier while using this website, please email info@wappraisal.com and include the page you were trying to access.</p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
}
