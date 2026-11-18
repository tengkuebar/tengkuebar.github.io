// Resume page: switch between the Cybersecurity and IT Support resumes.
// The panes are shown and hidden by CSS from html[data-track], which an inline script sets before first paint.
(() => {
  const sw = document.querySelector('.track-switch');
  if (!sw) return;
  const tabs = [...sw.querySelectorAll('[role="tab"]')];
  const root = document.documentElement;

  const pick = (tab, focus) => {
    const track = tab.id.replace('tab-', '');
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    sw.dataset.active = track;
    root.setAttribute('data-track', track);
    try { history.replaceState(null, '', track === 'support' ? '#support' : location.pathname); } catch (e) { /* ignore */ }
    if (focus) tab.focus();
    // Tell the section strips to measure again now that their pane is visible.
    window.dispatchEvent(new Event('resume-tab'));
  };

  tabs.forEach((t) => {
    t.addEventListener('click', () => pick(t, false));
    t.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        pick(tabs[1 - tabs.indexOf(t)], true);
      }
    });
  });

  const start = root.getAttribute('data-track') === 'support' ? tabs[1] : tabs[0];
  pick(start, false);
})();
