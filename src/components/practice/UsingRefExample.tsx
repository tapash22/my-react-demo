import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export default function UsingRefExample() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <>
      <h1>Now: {count}</h1>
      {/* Show previous value */}
      <p>Previous count: {previousCount}</p>

      <button
        className="bg-red-400 px-5 py-2 text-black font-medium tracking-wide text-lg rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </>
  );
}
