import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePageIn, animatePageOut } from "../../animations";
import { useLocation } from "react-router-dom";
import type { Direction } from "../../features/type/User";

interface AnimationOptions {
  dep?: unknown;
  direction?: Direction;
}

export const usePageAnimation = <T extends HTMLElement>(
  // denpendency pass for animation with gsap
  options?: AnimationOptions,
) => {
  const ref = useRef<T>(null);
  const location = useLocation();

  const dep = options?.dep;
  const direction = options?.direction ?? "right";

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mode = dep !== undefined ? "tab" : "route";

    animatePageIn(el, mode, direction);
    ScrollTrigger.refresh();

    return () => {
      animatePageOut(el, mode, direction);
    };
  }, [location.pathname, dep, direction]); //dependency and direction handle

  return ref;
};
