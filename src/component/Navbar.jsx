import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">
            <Link to="/">EventSphere</Link>
          </h1>
        </div>

        <div className="navbar-right">
          <button
            onClick={toggleSidebar}
            className="cart-btn"
            aria-label="panier ouvert"
          >
            Panier
            {cartItems.length > 0 && (
              <span className="cart-badge">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* ✅ Sidebar */}
      <CartSidebar show={isOpen} />
    </>
  );
}
