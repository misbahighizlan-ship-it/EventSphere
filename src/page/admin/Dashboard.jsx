import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // جلب الأحداث من JSON Server
  const fetchEvents = async () => {
    try {
      const res = await api.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // حذف حدث
  const handleDelete = async (id) => {
    if (window.confirm("Supprimer cet événement ?")) {
      try {
        await api.delete(`/events/${id}`);
        fetchEvents();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard Admin</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.category}</td>
              <td>{event.price}</td>
              <td>
                {event.image && (
                  <img src={event.image} alt={event.title} />
                )}
              </td>
              <td>
                <button onClick={() => navigate(`/admin/add`)}>Modifier</button>
                <button onClick={() => handleDelete(event.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
