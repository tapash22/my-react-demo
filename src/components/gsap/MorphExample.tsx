import { useEffect } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function MorphExample() {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.to("#shape", { morphSVG: "#shape2" })
      .to("#shape", { morphSVG: "#shape3" })
      .to("#shape", { morphSVG: "#shape1" });
  }, []);

  return (
    <svg viewBox="0 0 200 200" width="200" height="200">
      <path
        id="shape"
        d="M100,30 C140,30 170,60 170,100 C170,140 140,170 100,170 C60,170 30,140 30,100 C30,60 60,30 100,30 Z"
        fill="#00aaff"
      />
      <path
        id="shape2"
        d="M100,20 C150,20 180,70 150,120 C120,170 80,160 50,120 C20,80 60,20 100,20 Z"
        fill="#00aaff"
        style={{ display: "none" }}
      />
      <path
        id="shape3"
        d="M100,40 C160,40 180,80 160,140 C140,180 60,180 40,140 C20,80 40,40 100,40 Z"
        fill="#00aaff"
        style={{ display: "none" }}
      />
    </svg>
  );
}
