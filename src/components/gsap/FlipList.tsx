import { useRef, useState } from "react";

export default function FlipList() {
  const [items, setItems] = useState(["A", "B", "C", "D"]);
  const listRef = useRef<HTMLUListElement>(null);

  const handleReverse = () => {
    const list = listRef.current;
    console.log("list", list);
    if (!list) return;

    // 1️⃣ FIRST - Measure initial positions
    const children = Array.from(list.children) as HTMLElement[];
    const firstRects = children.map((child) => child.getBoundingClientRect());

    // 2️⃣ Change layout (update state)
    setItems((prev) => [...prev].reverse());

    // Wait for DOM update
    requestAnimationFrame(() => {
      const newChildren = Array.from(
        listRef.current!.children,
      ) as HTMLElement[];

      newChildren.forEach((child, index) => {
        const lastRect = child.getBoundingClientRect();
        const firstRect = firstRects[index];

        // 3️⃣ INVERT - Calculate difference
        const deltaX = firstRect.left - lastRect.left;
        const deltaY = firstRect.top - lastRect.top;

        // Apply reverse transform
        child.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        child.style.transition = "none";

        // 4️⃣ PLAY - Animate back to normal
        requestAnimationFrame(() => {
          child.style.transition = "transform 500ms ease";
          child.style.transform = "";
        });
      });
    });
  };

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={handleReverse}>Reverse List</button>

      <ul ref={listRef} style={{ padding: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              listStyle: "none",
              marginBottom: "10px",
              padding: "15px",
              background: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
