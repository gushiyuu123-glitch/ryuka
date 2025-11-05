import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && gsap) gsap.registerPlugin(ScrollTrigger);

export function initPageTransition() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, i) => {
    const colors = [
      "#f9f8f5", // morning white
      "#f7f3e8", // light amber
      "#f4efe4", // warm gold
      "#eae7e2"  // evening calm
    ];
    gsap.to(section, {
      backgroundColor: colors[i % colors.length],
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });
}
