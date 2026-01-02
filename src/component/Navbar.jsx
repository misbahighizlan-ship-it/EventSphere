import { useState } from "react";
import { useSelector } from "react-redux";
import CartSidebar from "./CartSidebar";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1>EventSphere</h1>
      <button onClick={toggleSidebar} className="cart-btn">
        Panier ({cartItems.length})
      </button>

      <CartSidebar cartItems={cartItems} toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </nav>
  );
}
