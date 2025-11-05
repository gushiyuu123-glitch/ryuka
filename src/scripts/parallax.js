// src/scripts/parallax.js
export function initParallax() {
  const hero = document.querySelector(".hero");
  const store = document.querySelector(".store-bg");
  if (!hero || !store) return;

  console.log("🌿 parallax natural mode");

  let currentHero = 50;
  let currentStore = 40;

  window.addEventListener("scroll", () => {
    const y = window.scrollY || window.pageYOffset;

    // ↓ スクロール方向に合わせて反転（マイナス符号）
    const targetHero = 50 - y * 0.05;  
    const targetStore = 40 - y * 0.03;

    currentHero += (targetHero - currentHero) * 0.08;
    currentStore += (targetStore - currentStore) * 0.06;

    hero.style.backgroundPosition = `center ${currentHero}%`;
    store.style.backgroundPosition = `center ${currentStore}%`;
  });
}
