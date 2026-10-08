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

    controls.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      var card = track.firstElementChild;
      var step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
      track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: reduceQuery.matches ? "auto" : "smooth" });
    });

    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();
