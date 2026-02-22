import router from './router.js';
import { translations } from './i18n.js';

class App {
    constructor() {
        this.currentLang = 'en'; // default
        this.appEl = document.getElementById('app');
        this.langToggleBtn = document.getElementById('langToggle');

        this.init();
    }

    init() {
        // Init router
        router.init(this.appEl);

        // Listen for route changes to re-apply translations to new content
        window.addEventListener('routeChanged', () => {
            this.applyTranslations();
            this.updateActiveNav();
            window.scrollTo(0, 0); // Reset scroll on navigation
        });

        // Setup translation toggle
        this.langToggleBtn.addEventListener('click', () => {
            this.toggleLanguage();
        });

        // Set initial language class and translate index.html static parts
        this.updateLangBodyClass();
        this.updateLangBtnState();
        this.applyTranslations();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'kr' : 'en';
        this.updateLangBodyClass();
        this.updateLangBtnState();
        this.applyTranslations();
    }

    updateLangBodyClass() {
        document.body.classList.remove('lang-en', 'lang-kr');
        document.body.classList.add(`lang-${this.currentLang}`);
    }

    updateLangBtnState() {
        const spanEn = this.langToggleBtn.querySelector('.lang-en');
        const spanKr = this.langToggleBtn.querySelector('.lang-kr');
        if (this.currentLang === 'en') {
            spanEn.classList.add('active');
            spanKr.classList.remove('active');
        } else {
            spanKr.classList.add('active');
            spanEn.classList.remove('active');
        }
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.placeholder = translation;
                    } else if (el.type === 'submit') {
                        el.value = translation;
                    }
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // Broadcast event if view needs custom i18n logic (e.g. data bindings)
        const event = new CustomEvent('languageChanged', { detail: { lang: this.currentLang } });
        window.dispatchEvent(event);
    }

    getTranslation(key) {
        if (translations[this.currentLang] && translations[this.currentLang][key]) {
            return translations[this.currentLang][key];
        }
        return translations['en'][key] || key;
    }

    updateActiveNav() {
        const links = document.querySelectorAll('.nav-links a');
        const currentPath = window.location.hash || '#/';

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else if (currentPath.startsWith('#/services') && link.closest('.dropdown-trigger') && link.getAttribute('href').startsWith('#/services')) {
                link.closest('.dropdown').querySelector('.dropdown-trigger').classList.add('active');
            }
        });
    }
}

// Ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.appState = new App();
});
