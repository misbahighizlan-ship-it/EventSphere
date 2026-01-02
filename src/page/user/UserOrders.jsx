import { useEffect, useState } from "react";
import api from "../../services/api";
import "./UserOrders.css";

export default function UserOrders({ userEmail }) {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders");
      // فلترة الطلبات على حسب email المستخدم
      const userOrders = res.data.filter(order => order.email === userEmail);
      setOrders(userOrders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [userEmail]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mes commandes</h2>
      {orders.length === 0 ? (
        <p>Vous n'avez aucune commande pour le moment.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Quantité</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.eventId}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
