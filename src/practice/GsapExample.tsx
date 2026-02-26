import { useEffect, useRef } from "react";
import FlipList from "../components/gsap/FlipList";
import MorphExample from "../components/gsap/MorphExample";
import MorphImageBlob from "../components/gsap/MorphImageBlob";

export function GsapExample() {
  const containerUiRef = useRef<HTMLUListElement>(null);
  const menuItems = ["Home", "About", "Services", "Contact"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-item", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "elastic.out",
      });
    }, containerUiRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full p-5 flex flex-col space-y-3">
      <div className="p-5 w-full h-full">
        <FlipList />
      </div>
      <div className="p-5 w-full h-full">
        <MorphImageBlob />
      </div>
      <div className="p-5 w-full h-full">
        <MorphExample />
      </div>
      <div className="p-5 w-full h-full">
        <ul ref={containerUiRef}>
          {menuItems.map((item, index) => (
            <li
              className="menu-item"
              key={index}
              style={{ listStyle: "none", marginBottom: "10px" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
