/* ============================================================
   MANILA BISTRO — Main JavaScript
   ============================================================ */

'use strict';

/* ── Sticky Header ─────────────────────────────────────────── */
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile Nav ────────────────────────────────────────────── */
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-nav-close');
  if (!hamburger || !mobileNav) return;

  function openNav() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeNav() : openNav();
  });
  if (mobileClose) mobileClose.addEventListener('click', closeNav);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
  });
})();

/* ── Smooth Scroll ─────────────────────────────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerOffset = document.getElementById('site-header')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── Scroll Reveal ─────────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
})();

/* ── Menu Filter ───────────────────────────────────────────── */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      menuCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

/* ── Star Rating ───────────────────────────────────────────── */
function initStarRating(container) {
  const stars = container.querySelectorAll('.star-btn');
  stars.forEach((star, idx) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        s.textContent = i <= idx ? '★' : '☆';
        s.classList.toggle('active', i <= idx);
      });
      container.dataset.value = idx + 1;
    });
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => {
        s.textContent = i <= idx ? '★' : '☆';
      });
    });
    star.addEventListener('mouseout', () => {
      const val = parseInt(container.dataset.value || '0');
      stars.forEach((s, i) => {
        s.textContent = i < val ? '★' : '☆';
      });
    });
  });
}

/* ── Radio Buttons ─────────────────────────────────────────── */
function initRadioGroup(container) {
  const btns = container.querySelectorAll('.radio-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* ── Modal Utilities ───────────────────────────────────────── */
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const firstFocusable = overlay.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) setTimeout(() => firstFocusable.focus(), 100);
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function (e) {
    if (e.target === this) closeModal(this.id);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(o => closeModal(o.id));
  }
});

// Close buttons
document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
});

/* ── Open Modal Triggers ───────────────────────────────────── */
document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.openModal));
});

/* ── Survey Modal ──────────────────────────────────────────── */
(function () {
  const surveyModal = document.getElementById('survey-modal');
  if (!surveyModal) return;

  // Init star ratings
  surveyModal.querySelectorAll('.star-rating').forEach(initStarRating);

  // Init radio groups
  surveyModal.querySelectorAll('.radio-group').forEach(initRadioGroup);

  // Submit
  const form = document.getElementById('survey-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const body = form.closest('.modal-body') || form.parentElement;
    const success = document.getElementById('survey-success');
    if (success) {
      form.style.display = 'none';
      success.classList.add('show');
    }
  });
})();

/* ── Reservation Modal ─────────────────────────────────────── */
(function () {
  const form = document.getElementById('reservation-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const success = document.getElementById('reservation-success');
    if (success) {
      form.style.display = 'none';
      success.classList.add('show');
    }
  });
})();

/* ── Event Inquiry Form ────────────────────────────────────── */
(function () {
  const form = document.getElementById('event-inquiry-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const success = document.getElementById('event-inquiry-success');
    const formWrap = document.getElementById('event-inquiry-form-wrap');
    if (success && formWrap) {
      formWrap.style.display = 'none';
      success.classList.add('show');
    }
  });
})();

/* ── Set min date for date inputs ──────────────────────────── */
(function () {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = today;
  });
})();

/* ── Opportunities CTA modals (placeholder alert) ──────────── */
(function () {
  document.querySelectorAll('[data-opp-cta]').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.oppCta;
      const messages = {
        careers: 'Thank you for your interest in joining the Manila Bistro team! Job opportunities will be posted here soon. Please check back or contact us directly.',
        vendor: 'Thank you for your interest in working with Manila Bistro! Please reach out to us via the Contact form and we'll be in touch.',
        partner: 'Thank you for your interest in partnering with Manila Bistro! Please contact us via the Contact section to discuss partnership opportunities.'
      };
      alert(messages[type] || 'Thank you for your interest! Please contact us for more information.');
    });
  });
})();

/* ── Image lazy load fallback placeholder ──────────────────── */
(function () {
  document.querySelectorAll('img[data-ph]').forEach(img => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      const ph = this.nextElementSibling;
      if (ph && ph.classList.contains('img-fallback')) ph.style.display = 'flex';
    });
  });
})();
