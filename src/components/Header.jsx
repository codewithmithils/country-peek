import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>CountryPeek</h2>
      <Link to="/">Home</Link> | <Link to="/favourites">Favourites</Link>
    </div>
  );
}

export default Header;