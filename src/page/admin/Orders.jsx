/*import { useEffect, useState } from "react";
import api from "../../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <table>
      {orders.map(o => (
        <tr key={o.id}>
          <td>{o.name}</td>
          <td>{o.phone}</td>
          <td>{o.total}</td>
        </tr>
      ))}
    </table>
  );
}
*/