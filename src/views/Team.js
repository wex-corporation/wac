export default class TeamView {
    constructor() {
        this.title = 'W Appraisal Company | Team';
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-team fade-in">
                <section class="page-header section text-center">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="team_main_title">Our Leadership</h1>
                        <p class="text-secondary" style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
                            Independent judgment. Traceable assumptions. Clear conclusions.
                        </p>
                    </div>
                </section>

                <section class="section">
                    <div class="container" style="max-width: 800px;">
                        <div class="card team-card">
                            <h3 class="mb-1" data-i18n="team_name">LEE JI SOO</h3>
                            <p class="text-accent mb-4" data-i18n="team_title">Managing Director</p>

                            <div class="mb-3">
                                <strong class="text-primary" data-i18n="team_cred_label">Credentials:</strong>
                                <p class="text-secondary" data-i18n="team_cred_text">Korea Certified Appraiser (KCA), Member of RICS (MRICS)</p>
                            </div>
                            <div class="mb-3">
                                <strong class="text-primary" data-i18n="team_exp_label">Experience:</strong>
                                <p class="text-secondary" data-i18n="team_exp_text">$500B+ Valuation and Advisory Services</p>
                            </div>
                            <div class="mb-3">
                                <strong class="text-primary" data-i18n="team_clients_label">Key Clients:</strong>
                                <p class="text-secondary" data-i18n="team_clients_text">Global Institutional Investors, Sovereign Wealth Funds, High-Net-Worth Individuals, Commercial Banks, Conglomerates</p>
                            </div>
                            <div class="mb-3">
                                <strong class="text-primary" data-i18n="team_lang_label">Languages:</strong>
                                <p class="text-secondary" data-i18n="team_lang_text">Korean, English</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style>
                .page-header {
                    background: radial-gradient(circle at 90% 50%, rgba(34,211,238,0.03) 0%, transparent 60%);
                }
            </style>
        `;
    }
}
