// Short muted gameplay clips. They never start by themselves: a visitor presses play (the button
// or the video). A playing clip pauses when it scrolls out of view. Without JavaScript the poster
// image shows and the video stays stopped.
(() => {
  // One fixed "spotlight" frame that sits over the playing clip. Its huge box-shadow darkens
  // everything around the clip, so no other element needs a z-index change.
  const spot = document.createElement('div');
  spot.className = 'clip-spot';
  spot.setAttribute('aria-hidden', 'true');
  document.body.append(spot);
  let lit = null;
  let queued = false;
  let sized = '';

  const place = () => {
    queued = false;
    if (!lit) return;
    const r = lit.getBoundingClientRect();
    // Resizing repaints the big shadow, so only do it when the clip's size actually changes
    const size = r.width + 'x' + r.height;
    if (size !== sized) {
      sized = size;
      spot.style.width = r.width + 'px';
      spot.style.height = r.height + 'px';
    }
    spot.style.transform = `translate(${r.left}px, ${r.top}px)`;
  };
  const queuePlace = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(place);
  };
  addEventListener('scroll', queuePlace, { passive: true });
  addEventListener('resize', queuePlace);

  const light = (frame) => { lit = frame; place(); spot.classList.add('on'); };
  const dim = (frame) => { if (lit === frame) { lit = null; spot.classList.remove('on'); } };

  document.querySelectorAll('.clip').forEach((video) => {
    const button = video.parentElement.querySelector('.clip-toggle');

    const sync = () => {
      const playing = !video.paused;
      button.setAttribute('aria-label', playing ? 'Pause clip' : 'Play clip');
      button.dataset.state = playing ? 'playing' : 'paused';
    };
    const play = () => { video.play().then(sync, sync); };

    button.addEventListener('click', () => {
      if (video.paused) play();
      else { video.pause(); sync(); }
    });
    video.addEventListener('click', () => button.click());
    const frame = video.parentElement;
    video.addEventListener('pause', () => { sync(); dim(frame); });
    video.addEventListener('ended', () => dim(frame));
    video.addEventListener('play', () => { sync(); light(frame); });

    // The clip never starts by itself. Once someone presses play it keeps going, and it pauses
    // when scrolled out of view. Coming back, they press play again.
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) video.pause();
      });
    }, { threshold: 0.4 }).observe(video);

    sync();
  });
})();
