import { useEffect, useState } from "react";
import api from "../../services/api";
import EventCard from "../../component/EventCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="events-page">
      <h2>Nos événements</h2>

      <div className="events-list">
        {events.map(event => (
          <div key={event.id}>
            <EventCard event={event} />
            <button onClick={() => dispatch(addToCart(event))}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
