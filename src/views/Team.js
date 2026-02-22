export default class TeamView {
    constructor() {
        this.title = "W Appraisal Company | Team";
    }

    async render() {
        document.title = this.title;
        return `
            <div class="view-team fade-in">
                <!-- Header -->
                <section class="page-header section text-center">
                    <div class="container">
                        <h1 class="mb-3" data-i18n="team_main_title">Our Leadership</h1>
                        <p class="text-secondary" style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
                            Independent judgment. Traceable assumptions. Clear conclusions.
                        </p>
                    </div>
                </section>

                <section class="section">
<<<<<<< HEAD
                    <div class="container">
                        <div class="grid-2">
                            <!-- Team Member 1 -->
                            <div class="card team-card">
                                <h3 class="mb-1">Principal Name</h3>
                                <p class="text-accent mb-4">Managing Director</p>
                                
                                <div class="mb-3">
                                    <strong class="text-primary">Professional Focus:</strong>
                                    <p class="text-secondary">Commercial real estate, Cross-border transactions</p>
                                </div>
                                <div class="mb-3">
                                    <strong class="text-primary">Expertise:</strong>
                                    <p class="text-secondary">Valuation, Financial reporting, Modeling, Review</p>
                                </div>
                                <div class="mb-3">
                                    <strong class="text-primary">Languages:</strong>
                                    <p class="text-secondary">Korean, English</p>
                                </div>
                            </div>
                            
                            <!-- Team Member 2 -->
                            <div class="card team-card">
                                <h3 class="mb-1">Partner Name</h3>
                                <p class="text-accent mb-4">Director, Valuation Advisory</p>
                                
                                <div class="mb-3">
                                    <strong class="text-primary">Professional Focus:</strong>
                                    <p class="text-secondary">Alternative assets, Institutional funds</p>
                                </div>
                                <div class="mb-3">
                                    <strong class="text-primary">Expertise:</strong>
                                    <p class="text-secondary">Financial reporting, Dispute support, Review</p>
                                </div>
                                <div class="mb-3">
                                    <strong class="text-primary">Languages:</strong>
                                    <p class="text-secondary">Korean, English</p>
                                </div>
=======
                    <div class="container" style="max-width: 800px;">
                        <!-- Principal Profile -->
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
>>>>>>> c30f7c1 (Initial commit for W Appraisal Company website)
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
