/**
 * Template-based Include System - CORS sorununu çözer
 * Bu yaklaşım yerel dosya sisteminde çalışır
 */

// Header ve Footer template'lerini tanımlayın
const HeaderTemplate = `
<header class="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
            <div id="logo-frame" class="flex items-center transition hover:bg-[#f3f6fa] rounded px-2 -ml-2" style="cursor:pointer;">
                <div class="text-primary font-normal text-lg mr-2 logo">SBÜ-AI Hub</div>
                <span class="hidden md:block text-gray-600 text-sm">Sağlıkta Yapay Zekâ ve Dijital Sağlık Araştırma Grubu</span>
            </div>
            
            <div class="flex items-center space-x-4">
                <div class="relative hidden md:block">
                    <input type="text" id="searchInput" placeholder="Ara..." class="search-input bg-gray-50 border border-gray-200 rounded-button pl-10 pr-4 py-2 text-sm w-40 md:w-64 transition-all focus:border-primary">
                    <div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-400">
                        <i class="ri-search-line"></i>
                    </div>
                </div>
                
                <div class="relative lang-container">
                    <button class="flex items-center space-x-1 text-gray-700 hover:text-primary rounded-button">
                        <div class="w-5 h-5 flex items-center justify-center">
                            <i class="ri-global-line"></i>
                        </div>
                        <span class="text-sm flex items-center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png" alt="TR" class="inline w-5 h-5 mr-1" />TR</span>
                        <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                    </button>
                    <div class="lang-dropdown bg-white shadow-lg rounded-md py-1 min-w-[100px] hidden">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium flex items-center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png" alt="TR" class="inline w-5 h-5 mr-1" />TR</a>
                        <a href="en/index.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"><img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="EN" class="inline w-5 h-5 mr-1" />EN</a>
                    </div>
                </div>
                
                <button id="mobile-menu-toggle" class="md:hidden text-gray-500 hover:text-primary rounded-button">
                    <div class="w-6 h-6 flex items-center justify-center">
                        <i class="ri-menu-line text-xl"></i>
                    </div>
                </button>
            </div>
        </div>
        
        <!-- ESKİ SİTEDEKİ GİBİ: Navigation aynı container içinde, sadece mt-4 ile ayrılmış -->
        <nav class="hidden md:flex justify-center mt-4">
            <ul class="flex space-x-8">
                <li><a href="#hero" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">Ana Sayfa</a></li>
                <li><a href="#about" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">Hakkımızda</a></li>
                <li><a href="#research" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">Araştırma Alanları</a></li>
                <li><a href="#projects" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">Projeler</a></li>
                <li><a href="#publications" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">Yayınlar</a></li>
                <li><a href="#team" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">Ekibimiz</a></li>
                <li><a href="#events" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">Etkinlikler</a></li>
                <li><a href="#contact" class="nav-link text-gray-700 font-medium text-sm hover:text-primary pb-2 border-b-2 border-transparent hover:border-primary">İletişim</a></li>
            </ul>
        </nav>
    </div>
    <!-- Mobil Menü -->
    <div id="mobile-menu-backdrop" class="fixed inset-0 bg-black/40 z-50 hidden"></div>
    <aside id="mobile-menu" class="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-lg z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col p-4 md:hidden">
        <div class="flex flex-col mb-4">
            <div class="flex items-center justify-between mb-2">
                <span class="text-primary font-bold text-lg border-b-2 border-primary pb-1">Menü</span>
                <button id="mobile-menu-close" class="text-gray-500 hover:text-primary text-2xl">
                    <i class="ri-close-line"></i>
                </button>
            </div>
        </div>
        <nav>
            <ul class="flex flex-col gap-0">
                <li><a href="#hero" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-home-4-line mr-2 text-xl"></i> Ana Sayfa</a></li>
                <li><div class="h-px bg-gray-200 mx-2"></div></li>
                <li><a href="#about" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-information-line mr-2 text-xl"></i> Hakkımızda</a></li>
                <li><div class="h-px bg-gray-200 mx-2"></div></li>
                <li><a href="#research" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-flask-line mr-2 text-xl"></i> Araştırma Alanları</a></li>
                <li><div class="h-px bg-gray-200 mx-2"></div></li>
                <li><a href="#projects" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-rocket-2-line mr-2 text-xl"></i> Projeler</a></li>
                <li><div class="h-px bg-gray-200 mx-2"></div></li>
                <li><a href="#publications" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-book-open-line mr-2 text-xl"></i> Yayınlar</a></li>
                <li><div class="h-px bg-gray-200 mx-2"></div></li>
                <li><a href="#team" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-team-line mr-2 text-xl"></i> Ekibimiz</a></li>
                <li><div class="h-px bg-gray-200 mx-2"></div></li>
                <li><a href="#events" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-calendar-event-line mr-2 text-xl"></i> Etkinlikler</a></li>
                <li><div class="h-px bg-gray-200 mx-2"></div></li>
                <li><a href="#contact" class="nav-link flex items-center text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded px-2 py-1.5 transition"><i class="ri-mail-line mr-2 text-xl"></i> İletişim</a></li>
            </ul>
        </nav>
    </aside>
    <script>
    // Mobil menü açma/kapama
    document.addEventListener('DOMContentLoaded', function() {
        var menuBtn = document.getElementById('mobile-menu-toggle');
        var menu = document.getElementById('mobile-menu');
        var closeBtn = document.getElementById('mobile-menu-close');
        var backdrop = document.getElementById('mobile-menu-backdrop');
        if (menuBtn && menu && closeBtn && backdrop) {
            menuBtn.addEventListener('click', function() {
                menu.classList.remove('translate-x-full');
                menu.classList.add('translate-x-0');
                backdrop.classList.remove('hidden');
            });
            closeBtn.addEventListener('click', function() {
                menu.classList.add('translate-x-full');
                menu.classList.remove('translate-x-0');
                backdrop.classList.add('hidden');
            });
            backdrop.addEventListener('click', function() {
                menu.classList.add('translate-x-full');
                menu.classList.remove('translate-x-0');
                backdrop.classList.add('hidden');
            });
        }
    });
    </script>
</header>`;

const FooterTemplate = `
<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div class="logo text-white font-pacifico text-2xl mb-4">SBÜ-AI Hub</div>
                <p class="text-gray-400 mb-6">Sağlıkta Yapay Zekâ ve Dijital Sağlık Araştırma Grubu</p>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="ri-twitter-x-fill text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="ri-youtube-fill text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i class="ri-instagram-fill text-xl"></i>
                    </a>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Hızlı Erişim</h3>
                <ul class="footer-links space-y-2">
                    <li><a href="/" class="text-gray-400 hover:text-white">Ana Sayfa</a></li>
                    <li><a href="/hakkimizda/" class="text-gray-400 hover:text-white">Hakkımızda</a></li>
                    <li><a href="/arastirma/" class="text-gray-400 hover:text-white">Araştırma Alanları</a></li>
                    <li><a href="/projeler/" class="text-gray-400 hover:text-white">Projeler</a></li>
                    <li><a href="/yayinlar/" class="text-gray-400 hover:text-white">Yayınlar</a></li>
                    <li><a href="/etkinlikler/" class="text-gray-400 hover:text-white">Etkinlikler</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Kaynaklar</h3>
                <ul class="footer-links space-y-2">
                    <li><a href="#" class="text-gray-400 hover:text-white">Eğitim Materyalleri</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Veri Setleri</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Açık Kaynak Projeler</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Araştırma Makaleleri</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Sık Sorulan Sorular</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">İletişim</h3>
                <ul class="footer-links space-y-2">
                    <li class="flex items-start">
                        <i class="ri-map-pin-line mr-2 mt-1 text-gray-400"></i>
                        <span class="text-gray-400">Sağlık Bilimleri Üniversitesi, Üsküdar, İstanbul</span>
                    </li>
                    <li class="flex items-center">
                        <i class="ri-phone-line mr-2 text-gray-400"></i>
                        <span class="text-gray-400">+90 (216) ___ __ __</span>
                    </li>
                    <li class="flex items-center">
                        <i class="ri-mail-line mr-2 text-gray-400"></i>
                        <span class="text-gray-400">ai-hub@sbu.edu.tr</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm mb-4 md:mb-0">SBÜ-AI Hub Sağlıkta Yapay Zekâ ve Dijital Sağlık Araştırma Grubu</p>
            <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-white text-sm">Gizlilik Politikası</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm">Kullanım Şartları</a>
                <a href="#" class="text-gray-400 hover:text-white text-sm">Çerez Politikası</a>
            </div>
        </div>
    </div>
</footer>`;

// Include sistemi sınıfı - Template tabanlı yaklaşım
class TemplateIncludeSystem {
    constructor() {
        this.init();
    }

    init() {
        // DOM yüklendiğinde template'leri yerleştir
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadTemplates());
        } else {
            this.loadTemplates();
        }
    }

    loadTemplates() {
        try {
            console.log('Template yükleme başladı...');
            
            // Header'ı yerleştir
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = HeaderTemplate;
                headerPlaceholder.classList.remove('loading-placeholder');
                console.log('✅ Header template başarıyla yüklendi');
            } else {
                console.error('❌ header-placeholder elementi bulunamadı');
            }

            // Footer'ı yerleştir
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = FooterTemplate;
                footerPlaceholder.classList.remove('loading-placeholder');
                console.log('✅ Footer template başarıyla yüklendi');
            } else {
                console.error('❌ footer-placeholder elementi bulunamadı');
            }

            // Template'ler yüklendikten sonra sayfa özel fonksiyonları çalıştır
            this.initializePageFeatures();

            // Custom event dispatch et
            const event = new CustomEvent('includesLoaded', {
                detail: { method: 'template', timestamp: Date.now() }
            });
            document.dispatchEvent(event);

            console.log('🎉 Tüm template\'ler başarıyla yüklendi ve özellikler aktifleştirildi');

        } catch (error) {
            console.error('💥 Template yükleme hatası:', error);
            this.showFallbackContent();
        }
    }

    initializePageFeatures() {
        // Navigation aktif link ayarı
        this.setActiveNavigation();
        
        // Arama fonksiyonu
        this.initializeSearch();
        
        // Dil seçici
        this.initializeLanguageSelector();
        
        console.log('📱 Sayfa özellikleri aktifleştirildi');
    }

    setActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            link.classList.remove('text-primary', 'border-primary');
            link.classList.add('text-gray-700', 'border-transparent');
            
            // Aktif link kontrolü
            if (currentPath === linkPath || 
                (currentPath !== '/' && linkPath !== '/' && currentPath.startsWith(linkPath))) {
                link.classList.remove('text-gray-700', 'border-transparent');
                link.classList.add('text-primary', 'border-primary');
            }
        });

        // Ana sayfa özel durumu
        if (currentPath === '/' || currentPath === '/index.html' || currentPath === '' || currentPath.endsWith('index.html')) {
            const homeLink = document.querySelector('a[href="/"]');
            if (homeLink) {
                homeLink.classList.remove('text-gray-700', 'border-transparent');
                homeLink.classList.add('text-primary', 'border-primary');
            }
        }
    }

    initializeSearch() {
        const searchInput = document.getElementById('searchInput');
        // Aranacak başlık ve kart selectorleri
        const selectors = [
            'h1', 'h2', 'h3', '.card-title', '.stat-label', '.stat-number', '.card-description', '.text-lg.font-semibold', '.text-xl.font-semibold', '.text-3xl.font-bold', '.text-gray-900', '.text-gray-600', '.text-gray-700'
        ];
        const highlightClass = 'search-highlight';
        // Highlight için CSS ekle
        if (!document.getElementById('search-highlight-style')) {
            const style = document.createElement('style');
            style.id = 'search-highlight-style';
            style.innerHTML = `.${highlightClass} { background: yellow; color: #222 !important; border-radius: 4px; transition: background 0.2s; }`;
            document.head.appendChild(style);
        }
        function clearHighlights() {
            document.querySelectorAll('.' + highlightClass).forEach(el => {
                el.classList.remove(highlightClass);
            });
        }
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim().toLowerCase();
                clearHighlights();
                if (query.length > 2) {
                    let found = false;
                    selectors.forEach(sel => {
                        document.querySelectorAll(sel).forEach(el => {
                            if (el.textContent.toLowerCase().includes(query)) {
                                el.classList.add(highlightClass);
                                if (!found) {
                                    el.scrollIntoView({behavior: 'smooth', block: 'center'});
                                    found = true;
                                }
                            }
                        });
                    });
                }
            });
            // Temizlendiğinde highlightları kaldır
            searchInput.addEventListener('blur', clearHighlights);
            searchInput.addEventListener('change', clearHighlights);
            console.log('🔍 Arama fonksiyonu aktifleştirildi');
        }
    }

    initializeLanguageSelector() {
        const langContainer = document.querySelector('.lang-container');
        const langDropdown = document.querySelector('.lang-dropdown');
        
        if (langContainer && langDropdown) {
            langContainer.addEventListener('mouseenter', () => {
                langDropdown.classList.remove('hidden');
            });
            
            langContainer.addEventListener('mouseleave', () => {
                langDropdown.classList.add('hidden');
            });
            console.log('🌐 Dil seçici aktifleştirildi');
        }
    }

    showFallbackContent() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');
        
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = '<div class="error-placeholder">Header yüklenemedi - Sayfayı yenileyin</div>';
            headerPlaceholder.classList.remove('loading-placeholder');
        }
        
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = '<div class="error-placeholder">Footer yüklenemedi - Sayfayı yenileyin</div>';
            footerPlaceholder.classList.remove('loading-placeholder');
        }
    }
}

// Sistemi başlat
const includeSystem = new TemplateIncludeSystem();

// Global erişim için (debugging)
window.includeSystem = includeSystem;

console.log('🚀 Template Include System başlatıldı');

// Mobil menü açma/kapama - dinamik header için
function bindMobileMenuEvents() {
    var menuBtn = document.getElementById('mobile-menu-toggle');
    var menu = document.getElementById('mobile-menu');
    var closeBtn = document.getElementById('mobile-menu-close');
    var backdrop = document.getElementById('mobile-menu-backdrop');
    if (menuBtn && menu && closeBtn && backdrop) {
        menuBtn.addEventListener('click', function() {
            menu.classList.remove('translate-x-full');
            menu.classList.add('translate-x-0');
            backdrop.classList.remove('hidden');
        });
        closeBtn.addEventListener('click', function() {
            menu.classList.add('translate-x-full');
            menu.classList.remove('translate-x-0');
            backdrop.classList.add('hidden');
        });
        backdrop.addEventListener('click', function() {
            menu.classList.add('translate-x-full');
            menu.classList.remove('translate-x-0');
            backdrop.classList.add('hidden');
        });
        // Menüdeki linklere tıklanınca da menü kapansın
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                menu.classList.add('translate-x-full');
                menu.classList.remove('translate-x-0');
                backdrop.classList.add('hidden');
            });
        });
    }
}

document.addEventListener('includesLoaded', bindMobileMenuEvents);

// Navigation cross-page anchor support
function enableCrossPageNavigation() {
  document.addEventListener('includesLoaded', function() {
    // Sadece etkinlik-detay.html gibi harici sayfalarda çalışsın
    var isMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
    if (isMainPage) return;
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === '#hero') {
        link.setAttribute('href', 'index.html');
        link.addEventListener('click', function(e) {
          // index.html'e git
        });
      } else if (href && href.startsWith('#')) {
        link.setAttribute('href', 'index.html' + href);
        link.addEventListener('click', function(e) {
          // index.html#section'a git
        });
      }
    });
  });
}
enableCrossPageNavigation();

// SBÜ-AI Hub logosu (yazısı) tıklanınca en üste kaydır (logo-frame ile)
function bindLogoScrollTop() {
    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    let tryCount = 0;
    function tryBind() {
        var logoFrame = document.getElementById('logo-frame');
        if (logoFrame) {
            logoFrame.style.cursor = 'pointer';
            logoFrame.addEventListener('click', scrollToTop);
        } else if (tryCount < 10) {
            tryCount++;
            setTimeout(tryBind, 100);
        }
    }
    tryBind();
    // Statik header (varsa)
    var staticLogoFrame = document.querySelector('body > header #logo-frame');
    if (staticLogoFrame) {
        staticLogoFrame.style.cursor = 'pointer';
        staticLogoFrame.addEventListener('click', scrollToTop);
    }
}
document.addEventListener('includesLoaded', bindLogoScrollTop);