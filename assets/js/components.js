/**
 * Web sitesi bileşenleri için JavaScript fonksiyonları
 * Bu dosya header, footer, navigation ve diğer bileşenlerin 
 * interaktif özelliklerini yönetir
 */

/**
 * Header bileşeni fonksiyonları
 */
class HeaderComponent {
    constructor() {
        this.searchInput = null;
        this.mobileMenuButton = null;
        this.navigation = null;
        this.init();
    }
    
    init() {
        // DOM yüklenir yüklenmez header özelliklerini başlat
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeSearch();
            this.initializeLanguageSelector();
        });
        
        // Include'lar yüklendikten sonra da tekrar dene
        document.addEventListener('includesLoaded', () => {
            this.initializeSearch();
            this.initializeLanguageSelector();
        });
    }
    
    /**
     * Arama fonksiyonunu başlatır
     */
    initializeSearch() {
        this.searchInput = document.getElementById('searchInput');
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
            console.log('Arama fonksiyonu aktifleştirildi');
        }
    }
    
    /**
     * Arama işlemini yönetir
     * @param {string} query - Arama sorgusu
     */
    handleSearch(query) {
        if (query.length < 2) return;
        
        console.log('Arama yapılıyor:', query);
        // Burada arama mantığınızı implemente edebilirsiniz
        // Örneğin: sayfa içeriğinde arama, AJAX ile sunucuya istek gönderme vs.
    }
    
    /**
     * Dil seçici özelliğini başlatır
     */
    initializeLanguageSelector() {
        const langSelector = document.querySelector('[class*="ri-global-line"]').closest('button');
        if (langSelector) {
            langSelector.addEventListener('click', () => {
                this.toggleLanguageMenu();
            });
        }
    }
    
    /**
     * Dil menüsünü açar/kapatır
     */
    toggleLanguageMenu() {
        console.log('Dil menüsü açılacak');
        // Dil menüsü mantığı burada implemente edilebilir
    }
}

/**
 * Navigation bileşeni fonksiyonları  
 */
class NavigationComponent {
    constructor() {
        this.currentPath = window.location.pathname;
        this.init();
    }
    
    init() {
        document.addEventListener('includesLoaded', () => {
            this.setActiveNavigation();
            this.initializeSmoothScroll();
        });
    }
    
    /**
     * Aktif sayfa linkini vurgular
     */
    setActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            link.classList.remove('active');
            
            // Mevcut sayfa ile link karşılaştırması
            if (this.currentPath === linkPath || 
                (this.currentPath.startsWith(linkPath) && linkPath !== '/')) {
                link.classList.add('active');
            }
        });
        
        // Ana sayfa özel durumu
        if (this.currentPath === '/' || this.currentPath === '/index.html') {
            const homeLink = document.querySelector('a[href="/"]');
            if (homeLink) homeLink.classList.add('active');
        }
        
        console.log('Navigation aktif link güncellendi');
    }
    
    /**
     * Smooth scroll özelliğini başlatır
     */
    initializeSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

/**
 * Footer bileşeni fonksiyonları
 */
class FooterComponent {
    constructor() {
        this.init();
    }
    
    init() {
        document.addEventListener('includesLoaded', () => {
            this.initializeFooterLinks();
            this.initializeSocialLinks();
        });
    }
    
    /**
     * Footer linklerini başlatır
     */
    initializeFooterLinks() {
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks.forEach(link => {
            // Footer linklerine özel davranışlar eklenebilir
            link.addEventListener('click', (e) => {
                console.log('Footer link tıklandı:', link.href);
            });
        });
    }
    
    /**
     * Sosyal medya linklerini başlatır
     */
    initializeSocialLinks() {
        const socialLinks = document.querySelectorAll('.footer a[href="#"]');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Sosyal medya linki tıklandı');
                // Gerçek sosyal medya linklerini burada yönlendirebilirsiniz
            });
        });
    }
}

/**
 * Genel utility fonksiyonları
 */
class ComponentUtils {
    /**
     * Element'in görünür olup olmadığını kontrol eder
     * @param {Element} element - Kontrol edilecek element
     * @returns {boolean}
     */
    static isElementVisible(element) {
        return element && element.offsetParent !== null;
    }
    
    /**
     * Scroll pozisyonuna göre header'ı günceller
     */
    static initializeScrollHeader() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Aşağı scroll - header'ı gizle
                header.style.transform = 'translateY(-100%)';
            } else {
                // Yukarı scroll - header'ı göster
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    /**
     * Loading animation'ını kaldırır
     * @param {string} elementId - Loading element'in ID'si
     */
    static removeLoadingAnimation(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.remove('loading-placeholder');
        }
    }
}

// Bileşenleri başlat
const headerComponent = new HeaderComponent();
const navigationComponent = new NavigationComponent();
const footerComponent = new FooterComponent();

// Global erişim için window objesine ekle
window.webComponents = {
    header: headerComponent,
    navigation: navigationComponent,
    footer: footerComponent,
    utils: ComponentUtils
};

// Sayfa yüklendiğinde scroll header'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    ComponentUtils.initializeScrollHeader();
});

console.log('Web bileşenleri başarıyla yüklendi');