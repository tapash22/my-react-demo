import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export const syncCameraWithScroll = (
  camera: THREE.PerspectiveCamera,
  container: HTMLElement,
) => {
  return gsap.to(camera.position, {
    z: 2,
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
};
