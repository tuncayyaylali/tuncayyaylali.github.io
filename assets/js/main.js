/**
 * Tuncay Yaylalı - Personal Portfolio Main Script
 * Handles:
 * - Theme Switcher (Dark / Light Mode)
 * - Language Switcher (EN / TR)
 * - Experience Timeline Tabs
 * - Projects Category Filter
 * - Copy to Clipboard Toast
 * - Mobile Navigation Menu
 * - Active Nav Link Spy
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Theme Management (Dark by default)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
  
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  initTheme();
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

  // 3. Language Switcher (EN / TR)
  const langToggleBtn = document.getElementById('lang-toggle');
  const langToggleMobileBtn = document.getElementById('lang-toggle-mobile');
  let currentLang = localStorage.getItem('site_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    
    // Update all elements with data-en and data-tr
    document.querySelectorAll('[data-en][data-tr]').forEach(el => {
      el.innerHTML = el.getAttribute(`data-${lang}`);
    });

    // Update buttons indicator
    const langLabels = document.querySelectorAll('.lang-indicator');
    langLabels.forEach(label => {
      label.textContent = lang === 'en' ? 'TR' : 'EN';
    });
  }

  function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    applyLanguage(newLang);
  }

  applyLanguage(currentLang);
  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
  if (langToggleMobileBtn) langToggleMobileBtn.addEventListener('click', toggleLanguage);

  // 4. Experience Timeline Tabs
  const expTabButtons = document.querySelectorAll('.exp-tab-btn');
  const itExpContainer = document.getElementById('it-experience');
  const envExpContainer = document.getElementById('env-experience');

  expTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      
      expTabButtons.forEach(b => {
        b.classList.remove('active', 'bg-amber-600', 'text-white', 'shadow-md');
        b.classList.add('text-stone-400', 'hover:text-white');
      });

      btn.classList.add('active', 'bg-amber-600', 'text-white', 'shadow-md');
      btn.classList.remove('text-stone-400', 'hover:text-white');

      if (target === 'it') {
        itExpContainer.classList.remove('hidden');
        envExpContainer.classList.add('hidden');
      } else {
        itExpContainer.classList.add('hidden');
        envExpContainer.classList.remove('hidden');
      }
    });
  });

  // 5. Project Filtering
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      projectFilterBtns.forEach(b => {
        b.classList.remove('bg-amber-600', 'text-white', 'active');
        b.classList.add('bg-stone-800/80', 'text-stone-300', 'hover:bg-stone-700');
      });

      btn.classList.remove('bg-stone-800/80', 'text-stone-300', 'hover:bg-stone-700');
      btn.classList.add('bg-amber-600', 'text-white', 'active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // 6. Copy Email to Clipboard
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('copy-toast');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = 'tuncayyaylali@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        if (toast) {
          toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
          toast.classList.add('opacity-100', 'translate-y-0');
          setTimeout(() => {
            toast.classList.remove('opacity-100', 'translate-y-0');
            toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
          }, 2500);
        }
      });
    });
  });

  // 7. Mobile Navigation Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 8. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-amber-400', 'font-semibold');
      link.classList.add('text-stone-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.remove('text-stone-300');
        link.classList.add('text-amber-400', 'font-semibold');
      }
    });
  });
});

