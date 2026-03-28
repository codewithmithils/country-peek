import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h2>CountryPeek</h2>

      <Link to="/">Home</Link>
      <br />
      <Link to="/favourites">Favourites</Link>
    </div>
  );
}

export default Header;