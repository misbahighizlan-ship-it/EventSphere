import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaTrash } from "react-icons/fa";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

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

  const handleDelete = async (id) => {
    if (window.confirm("tu es sure")) {
      try {
        await api.delete(`/orders/${id}`);
        fetchOrders();
      } catch (err) {
        console.log("Erreur delete order:", err);
      }
    }
  };

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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="6">Aucune commande pour le moment</td>
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
                <td className="action-cell">
                  <button
                    className="delete-icon-btn"
                    onClick={() => handleDelete(order.id)}
                    title="Supprimer"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
