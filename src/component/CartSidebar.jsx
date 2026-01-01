/*import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice";
import "./CartSidebar.css";

export default function CartSidebar() {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h3>Panier</h3>

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <div>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>
        </div>
      ))}

      <h4>Total : {total} DH</h4>
    </div>
  );
}*/
