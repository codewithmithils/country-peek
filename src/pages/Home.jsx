import { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Start searching to explore countries.</p>
    </div>
  );
}

export default Home;