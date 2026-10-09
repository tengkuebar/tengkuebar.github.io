// Adds .scrolled to the header once the page has moved, so the blur only shows when
// there is content underneath it. Without JavaScript the header simply stays flat.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let queued = false;
  const update = () => {
    queued = false;
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
})();
