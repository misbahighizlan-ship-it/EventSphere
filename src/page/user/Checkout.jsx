import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { clearCart } from "../../redux/cartSlice";
import api from "../../services/api";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
const navigate =useNavigate();
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

  const order = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    items: cartItems,
    total,
    status: "en attente",
  };

  try {
    // 1️⃣ إرسال الطلب للسيرفر (ضروري)
    await api.post("/orders", order);

    // 2️⃣ إرسال الطلب لـ n8n (اختياري)
    try {
      await axios.post(import.meta.env.VITE_N8N_URL, order);
    } catch (err) {
      console.log("⚠️ n8n not available");
    }

    // 3️⃣ تخزين الإيميل
    localStorage.setItem("userEmail", user.email);

    // 4️⃣ تفريغ السلة
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
      <button className="checkout-btn" onClick={()=>navigate("/events")}> Continue à Explorer</button>
    </div>
  );
}
