import { useState, useTransition } from "react";

export function SearchExample() {
  const [search, setSearch] = useState("");
  const [items, SetItems] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [showLoader, setShowLoader] = useState(false);

  const bigList = Array.from({ length: 5000 }).map((_, i) => `Item ${i}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);
    setShowLoader(true);

    startTransition(() => {
      const filtered = bigList.filter((i) =>
        i.toLowerCase().includes(value.toLowerCase())
      );
      SetItems(filtered);

      setInterval(() => {
        setShowLoader(false);
      }, 10000);
    });
  };

  return (
    <div>
      <input value={search} onChange={handleChange} placeholder="Search" />

      {isPending && showLoader && <p>Filtering ...</p>}
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
