import { useEffect, useState } from "react";
import api from "../../services/api";
import EventCard from "../../component/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events")
       .then(res => setEvents(res.data))
       .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <div className="events-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
