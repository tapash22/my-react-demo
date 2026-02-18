import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export const syncCameraWithScroll = (
  camera: THREE.PerspectiveCamera,
  container: HTMLElement,
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  tl.to(camera.position, { z: 3 }) // Section 1
    .to(camera.position, { x: 2 }) // Section 2
    .to(camera.position, { y: 2 }) // Section 3
    .to(camera.position, { z: 1 }); // Section 4

  return tl;
};
