// ==========================================
// MOROCCO TRAVEL APP - MAIN JS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- NAVBAR SCROLL ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // --- HAMBURGER MENU ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translateY(7px)' : '';
      spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translateY(-7px)' : '';
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
      });
    });
  }

  // --- HERO BG PARALLAX ---
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `scale(1) translateY(${scrolled * 0.3}px)`;
    });
  }

  // --- SCROLL ANIMATIONS ---
  const animEls = document.querySelectorAll('.animate-fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animEls.forEach(el => observer.observe(el));

  // --- ACTIVE NAV LINK ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // --- COUNTER ANIMATION ---
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        const suffix = entry.target.dataset.suffix || '';
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            entry.target.textContent = target + suffix;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current) + suffix;
          }
        }, 16);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  // --- SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- RIPPLE EFFECT ON BUTTONS ---
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.cssText = `
        position: absolute; border-radius: 50%;
        width: 100px; height: 100px;
        background: rgba(255,255,255,0.15);
        transform: translate(-50%,-50%) scale(0);
        animation: rippleAnim 0.6s ease-out;
        left: ${e.clientX - rect.left}px;
        top: ${e.clientY - rect.top}px;
        pointer-events: none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // --- ADD RIPPLE CSS ---
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleAnim {
      to { transform: translate(-50%,-50%) scale(4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});
