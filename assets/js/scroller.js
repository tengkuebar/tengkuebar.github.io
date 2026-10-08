// Adds previous/next buttons and edge fades to a .scroller row of cards.
// Without JS the row still scrolls and snaps natively.
(function () {
  var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll(".scroller").forEach(function (root) {
    var track = root.querySelector(".card-grid");
    if (!track) return;

    var arrow = function (d) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
    };
    var controls = document.createElement("div");
    controls.className = "scroller-controls";
    controls.innerHTML =
      '<button type="button" class="scroller-btn" data-dir="-1" aria-label="Previous">' + arrow("M15 6l-6 6 6 6") + "</button>" +
      '<button type="button" class="scroller-btn" data-dir="1" aria-label="Next">' + arrow("M9 6l6 6-6 6") + "</button>";
    root.appendChild(controls);

    var prev = controls.querySelector('[data-dir="-1"]');
    var next = controls.querySelector('[data-dir="1"]');

    function update() {
      var max = track.scrollWidth - track.clientWidth - 1;
      var canPrev = track.scrollLeft > 1;
      var canNext = track.scrollLeft < max;
      prev.disabled = !canPrev;
      next.disabled = !canNext;
      root.classList.toggle("can-prev", canPrev);
      root.classList.toggle("can-next", canNext);
      controls.hidden = !canPrev && !canNext;
    }

    // Clicks move by whole cards. While a smooth scroll is still running, the next
    // click continues from where that scroll is heading, so fast clicks add up.
    var cards = function () { return Array.prototype.slice.call(track.children); };
    var leftOf = function (card) { return card.offsetLeft - track.firstElementChild.offsetLeft; };
    var pending = null;
    var settle;

    controls.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      var list = cards();
      var index = pending;
      if (index === null) {
        var from = track.scrollLeft;
        index = 0;
        list.forEach(function (card, i) {
          if (Math.abs(leftOf(card) - from) < Math.abs(leftOf(list[index]) - from)) index = i;
        });
      }
      pending = Math.max(0, Math.min(list.length - 1, index + Number(btn.dataset.dir)));
      track.scrollTo({ left: leftOf(list[pending]), behavior: reduceQuery.matches ? "auto" : "smooth" });
    });

    track.addEventListener("scroll", function () {
      update();
      clearTimeout(settle);
      settle = setTimeout(function () { pending = null; }, 150);
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();
