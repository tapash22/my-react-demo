// import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
  //   const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    // topRef.current?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full p-3 flex justify-end">
      <button
        onClick={scrollToTop}
        className="w-16 h-16 rounded-full shadow-xl drop-shadow-2xl bg-white flex justify-center items-center"
      >
        <FaArrowUp color="black" size={20} />
      </button>
    </div>
  );
}
