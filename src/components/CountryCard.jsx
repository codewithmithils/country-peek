function CountryCard({ country }) {
  const { name, flags, population, region, capital } = country;

  return (
    <div className="card">
      <img
        src={flags?.svg}
        alt={name?.common}
        className="card__flag"
      />

      <div className="card__body">
        <h3>{name?.common}</h3>

        <p>Population: {population?.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital?.[0] ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default CountryCard;