import HomeView from './views/Home.js';
import ServiceView from './views/Service.js';
import ProcessView from './views/Process.js';
import TeamView from './views/Team.js';
import ContactView from './views/Contact.js';
import CaseStudiesView from './views/CaseStudies.js';
import InsightsView from './views/Insights.js';
import DesktopAppraisalView from './views/DesktopAppraisal.js';
import PrivacyView from './views/Privacy.js';
import TermsView from './views/Terms.js';
import AccessibilityView from './views/Accessibility.js';

const routes = {
    '/': HomeView,
    '/services/cross-border': () => ServiceView('cross-border'),
    '/services/financial-reporting': () => ServiceView('financial-reporting'),
    '/services/dispute-support': () => ServiceView('dispute-support'),
    '/desktop-appraisal': DesktopAppraisalView,
    '/process': ProcessView,
    '/case-studies': CaseStudiesView,
    '/insights': InsightsView,
    '/team': TeamView,
    '/contact': ContactView,
    '/privacy': PrivacyView,
    '/terms': TermsView,
    '/accessibility': AccessibilityView
};

class Router {
    constructor() {
        this.appEl = null;
    }

    init(appEl) {
        this.appEl = appEl;

        window.addEventListener('hashchange', () => {
            this.router();
        });

        document.body.addEventListener('click', event => {
            const target = event.target.matches('[data-link]') ? event.target : event.target.closest('[data-link]');
            if (!target) {
                return;
            }

            event.preventDefault();
            const url = target.getAttribute('href');
            window.location.hash = url.replace(/^#/, '');
        });

        this.router();
    }

    async router() {
        let path = window.location.hash.slice(1) || '/';
        let View = routes[path];

        if (!View) {
            console.warn(`Route ${path} not found, defaulting to home`);
            path = '/';
            View = routes[path];
            window.history.replaceState(null, '', '#/');
        }

        const viewInstance = typeof View.prototype?.render === 'function' ? new View() : View();
        const html = await viewInstance.render();

        this.appEl.innerHTML = html;

        if (typeof viewInstance.attachEvents === 'function') {
            viewInstance.attachEvents();
        }

        window.dispatchEvent(new Event('routeChanged'));
    }
}

export default new Router();
