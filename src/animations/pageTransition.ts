import gsap from "gsap";

export const animatePageIn = (container: HTMLElement) => {
  return gsap.fromTo(
    container,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
      clearProps: "all",
    },
  );
};

export const animatePageOut = (container: HTMLElement) => {
  return gsap.to(container, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: "power3.in",
  });
};
