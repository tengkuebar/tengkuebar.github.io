// Short muted gameplay clips. They play only while on screen, never autoplay for visitors who
// prefer reduced motion, and always have a pause/play button. Without JavaScript the poster
// image shows and the video stays stopped.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

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
    video.addEventListener('pause', sync);
    video.addEventListener('play', sync);

    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { if (!userPaused) play(); }
        else video.pause();
      });
    }, { threshold: 0.4 }).observe(video);

    sync();
  });
})();
