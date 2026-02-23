import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePageIn, animatePageOut } from "../../animations";
import { useLocation } from "react-router-dom";

export const usePageAnimation = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    animatePageIn(el);
    ScrollTrigger.refresh();

    return () => {
      animatePageOut(el);
    };
  }, [location.pathname]);

  return ref;
};
