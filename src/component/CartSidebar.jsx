
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart
} from "../redux/cartSlice";

import "./CartSidebar.css";

export default function CartSidebar({ show }) {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();
console.log("CartSidebar render:", show);
  if (!show) return null;

  return (
    <aside className={`cart ${show ? "open" : ""}`}>
  <div className="cart-items">
    {items.length === 0 ? (
      <p className="empty">Panier vide</p>
    ) : (
      items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.price} €</p>
            <div className="qty">
              <button onClick={() => dispatch(incrementQty(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(decrementQty(item.id))}>+</button>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Supprimer</button>
          </div>
        </div>
      ))
    )}
  </div>

  <div className="cart-total">
    Total : {total} €
  </div>
</aside>

  );
}
