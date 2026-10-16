// Home page behaviour: the support ticket follows the scroll, the toolkit slots swap a detail
// panel, and the contact block wipes in. Without JavaScript the page still reads in full: the
// ticket shows its finished state and the toolkit falls back to a plain list.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Support ticket: the bar and the stage follow the scroll. Once the whole card has been on screen
  // for a moment, the bar fills from empty to full and its colour runs red, yellow, green.
  // Reported, Traced and Fixed take over as it goes, and Fixed arrives with a full bar.
  // Scrolling back up reverses it. Reduced motion, or no IntersectionObserver, shows the finished ticket.
  const ticket = document.querySelector('[data-ticket]');
  if (ticket) {
    const steps = [...ticket.querySelectorAll('[data-step]')];
    const bar = ticket.querySelector('[data-ticket-bar]');
    const text = ticket.querySelector('[data-ticket-text]');
    const lines = [
      'The user can\u2019t join the office Wi-Fi since this morning. Other devices work fine.',
      'The laptop is holding a saved network profile from before the password change.',
      'Removed the old profile and rejoined. The user is back online and working.'
    ];
    const stops = [[229, 72, 77], [245, 197, 24], [53, 224, 122]]; // red, yellow, green
    const hex = ['#e5484d', '#f5c518', '#35e07a'];
    const colourAt = (p) => {
      const x = p * 2;
      const i = Math.min(1, Math.floor(x));
      const f = x - i;
      return stops[i].map((c, k) => Math.round(c + (stops[i + 1][k] - c) * f));
    };
    let stage = -1;
    let swapTimer = 0;
    const setStage = (s, animate) => {
      stage = s;
      steps.forEach((el, i) => {
        el.classList.toggle('is-on', i === s);
        el.classList.toggle('is-done', i < s);
      });
      ticket.style.setProperty('--stage', hex[s]);
      clearTimeout(swapTimer);
      if (!animate) { text.textContent = lines[s]; return; }
      text.classList.add('is-out');
      swapTimer = setTimeout(() => {
        text.textContent = lines[s];
        text.classList.remove('is-out');
      }, 120);
    };
    // The bar reaches full (and fully green) at p = 0.7, and "Fixed" switches on at that same moment,
    // so Fixed always means a full bar. Scrolling further just holds it there. Going back up, each stage
    // lets go a little earlier (0.04) than it arrived, so the chips don't flicker when scrolling rests on a boundary.
    const FULL_AT = 0.7;
    const up = [0.3, FULL_AT];
    const down = [0.26, FULL_AT - 0.04];
    let lastP = -1;
    let lastB = -1;
    const render = (p) => {
      // Scrolling with the bar already empty or full changes nothing, so skip the work
      if (p === lastP) return;
      lastP = p;
      const b = Math.min(1, p / FULL_AT);
      if (b !== lastB) {
        lastB = b;
        bar.style.transform = `scaleX(${b})`;
        bar.style.setProperty('--bar', `rgb(${colourAt(b).join(',')})`);
      }
      let s = stage < 0 ? 0 : stage;
      // Loops, so a jump of more than one stage (fast scroll, in-page link) lands on the right one
      while (s < 2 && p >= up[s]) s += 1;
      while (s > 0 && p < down[s - 1]) s -= 1;
      if (s !== stage) setStage(s, stage >= 0);
    };
    // Nothing changes until the whole card is on screen. After that comes a short rest (10% of the
    // viewport height) on an empty bar and "Reported", then the bar fills over the next 30%.
    const progress = () => {
      const r = ticket.getBoundingClientRect();
      const fullyShownAt = innerHeight * 0.95 - r.height;
      const rest = innerHeight * 0.1;
      return Math.min(1, Math.max(0, (fullyShownAt - r.top - rest) / (innerHeight * 0.3)));
    };
    if (reduce || !('IntersectionObserver' in window)) {
      render(FULL_AT);
    } else {
      let queued = false;
      let inView = false;
      const update = () => { queued = false; render(progress()); };
      const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => { inView = entry.isIntersecting; });
        if (inView) queue();
      }).observe(ticket);
      addEventListener('scroll', () => { if (inView) queue(); }, { passive: true });
      addEventListener('resize', queue);
      render(progress());
    }
  }
  // Toolkit: pick a slot, read where it was used. The detail text fades in on change,
  // and hovering waits 60ms so a pointer crossing the grid doesn't flash the panel.
  const toolkit = document.querySelector('[data-toolkit]');
  if (toolkit) {
    const slots = [...toolkit.querySelectorAll('.slot')];
    const name = toolkit.querySelector('[data-slot-name]');
    const tools = toolkit.querySelector('[data-slot-tools]');
    const used = toolkit.querySelector('[data-slot-used]');
    const bits = [name, tools, used];
    let current = slots[0];
    let intent = 0;
    let swapTimer = 0;
    const pick = (slot) => {
      if (slot === current) return;
      current = slot;
      slots.forEach((s) => s.setAttribute('aria-pressed', s === slot ? 'true' : 'false'));
      // Fade the old text out (80ms), swap it, then let it fade back in. A quick second pick just
      // retargets: the pending swap is replaced and the text lands on the latest slot.
      bits.forEach((el) => el.classList.add('is-swapping'));
      clearTimeout(swapTimer);
      swapTimer = setTimeout(() => {
        name.textContent = current.textContent;
        tools.textContent = current.dataset.tools;
        used.textContent = current.dataset.used;
        bits.forEach((el) => el.classList.remove('is-swapping'));
      }, reduce ? 0 : 80);
    };
    slots.forEach((slot) => {
      slot.addEventListener('click', () => { clearTimeout(intent); pick(slot); });
      slot.addEventListener('mouseenter', () => {
        clearTimeout(intent);
        intent = setTimeout(() => pick(slot), 60);
      });
      slot.addEventListener('mouseleave', () => clearTimeout(intent));
      slot.addEventListener('focus', () => { clearTimeout(intent); pick(slot); });
    });
    document.documentElement.classList.add('toolkit-js');
  }

  // Contact block: wipe in from the left once, when it first scrolls into view.
  // Only set up when it starts below the fold, so it never hides content that is already visible.
  const contact = document.querySelector('.contact-field');
  if (contact && 'IntersectionObserver' in window && contact.getBoundingClientRect().top > innerHeight) {
    contact.classList.add('wipe');
    let io;
    const reveal = () => {
      contact.classList.add('wipe-in');
      removeEventListener('scroll', check);
      if (io) io.disconnect();
    };
    // A plain scroll check backs up the observer, so the block can never stay hidden
    const check = () => { if (contact.getBoundingClientRect().top < innerHeight * 0.85) reveal(); };
    io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) reveal(); });
    }, { threshold: 0.15 });
    io.observe(contact);
    addEventListener('scroll', check, { passive: true });
  }
})();
