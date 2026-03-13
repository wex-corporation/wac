import router from './router.js';
import { translations } from './i18n.js';

class App {
    constructor() {
        this.currentLang = localStorage.getItem('wac-lang') || 'en';
        this.appEl = document.getElementById('app');
        this.langToggleBtn = document.getElementById('langToggle');
        this.mobileMenuBtn = document.getElementById('mobileMenuToggle');
        this.siteHeader = document.querySelector('.site-header');

        this.init();
    }

    init() {
        // Init router
        router.init(this.appEl);

        this.setupNavigation();
        this.updateHeaderOffset();

        // Listen for route changes to re-apply translations to new content
        window.addEventListener('routeChanged', () => {
            this.closeMobileMenu();
            this.closeMobileDropdown();
            this.updateHeaderOffset();
            this.applyTranslations();
            this.updateActiveNav();
            window.scrollTo(0, 0); // Reset scroll on navigation
        });

        // Setup translation toggle
        this.langToggleBtn.addEventListener('click', () => {
            this.toggleLanguage();
        });

        window.addEventListener('resize', () => {
            this.updateHeaderOffset();
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
                this.closeMobileDropdown();
            }
        });

        // Set initial language class and translate index.html static parts
        this.updateLangBodyClass();
        this.updateLangBtnState();
        this.applyTranslations();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'kr' : 'en';
        localStorage.setItem('wac-lang', this.currentLang);
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
            if (translation !== null) {
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
        return translations.en[key] ?? null;
    }

    setupNavigation() {
        const dropdown = document.querySelector('.dropdown');
        const trigger = document.querySelector('.dropdown-trigger');

        if (!dropdown || !trigger) {
            return;
        }

        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', event => {
                event.preventDefault();

                if (window.innerWidth > 768) {
                    return;
                }

                const isOpen = this.siteHeader?.classList.toggle('menu-open');
                document.body.classList.toggle('mobile-menu-open', Boolean(isOpen));
                this.mobileMenuBtn.setAttribute('aria-expanded', String(Boolean(isOpen)));
                this.updateHeaderOffset();
            });
        }

        trigger.addEventListener('click', event => {
            if (window.innerWidth > 768) {
                return;
            }

            event.preventDefault();
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', event => {
            if (window.innerWidth <= 768 && this.siteHeader?.contains(event.target) === false) {
                this.closeMobileMenu();
            }

            if (window.innerWidth > 768 || dropdown.contains(event.target)) {
                return;
            }

            dropdown.classList.remove('open');
        });
    }

    closeMobileDropdown() {
        document.querySelector('.dropdown')?.classList.remove('open');
    }

    closeMobileMenu() {
        if (!this.siteHeader || !this.mobileMenuBtn) {
            return;
        }

        this.siteHeader.classList.remove('menu-open');
        document.body.classList.remove('mobile-menu-open');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    updateHeaderOffset() {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        document.documentElement.style.setProperty('--header-offset', `${headerHeight}px`);
    }

    updateActiveNav() {
        const links = document.querySelectorAll('.nav-links a');
        const currentPath = window.location.pathname || '/';
        const serviceTrigger = document.querySelector('.dropdown-trigger');

        if (serviceTrigger) {
            serviceTrigger.classList.remove('active');
        }

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });

        if (currentPath.startsWith('/services') && serviceTrigger) {
            serviceTrigger.classList.add('active');
        }
    }
}

// Ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.appState = new App();
});
