import { useParams, useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountry";

function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();

  const { country, loading, error } = useCountry(code);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!country) return null;

  const languages = country.languages
    ? Object.values(country.languages)
    : [];

  const currencies = country.currencies
    ? Object.values(country.currencies).map((c) => c.name)
    : [];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{country.name.common}</h1>
      <p>{country.name.official}</p>

      <img src={country.flags.svg} width="300" alt="flag" />

      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Capital: {country.capital?.[0] ?? "N/A"}</p>

      <p>Languages: {languages.join(", ")}</p>
      <p>Currencies: {currencies.join(", ")}</p>

      {country.borders && (
        <div>
          <h3>Borders:</h3>
          {country.borders.map((b) => (
            <span key={b} style={{ margin: "5px" }}>
              {b}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryPage;