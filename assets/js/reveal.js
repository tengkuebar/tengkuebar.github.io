// Fade-and-rise reveal for content that starts below the fold.
// Runs once per element. Without JavaScript, or if IntersectionObserver is missing,
// nothing is hidden. Elements already on screen at load are left alone.
(() => {
  if (!('IntersectionObserver' in window)) return;

  const sel = 'main h2, main .card, main .game, main .timeline > li, main .entry, main .strip, main .contact-strip, main .reveal';
  const fold = window.innerHeight;
  const els = [...document.querySelectorAll(sel)].filter((el) => el.getBoundingClientRect().top > fold);
  if (!els.length) return;

  els.forEach((el) => {
    // 50ms stagger between neighbours, capped so long lists don't drag
    const index = [...el.parentElement.children].indexOf(el);
    el.style.setProperty('--d', Math.min(index, 4) * 50 + 'ms');
    el.classList.add('rv');
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  document.documentElement.classList.add('rv-on');
  els.forEach((el) => io.observe(el));
})();
