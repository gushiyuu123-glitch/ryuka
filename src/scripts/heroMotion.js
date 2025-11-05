// src/scripts/heroMotion.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeroMotion() {
  const hero = document.querySelector(".hero::after");

  gsap.to(".hero::after", {
    backgroundPosition: "center 20%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}
