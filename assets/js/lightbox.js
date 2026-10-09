// Opens project screenshots in an overlay instead of leaving the page.
// Click the image (or the Zoom button) to zoom in on that spot; scroll to look around.
// Without JavaScript the thumbnails stay plain links to the full-size images.
(() => {
  const links = [...document.querySelectorAll('.shots a')];
  if (!links.length || !window.HTMLDialogElement) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Screenshot viewer');
  dialog.innerHTML = `
    <div class="lightbox-bar">
      <span class="lightbox-count" aria-live="polite"></span>
      <button type="button" data-act="zoom" aria-pressed="false">Zoom in</button>
      <button type="button" data-act="prev" aria-label="Previous screenshot">&lsaquo;</button>
      <button type="button" data-act="next" aria-label="Next screenshot">&rsaquo;</button>
      <button type="button" data-act="close" aria-label="Close">&times;</button>
    </div>
    <div class="lightbox-stage"><img alt=""></div>`;
  document.body.append(dialog);

  const img = dialog.querySelector('img');
  const stage = dialog.querySelector('.lightbox-stage');
  const count = dialog.querySelector('.lightbox-count');
  const zoomBtn = dialog.querySelector('[data-act="zoom"]');
  if (links.length < 2) dialog.querySelectorAll('[data-act="prev"], [data-act="next"]').forEach((b) => b.remove());
  let current = 0;

  // rx and ry are where to centre the zoom, as fractions of the image (0.5 is the middle)
  const setZoom = (on, rx = 0.5, ry = 0.5) => {
    dialog.classList.toggle('is-zoomed', on);
    zoomBtn.setAttribute('aria-pressed', String(on));
    zoomBtn.textContent = on ? 'Zoom out' : 'Zoom in';
    // Full size on wide screens, capped at 2.5x the viewer on phones so it stays usable
    img.style.width = on ? Math.min(img.naturalWidth, stage.clientWidth * 2.5) + 'px' : '';
    if (on) {
      stage.scrollLeft = rx * img.offsetWidth - stage.clientWidth / 2;
      stage.scrollTop = ry * img.offsetHeight - stage.clientHeight / 2;
    }
  };

  // fromKeyboard skips the blur: arrow keys repeat quickly and should feel instant
  const show = (n, fromKeyboard = false) => {
    current = (n + links.length) % links.length;
    const swap = () => {
      img.src = links[current].href;
      img.alt = links[current].querySelector('img').alt;
      count.textContent = `${current + 1} of ${links.length}`;
      setZoom(false);
    };
    // Blur the old shot for a moment while the next one loads, for button clicks only.
    // Skipped on first open, for keyboard, and for visitors who prefer reduced motion.
    if (!dialog.open || fromKeyboard || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      img.classList.remove('is-swapping');
      return swap();
    }
    img.classList.add('is-swapping');
    const done = () => img.classList.remove('is-swapping');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
    swap();
  };

  links.forEach((a, n) => a.addEventListener('click', (e) => {
    e.preventDefault();
    show(n);
    dialog.showModal();
  }));

  dialog.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    const zoomed = dialog.classList.contains('is-zoomed');
    if (act === 'close' || e.target === dialog || e.target === stage) dialog.close();
    else if (act === 'prev') show(current - 1);
    else if (act === 'next') show(current + 1);
    else if (act === 'zoom') setZoom(!zoomed);
    else if (e.target === img) setZoom(!zoomed, e.offsetX / img.offsetWidth, e.offsetY / img.offsetHeight);
  });

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && links.length > 1) show(current - 1, true);
    else if (e.key === 'ArrowRight' && links.length > 1) show(current + 1, true);
  });
})();
