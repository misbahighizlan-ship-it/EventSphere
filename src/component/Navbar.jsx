
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ onCartClick }) {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo EventSphere */}
        <Link to="/" className="navbar-logo">
          EventSphere
        </Link>

        {/* Links */}
        <div className="navbar-links">
          <Link to="/">Accueil</Link>
          <Link to="/events">Événements</Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <Link to="/admin/login" className="icon-btn">
            <FaUser />
          </Link>

          <button className="icon-btn cart-btn" onClick={onCartClick}>
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}
 