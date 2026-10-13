// Resume page: a sticky strip of section links that highlights where you are as you scroll,
// and collapses to a one-line summary. Without JavaScript it is a plain row of anchor links.
(() => {
  const nav = document.getElementById('section-nav');
  if (!nav) return;

  const scroller = nav.querySelector('.sn-tabs');
  const links = [...nav.querySelectorAll('.sn-list a')];
  const indicator = nav.querySelector('.sn-indicator');
  const position = nav.querySelector('.sn-position');
  const label = nav.querySelector('.sn-label');
  const toggle = nav.querySelector('.sn-toggle');
  const heads = links.map((a) => document.getElementById(a.getAttribute('href').slice(1)));
  if (!scroller || !toggle || heads.some((h) => !h)) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const KEY = 'resume-nav-open';
  let active = -1;
  let pinned = null;

  // Open on desktop, collapsed on phones, unless the visitor chose otherwise before.
  let open = window.matchMedia('(min-width: 40.01em)').matches;
  try {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) open = saved === '1';
  } catch (e) { /* storage blocked: use the default */ }

  const setOpen = (value, remember) => {
    open = value;
    nav.classList.toggle('is-collapsed', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Collapse section navigation' : 'Expand section navigation');
    if (remember) {
      try { localStorage.setItem(KEY, open ? '1' : '0'); } catch (e) { /* ignore */ }
    }
  };

  const place = (index) => {
    const a = links[index];
    // The pill sits 4px inside the tab on each side.
    indicator.style.setProperty('--x', a.offsetLeft + 4 + 'px');
    indicator.style.setProperty('--w', a.offsetWidth - 8 + 'px');
    const target = a.offsetLeft - (scroller.clientWidth - a.offsetWidth) / 2;
    const smooth = nav.classList.contains('sn-ready') && !reduced.matches;
    scroller.scrollTo({ left: Math.max(0, target), behavior: smooth ? 'smooth' : 'auto' });
  };

  const setActive = (index) => {
    if (index === active) return;
    active = index;
    links.forEach((a, i) => {
      if (i === index) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    position.textContent = (index + 1) + ' of ' + links.length;
    label.textContent = links[index].dataset.full || links[index].textContent;
    place(index);
  };

  // The section whose heading was last to pass a line about a third of the way down the screen.
  const threshold = () => Math.max(window.innerHeight * 0.3, 11 * 16);
  const current = () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) return heads.length - 1;
    let found = 0;
    heads.forEach((h, i) => {
      if (h.getBoundingClientRect().top <= threshold()) found = i;
    });
    return found;
  };

  let queued = false;
  const update = () => {
    queued = false;
    if (pinned === null) setActive(current());
  };
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  links.forEach((a, i) => {
    a.addEventListener('click', () => {
      pinned = i;
      setActive(i);
    });
  });
  // A click is remembered until the visitor scrolls by hand, so a short last section can't steal it.
  ['wheel', 'touchmove', 'keydown'].forEach((type) => {
    window.addEventListener(type, () => {
      if (pinned !== null) {
        pinned = null;
        schedule();
      }
    }, { passive: true });
  });

  toggle.hidden = false;
  toggle.addEventListener('click', () => setOpen(!open, true));
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', () => {
    place(active);
    schedule();
  });

  setOpen(open, false);
  setActive(current());
  // Turn transitions on after the first paint so the strip doesn't animate into its start state.
  requestAnimationFrame(() => requestAnimationFrame(() => nav.classList.add('sn-ready')));
})();
