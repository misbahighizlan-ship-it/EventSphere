import { useEffect, useState } from "react";
import api from "../../services/api";
import EventCard from "../../component/EventCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/events")
      .then(res => setEvents(res.data.slice(0, 4))) // 4 card
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-page">

      {/* herosection */}
      <section className="home-hero">
        <h1>EventSphere</h1>
        <p>Découvrez et réservez vos événements préférés</p>
        <Link to="/events" className="home-cta">
          Explorer les événements
        </Link>
      </section>

      {/* evrnts */}
      <section className="home-events">
        <h2>Événements à venir</h2>

        <div className="home-events-grid">
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onAddToCart={() => dispatch(addToCart(event))}
            />
          ))}
        </div>


      </section>

    </div>
  );
}
