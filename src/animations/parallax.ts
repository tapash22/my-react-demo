import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const createParallax = (container: HTMLElement) => {
  return gsap.context(() => {
    gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
      const speed = el.dataset.speed || "0.3";

      gsap.to(el, {
        y: () => -(window.innerHeight * Number(speed)),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, container);
};
