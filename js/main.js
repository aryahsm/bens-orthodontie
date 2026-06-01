document.addEventListener('DOMContentLoaded', () => {

  // ─── NAVBAR SCROLL ────────────────────────
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ─── MOBILE MENU ──────────────────────────
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('mobile-open');
      document.body.style.overflow = navMenu.classList.contains('mobile-open') ? 'hidden' : '';
    });

    navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── LANGUAGE SWITCHER ────────────────────
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('bens-lang') || 'en';

  function setLanguage(lang) {
    document.body.classList.toggle('lang-nl', lang === 'nl');
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('bens-lang', lang);
  }

  setLanguage(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // ─── SCROLL REVEAL ANIMATIONS ─────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ─── HERO LOAD ANIMATION ──────────────────
  const hero = document.querySelector('.hero');
  if (hero) {
    setTimeout(() => hero.classList.add('loaded'), 100);
  }

  // ─── FAQ ACCORDION ────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasActive = item.classList.contains('active');
      item.closest('.faq-list').querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });

  // ─── TESTIMONIAL SLIDER ──────────────────
  const sliderTrack = document.querySelector('.testimonial-track');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentSlide = 0;
  let slideCount = dots.length;
  let autoSlide;

  function goToSlide(index) {
    currentSlide = index;
    if (sliderTrack) {
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoSlide();
    });
  });

  function resetAutoSlide() {
    clearInterval(autoSlide);
    if (slideCount > 1) {
      autoSlide = setInterval(() => goToSlide((currentSlide + 1) % slideCount), 6000);
    }
  }

  if (slideCount > 0) resetAutoSlide();

  // ─── GALLERY LIGHTBOX ─────────────────────
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const galleryItems = document.querySelectorAll('.gallery-item');
  let galleryIndex = 0;
  const galleryImages = [];

  galleryItems.forEach((item, i) => {
    const img = item.querySelector('img');
    if (img) {
      galleryImages.push(img.src);
      item.addEventListener('click', () => {
        galleryIndex = i;
        openLightbox(galleryImages[i]);
      });
    }
  });

  function openLightbox(src) {
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.querySelector('.lightbox-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(galleryImages[galleryIndex]);
  });

  document.querySelector('.lightbox-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    openLightbox(galleryImages[galleryIndex]);
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.querySelector('.lightbox-prev')?.click();
    if (e.key === 'ArrowRight') document.querySelector('.lightbox-next')?.click();
  });

  // ─── STAT COUNTER ANIMATION ───────────────
  const statNumbers = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── ACTIVE NAV LINK ─────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── CONTACT FORM ────────────────────────
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Sent!';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          contactForm.reset();
        }, 2000);
      }, 1500);
    });
  }

  // ─── GALLERY FILTER (if present) ──────────
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

});
