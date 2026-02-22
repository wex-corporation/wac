export default class DesktopAppraisalView {
    constructor() {
        this.title = "W Appraisal Company | Desktop Appraisal";
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-desktop-appraisal fade-in">
                <section class="page-header section text-center" style="padding-bottom: 2rem;">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="da_title">Desktop Appraisal Request</h1>
                        <p class="text-secondary" data-i18n="da_subtitle">Provide basic property details for a quick desktop valuation.</p>
                    </div>
                </section>

                <section class="section" style="padding-top: 0;">
                    <div class="container">
                        <div class="card contact-form-card" style="max-width: 800px; margin: 0 auto;">
                            <form id="desktopForm" class="contact-form">
                                <h3 class="mb-4 text-primary" data-i18n="da_form_info">Property & Contact Information</h3>
                                
<<<<<<< HEAD
                                <div class="form-group mb-3">
                                    <label for="da_address" data-i18n="da_address">Property Address *</label>
                                    <input type="text" id="da_address" required class="form-control" placeholder="">
                                </div>
                                
                                <div class="grid-2 mb-3">
                                    <div class="form-group">
                                        <label for="da_type" data-i18n="da_type">Property Type *</label>
                                        <select id="da_type" required class="form-control">
                                            <option value="" disabled selected data-i18n="da_type_select">Select type...</option>
                                            <option value="residential" data-i18n="da_residential">Residential</option>
                                            <option value="commercial" data-i18n="da_commercial">Commercial</option>
                                            <option value="land" data-i18n="da_land">Land</option>
                                            <option value="industrial" data-i18n="da_industrial">Industrial</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="da_area" data-i18n="da_area">Estimated Area (sqm) *</label>
                                        <input type="number" id="da_area" required class="form-control" placeholder="">
                                    </div>
                                </div>

                                <div class="grid-2 mb-4">
                                    <div class="form-group">
=======
                                <div class="grid-2 mb-3">
                                    <div class="form-group">
>>>>>>> c30f7c1 (Initial commit for W Appraisal Company website)
                                        <label for="da_name" data-i18n="da_name">Name *</label>
                                        <input type="text" id="da_name" required class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="da_email" data-i18n="da_email">Email *</label>
                                        <input type="email" id="da_email" required class="form-control">
                                    </div>
                                </div>
                                
<<<<<<< HEAD
=======
                                <div class="form-group mb-3">
                                    <label for="da_address" data-i18n="da_address">Target Property Address *</label>
                                    <input type="text" id="da_address" required class="form-control" placeholder="">
                                </div>
                                
                                <div class="form-group mb-4">
                                    <label for="da_due_date" data-i18n="da_due_date">Date Needed By *</label>
                                    <input type="date" id="da_due_date" required class="form-control" placeholder="">
                                </div>
                                
>>>>>>> c30f7c1 (Initial commit for W Appraisal Company website)
                                <div class="form-group mb-4 p-4 text-center" style="background: rgba(34,211,238,0.05); border-radius: 8px; border: 1px solid var(--border-color);">
                                    <h4 class="mb-2" data-i18n="da_payment_title">Payment Required</h4>
                                    <h2 class="text-accent mb-3">$1.00 USD</h2>
                                    <p class="text-secondary mb-0" style="font-size: 0.9rem;" data-i18n="da_payment_desc">Your desktop appraisal report will be delivered within 48 hours for a processing fee of $1.</p>
                                </div>
                                
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.1rem; padding: 14px 24px;" data-i18n="da_btn_pay">Pay $1 and Submit Request</button>
                                </div>
                            </form>
                            
                            <div id="daFormSuccess" class="form-success" style="display: none; text-align: center; padding: 3rem 0;">
                                <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;">&#10003;</div>
                                <h3 class="text-accent mb-2" data-i18n="da_success_title">Payment Successful & Request Received</h3>
                                <p class="text-secondary" data-i18n="da_success_desc">Thank you. Your $1 payment was successful and we have received your desktop appraisal request. The report will be sent to your email shortly.</p>
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
        const form = document.getElementById('desktopForm');
        const successContent = document.getElementById('daFormSuccess');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Simulate payment processing and form submission
                const btn = form.querySelector('button[type="submit"]');
                const origText = btn.innerHTML;
                btn.innerHTML = 'Processing Payment...';
                btn.disabled = true;

                setTimeout(() => {
                    form.style.display = 'none';
                    successContent.style.display = 'block';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 1500);
            });
        }
    }
}
