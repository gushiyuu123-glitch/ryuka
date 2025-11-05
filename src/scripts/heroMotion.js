// src/scripts/heroMotion.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initHeroMotion() {
  console.log("✨ heroMotion 起動");

  const hero = document.querySelector(".hero");
  const scent = document.querySelector(".hero-scent");

  if (!hero || !scent) {
    console.warn("⚠️ Hero 要素が見つからない");
    return;
  }

  // 💨 香りがふわっと上昇 → ほんの少し揺らめくように
gsap.fromTo(
  scent,
  { opacity: 0.5, y: 50, scale: 1 },
  {
    opacity: 0.95,
    y: -100,
    scale: 1.12,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  }
);


  // 🌫️ 背景がスクロールでゆるく奥行きを出す
  gsap.to(hero, {
    backgroundPosition: "center 25%",
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
    },
  });
}
