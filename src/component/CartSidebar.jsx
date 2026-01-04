import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";

export default function CartSidebar({ show }) {
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // total
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!show) return null;

  return (
    <aside className={`cart ${show ? "open" : ""}`}>
      <div className="cart-items">
        {items.length === 0 ? (
          <p className="empty">Panier vide</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.price} €</p>

                <div className="qty">
                  <button onClick={() => dispatch(decrementQty(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
                </div>

                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Supprimer
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        Total : {total} €
      </div>


      {items.length > 0 && (
        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Commander
        </button>
      )}

    </aside>
  );
}
