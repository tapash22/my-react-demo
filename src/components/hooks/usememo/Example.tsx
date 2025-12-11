import { useMemo, useState } from "react";

export function Example() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("calculation ...");

    let num = 0;
    for (let i = 0; i < 5; i++) {
      num += 1;
    }
    return num;
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <p>expensive Value:{expensiveValue}</p>
      <button
        className="px-5 py-2 shadow-2xl bg-gray-500 rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}
