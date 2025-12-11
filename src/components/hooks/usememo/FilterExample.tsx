import { useState, useMemo } from "react";

export function FilterExample() {
  const [search, setSearch] = useState("");

  const users = [
    "Tapas Paul",
    "Rafik",
    "Sohel",
    "Sadia",
    "Nusrat",
    "Mahmud",
    "Jubayer",
    "Tanvir",
  ];

  console.log("🎨 Component Rendered!");

  // Filter only when "search" changes
  const filteredUsers = useMemo(() => {
    console.log("🔍 Running FILTER...");
    const result = users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );

    console.log("🧪 Filter Result:", result);
    return result;
  }, [search]);

  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "200px", padding: "8px" }}
      />

      <h3>Results:</h3>
      <ul>
        {filteredUsers.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
}
