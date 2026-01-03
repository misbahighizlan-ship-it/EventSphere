import { useEffect, useState } from "react";
import api from "../../services/api"; // axios 
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  //JSON Server
  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.log("Erreur fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2>Commandes des utilisateurs</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Total</th>
            <th>Événements</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5">Aucune commande pour le moment</td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.total} €</td>
                <td>
                  {order.items
                    .map((item) => `${item.title} (${item.quantity})`)
                    .join(", ")}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
