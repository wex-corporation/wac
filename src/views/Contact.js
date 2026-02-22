export default class ContactView {
    constructor() {
        this.title = "W Appraisal Company | Contact";
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-contact fade-in">
                <section class="page-header section text-center" style="padding-bottom: 2rem;">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="contact_title">Request a Proposal</h1>
                        <p class="text-secondary">We will respond within 24 hours to discuss your valuation needs.</p>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container">
                        <div class="card contact-form-card" style="max-width: 800px; margin: 0 auto;">
                            <form id="contactForm" class="contact-form">
                                <div class="grid-2 mb-3">
                                    <div class="form-group">
                                        <label for="name">Name *</label>
                                        <input type="text" id="name" required class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="company">Company *</label>
                                        <input type="text" id="company" required class="form-control">
                                    </div>
                                </div>
                                
                                <div class="form-group mb-3">
                                    <label for="email">Email *</label>
                                    <input type="email" id="email" required class="form-control">
                                </div>
                                
                                <div class="grid-2 mb-3">
                                    <div class="form-group">
                                        <label for="purpose">Purpose of Valuation *</label>
                                        <select id="purpose" required class="form-control">
                                            <option value="">Select purpose...</option>
                                            <option value="reporting">Financial Reporting</option>
                                            <option value="lending">Lending / Financing</option>
                                            <option value="transaction">Transaction / Advisory</option>
                                            <option value="review">Appraisal Review</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="valdate">Valuation Date *</label>
                                        <input type="date" id="valdate" required class="form-control">
                                    </div>
                                </div>
                                
                                <div class="grid-2 mb-3">
                                    <div class="form-group">
                                        <label for="location">Location *</label>
                                        <input type="text" id="location" required class="form-control" placeholder="City, Country">
                                    </div>
                                    <div class="form-group">
                                        <label for="asset_type">Asset Type *</label>
                                        <input type="text" id="asset_type" required class="form-control" placeholder="e.g. Office, Logistics, Mixed-use">
                                    </div>
                                </div>
                                
                                <div class="form-group mb-4">
                                    <label for="context">Additional Context (Optional)</label>
                                    <textarea id="context" rows="4" class="form-control"></textarea>
                                </div>
                                
                                <div class="form-group mb-4">
                                    <p class="text-secondary" style="font-size: 0.85rem;">
                                        By submitting this form, you agree to our <a href="#/privacy" data-link class="text-accent">Privacy Policy</a>. All information shared is kept strictly confidential.
                                    </p>
                                </div>
                                
                                <button type="submit" class="btn btn-primary" style="width: 100%;" data-i18n="btn_submit">Submit Request</button>
                            </form>
                            
                            <div id="formSuccess" class="form-success" style="display: none; text-align: center; padding: 3rem 0;">
                                <h3 class="text-accent mb-2">Request Received</h3>
                                <p class="text-secondary">Thank you. Our team will review your requirements and contact you shortly.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <style>
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }
                .form-control {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    background-color: rgba(0,0,0,0.2);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-btn);
                    color: var(--text-primary);
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color var(--transition-normal);
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
            </style>
        `;
    }

    attachEvents() {
        const form = document.getElementById('contactForm');
        const successContent = document.getElementById('formSuccess');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Simulate form submission
                form.style.display = 'none';
                successContent.style.display = 'block';
                // Note: The success message doesn't need to be localized in this mocked example, 
                // but realistically we should run i18n again or apply data-i18n attributes to the success markup.
            });
        }
    }
}
