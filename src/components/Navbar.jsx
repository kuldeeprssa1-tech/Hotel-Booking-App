import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>StayEase</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>
    </nav>
  );
}

export default Navbar;