// Fade-and-rise reveal for content that starts below the fold.
// Runs once per element. Without JavaScript, or if IntersectionObserver is missing,
// nothing is hidden. Elements already on screen at load are left alone.
(() => {
  if (!('IntersectionObserver' in window)) return;

  const sel = 'main h2, main .card, main .game, main .timeline > li, main .entry, main .strip, main .contact-strip, main .feature-row, main .reveal, main .tiles > li, main .achievement, main .ticket, main .slot-panel';
  const fold = window.innerHeight;
  const els = [...document.querySelectorAll(sel)].filter((el) => el.getBoundingClientRect().top > fold);
  if (!els.length) return;

  els.forEach((el) => {
    // 50ms stagger between neighbours, capped at 100ms so long lists don't drag.
    // The achievements and game-cover lists are short, so they get 60ms steps up to item 4.
    const index = [...el.parentElement.children].indexOf(el);
    const list = el.classList.contains('achievement') || el.classList.contains('game');
    el.style.setProperty('--d', Math.min(index, list ? 3 : 2) * (list ? 60 : 50) + 'ms');
    el.classList.add('rv');
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -48px 0px' });

  document.documentElement.classList.add('rv-on');

  // An in-page link jumps straight to a section that may still be hidden. Show it at once
  // instead of landing on a blank gap while it fades in.
  let jumpTimer = 0;
  const skipFade = () => {
    document.documentElement.classList.add('rv-jump');
    clearTimeout(jumpTimer);
    jumpTimer = setTimeout(() => document.documentElement.classList.remove('rv-jump'), 700);
  };
  document.addEventListener('click', (e) => {
    if (e.target.closest('a[href^="#"]')) skipFade();
  });
  window.addEventListener('hashchange', skipFade);
  els.forEach((el) => io.observe(el));
})();
