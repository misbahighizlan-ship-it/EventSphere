import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { clearCart } from "../../redux/cartSlice";
import api from "../../services/api";
import "./Checkout.css";

export default function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const order = {
        user,
        items: cartItems,
        total,
      };

      await api.post("/orders", order);
      await axios.post(import.meta.env.VITE_N8N_URL, order);

      dispatch(clearCart());
      alert("Commande passée avec succès !");
    } catch (err) {
      console.log(err);
      alert("Erreur lors de la commande !");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-cart">
        {cartItems.map(item => (
          <div key={item.id} className="checkout-item">
            <p>{item.title}</p>
            <p>Quantité: {item.quantity}</p>
            <p>Prix: {item.price} €</p>
          </div>
        ))}
        <h3>Total: {total} €</h3>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom complet" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Téléphone" onChange={handleChange} required />
        <button type="submit">Valider la commande</button>
      </form>
    </div>
  );
}
