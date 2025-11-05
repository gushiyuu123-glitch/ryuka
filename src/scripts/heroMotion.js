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

  // ふわっと香りが漂うような動き
  gsap.fromTo(
    scent,
    { opacity: 0.3, y: 20, scale: 1 },
    {
      opacity: 0.7,
      y: -40,
      scale: 1.05,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    }
  );

  // 背景のパララックス（上下の奥行き）
  gsap.to(hero, {
    backgroundPosition: "center 30%",
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}
