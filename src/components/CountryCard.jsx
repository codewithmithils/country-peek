import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.cca3}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div style={{ margin: "20px", textAlign: "center" }}>
        <img src={country.flags.png} width="200" alt="flag" />

        <h3>{country.name.common}</h3>

        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital?.[0] ?? "N/A"}</p>
      </div>
    </Link>
  );
}

export default CountryCard;