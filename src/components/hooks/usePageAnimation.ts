import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePageIn, animatePageOut } from "../../animations";

export const usePageAnimation = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    animatePageIn(el);
    ScrollTrigger.refresh();

    return () => {
      animatePageOut(el);
    };
  }, []);

  return ref;
};
