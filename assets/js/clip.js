// Short muted gameplay clips. They play only while on screen, never autoplay for visitors who
// prefer reduced motion, and always have a pause/play button. Without JavaScript the poster
// image shows and the video stays stopped.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  // One fixed "spotlight" frame that sits over the playing clip. Its huge box-shadow darkens
  // everything around the clip, so no other element needs a z-index change.
  const spot = document.createElement('div');
  spot.className = 'clip-spot';
  spot.setAttribute('aria-hidden', 'true');
  document.body.append(spot);
  let lit = null;
  let queued = false;

  const place = () => {
    queued = false;
    if (!lit) return;
    const r = lit.getBoundingClientRect();
    spot.style.width = r.width + 'px';
    spot.style.height = r.height + 'px';
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
    let userPaused = reduce.matches;

    const sync = () => {
      const playing = !video.paused;
      button.setAttribute('aria-label', playing ? 'Pause clip' : 'Play clip');
      button.dataset.state = playing ? 'playing' : 'paused';
    };
    const play = () => { video.play().then(sync, sync); };

    button.addEventListener('click', () => {
      if (video.paused) { userPaused = false; play(); }
      else { userPaused = true; video.pause(); sync(); }
    });
    video.addEventListener('click', () => button.click());
    const frame = video.parentElement;
    video.addEventListener('pause', () => { sync(); dim(frame); });
    video.addEventListener('ended', () => dim(frame));
    video.addEventListener('play', () => { sync(); light(frame); });

    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { if (!userPaused) play(); }
        else video.pause();
      });
    }, { threshold: 0.4 }).observe(video);

    sync();
  });
})();
