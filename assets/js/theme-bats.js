// A short, decorative flock on entering dark mode; nothing persists after flight.
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let layer;
  let cleanupTimer;
  let flights = [];

  const clearBats = () => {
    window.clearTimeout(cleanupTimer);
    flights.forEach((flight) => flight.cancel());
    flights = [];
    if (layer) layer.remove();
    layer = null;
  };

  const batShape = `<svg viewBox="0 0 100 60" aria-hidden="true" focusable="false">
    <path class="theme-bat-wing theme-bat-wing-left" d="M49 27C36 12 18 8 2 10C11 19 13 28 12 37C21 30 29 33 32 43C37 36 43 37 49 39Z"/>
    <path class="theme-bat-wing theme-bat-wing-right" d="M51 27C64 12 82 8 98 10C89 19 87 28 88 37C79 30 71 33 68 43C63 36 57 37 51 39Z"/>
    <path d="M44 25L44 15L50 21L56 15L56 25C63 34 58 45 50 51C42 45 37 34 44 25Z"/>
  </svg>`;

  const releaseBats = () => {
    clearBats();
    if (reducedMotion.matches || !document.body || typeof Element.prototype.animate !== "function") return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const count = width < 600 ? 18 : 28;
    layer = document.createElement("div");
    layer.className = "theme-bats";
    layer.setAttribute("aria-hidden", "true");
    document.body.append(layer);

    for (let i = 0; i < count; i++) {
      const bat = document.createElement("div");
      const size = (width < 600 ? 24 : 30) + Math.random() * 34;
      const fromLeft = i % 2 === 0;
      const startX = fromLeft ? -size * 2 : width + size;
      const endX = fromLeft ? width + size : -size * 2;
      const startY = (height * (i + 0.5)) / count;
      const drift = (Math.random() - 0.5) * height * 0.45;
      const duration = 2300 + Math.random() * 700;
      const delay = Math.random() * 650;
      const tilt = fromLeft ? -12 : 12;

      bat.className = "theme-bat";
      bat.style.width = `${size}px`;
      bat.style.setProperty("--bat-flap-duration", `${180 + Math.random() * 140}ms`);
      bat.style.setProperty("--bat-flap-delay", `${-Math.random()}s`);
      bat.innerHTML = batShape;
      layer.append(bat);

      const keyframes = [0, 0.25, 0.5, 0.75, 1].map((progress, index) => {
        const x = startX + (endX - startX) * progress;
        const y = startY + drift * progress + Math.sin(progress * Math.PI * 3) * 35;
        return {
          transform: `translate3d(${x}px, ${y}px, 0) rotate(${tilt + Math.sin(index * 2) * 14}deg)`,
          opacity: index === 0 || index === 4 ? 0 : 0.85,
          offset: progress,
        };
      });
      flights.push(bat.animate(keyframes, { duration, delay, easing: "linear", fill: "both" }));
    }

    cleanupTimer = window.setTimeout(clearBats, 3800);
  };

  document.addEventListener("theme-changed", ({ detail }) => {
    if (detail.theme === "dark") releaseBats();
    else clearBats();
  });
  reducedMotion.addEventListener("change", clearBats);
  window.addEventListener("pagehide", clearBats);
})();
