import { useEffect } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function MorphImageBlob() {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1, // loop infinitely
      yoyo: true, // reverse smoothly
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.to("#shape", { morphSVG: "#shape2" }).to("#shape", {
      morphSVG: "#shape1",
    });
  }, []);

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <clipPath id="mask">
            {/* The main morphing path */}
            <path
              id="shape"
              d="M100,30 C140,30 170,60 170,100 C170,140 140,170 100,170 C60,170 30,140 30,100 C30,60 60,30 100,30 Z"
            />
            {/* Target shape */}
            <path
              id="shape2"
              d="M100,20 C150,20 180,70 150,120 C120,170 80,160 50,120 C20,80 60,20 100,20 Z"
              style={{ display: "none" }}
            />
          </clipPath>
        </defs>

        {/* The image inside the morphing mask */}
        <image
          href="/image/first.jpg" // your public image
          width="200"
          height="200"
          clipPath="url(#mask)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}
