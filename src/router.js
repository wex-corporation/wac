// Basic router implementation
import HomeView from './views/Home.js';
import ServiceView from './views/Service.js';
import ProcessView from './views/Process.js';
import TeamView from './views/Team.js';
import ContactView from './views/Contact.js';
import CaseStudiesView from './views/CaseStudies.js';
import InsightsView from './views/Insights.js';
import DesktopAppraisalView from './views/DesktopAppraisal.js';
<<<<<<< HEAD
=======
import PrivacyView from './views/Privacy.js';
>>>>>>> c30f7c1 (Initial commit for W Appraisal Company website)

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
<<<<<<< HEAD
=======
    '/privacy': PrivacyView,
>>>>>>> c30f7c1 (Initial commit for W Appraisal Company website)
    // Add other routes as needed
};

class Router {
    constructor() {
        this.appEl = null;
    }

    init(appEl) {
        this.appEl = appEl;

        // Handle hashchange explicitly instead of pushing state manually in a SPA without server config
        window.addEventListener('hashchange', () => {
            this.router();
        });

        // Intercept link clicks if we need custom logic, but with hash routing standard a-tags work automatically
        // However, we still prevent default to handle our custom rendering flow if needed
        document.body.addEventListener('click', e => {
            const target = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
            if (target) {
                e.preventDefault();
                const url = target.getAttribute('href');
                window.location.hash = url.replace(/^#/, '');
            }
        });

        // Initial route
        this.router();
    }

    async router() {
        // Basic match for hash routing. Fallback to / if no hash
        let path = window.location.hash.slice(1) || '/';

        let viewClass = routes[path];

        if (!viewClass) {
            console.warn(`Route ${path} not found, defaulting to home`);
            path = '/';
            viewClass = routes['/'];
            window.history.replaceState(null, null, '#/');
        }

        // Handle functional wrappers for parametrized routes
        let viewInstance;
        if (typeof viewClass.prototype !== 'undefined' && viewClass.prototype.render) {
            viewInstance = new viewClass();
        } else {
            // It's a factory function
            viewInstance = viewClass();
        }

        const html = await viewInstance.render();
        this.appEl.innerHTML = html;

        // Re-attach view specific events if any
        if (typeof viewInstance.attachEvents === 'function') {
            viewInstance.attachEvents();
        }

        // Dispatch route changed event
        window.dispatchEvent(new Event('routeChanged'));
    }
}

export default new Router();
