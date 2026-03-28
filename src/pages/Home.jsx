import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setCountries([]);
      setError(null);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);

      fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then((res) => {
          if (!res.ok) throw new Error("Not found");
          return res.json();
        })
        .then((data) => {
          setCountries(data);
          setError(null);
        })
        .catch(() => {
          setCountries([]);
          setError("No countries found");
        })
        .finally(() => setLoading(false));
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="cards-grid">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

      {!loading && !error && countries.length === 0 && query && (
        <p>Start searching to explore countries.</p>
      )}
    </div>
  );
}

export default Home;