import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const items = useSelector(state => state.cart.items);

  return (
    <nav>
      <Link to="/">EventSphere</Link>
      <Link to="/events">Événements</Link>
      <Link to="/checkout">Checkout</Link>
      <span className="badge">{items.length}</span>
    </nav>
  );
}
