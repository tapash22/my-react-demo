import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

export function useGsapContext(
  ref: RefObject<HTMLElement | null>,
  animation: () => void,
) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(animation, ref);

    return () => ctx.revert();
  }, [ref, animation]);
}
