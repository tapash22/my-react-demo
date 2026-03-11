import gsap from "gsap";
import type { AnimationMode, Direction } from "../features/type/User";

export const animatePageIn = (
  container: HTMLElement,
  //handle mode use left/right or up/ bottom
  mode: AnimationMode = "route",
  //handle left/ right animation
  direction: Direction = "right",
) => {
  // tab animation
  if (mode === "tab") {
    const startX = direction === "right" ? 30 : -30;

    gsap.set(container, { opacity: 0, x: startX });

    return gsap.to(container, {
      opacity: 1,
      x: 0,
      // scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  // default route animation
  gsap.set(container, { opacity: 0, y: 20 });

  return gsap.to(container, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
  });
};

export const animatePageOut = (
  container: HTMLElement,
  mode: AnimationMode = "route",
  direction: Direction = "right",
) => {
  // tab animation
  if (mode === "tab") {
    const exitX = direction === "right" ? -30 : 30;

    return gsap.to(container, {
      opacity: 0,
      x: exitX,
      // scale: 0.98,
      duration: 0.5,
      ease: "power2.in",
    });
  }

  // default route animation
  return gsap.to(container, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: "power3.in",
  });
};
