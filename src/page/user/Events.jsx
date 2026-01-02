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
          <EventCard
            key={event._id || event.id}
            event={event}
            onAddToCart={() => dispatch(addToCart(event))}
          />
        ))}
      </div>
    </div>
  );
}
