/*import { useSelector, useDispatch } from "react-redux";
import api from "../../api/api";
import { clearCart } from "../../redux/cartSlice";

export default function Checkout() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      items: cart.items,
      total: cart.total,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    };

    await api.post("/orders", order);
    await fetch(import.meta.env.VITE_N8N_URL, {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" }
    });

    dispatch(clearCart());
    alert("Commande validée !");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nom" required />
      <input name="email" placeholder="Email" required />
      <input name="phone" placeholder="Téléphone" required />
      <button>Commander</button>
    </form>
  );
}
*/