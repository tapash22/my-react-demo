// src/utils/responsiveAnimations.ts
import gsap from "gsap";

type ResponsiveConfig = {
  selector: string; // any CSS selector in your component
  desktop?: gsap.TweenVars; // animation for desktop
  tablet?: gsap.TweenVars; // animation for tablet
  mobile?: gsap.TweenVars; // animation for mobile
};

/**
 * Creates responsive GSAP animations based on screen size.
 * Returns matchMedia instance for cleanup (revert)
 */
export const responsiveAnimations = (config: ResponsiveConfig) => {
  const mm = gsap.matchMedia();

  mm.add(
    {
      desktop: "(min-width: 1024px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
      mobile: "(max-width: 767px)",
    },
    (context) => {
      const conditions = context.conditions as {
        desktop: boolean;
        tablet: boolean;
        mobile: boolean;
      };

      const { desktop, tablet, mobile } = conditions;
      const el = document.querySelectorAll(config.selector);

      if (!el.length) return;

      if (desktop && config.desktop) {
        gsap.to(el, config.desktop);
      }

      if (tablet && config.tablet) {
        gsap.to(el, config.tablet);
      }

      if (mobile && config.mobile) {
        gsap.to(el, config.mobile);
      }
    },
  );

  return mm; // Return matchMedia instance for cleanup
};
