import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapBox() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    gsap.fromTo(
      boxRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
    );
  }, []);

  return <div ref={boxRef} className="w-32 h-32 bg-(--surface) rounded-xl" />;
}
