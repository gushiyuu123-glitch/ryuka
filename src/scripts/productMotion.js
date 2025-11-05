// src/scripts/productMotion.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && gsap) {
  gsap.registerPlugin(ScrollTrigger);
}

export function initProductMotion() {
  console.log("🌿 productMotion | 立体スクロール＋ホバー起動");

  const cards = document.querySelectorAll(".product-card");
  if (!cards.length) return;

  gsap.set(cards, {
    transformPerspective: 1200,
    transformOrigin: "center center",
  });

  cards.forEach((card, i) => {
    const randomRotate = (Math.random() - 0.5) * 5;
    const randomZ = -80 - Math.random() * 60;
    const delay = i * 0.15;

    // ✳️ スクロール登場アニメーション（前回の構造そのまま）
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        z: randomZ,
        rotateX: 6,
        rotateY: randomRotate,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        delay,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );

    // ✨ ホバーでふわっと浮く動き（GSAPで自然制御）
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        rotateX: -2,
        rotateY: 2,
        scale: 1.04,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  });
}
gsap.fromTo(".products h2",
  { opacity: 0.6, filter: "brightness(1)" },
  {
    opacity: 1,
    filter: "brightness(1.4)",
    scrollTrigger: {
      trigger: ".products h2",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1.2,
    ease: "power2.out"
  }
);
