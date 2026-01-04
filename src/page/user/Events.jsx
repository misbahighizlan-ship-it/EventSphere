import { useEffect, useState } from "react";
import api from "../../services/api";
import EventCard from "../../component/EventCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./Events.css";

const categories = ["Tous", "Musique", "Sport", "Art", "Tech", "Gastronomie"];

export default function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  const filteredEvents = events.filter(event => {
    const matchSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "Tous" ||
      event.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="events-page">
      {/* HERO */}
      <div className="events-hero">
        <h1>Découvrez nos <span>événements</span></h1>
        <p>
          Explorez notre sélection d'événements exceptionnels et réservez vos places
        </p>

        <input
          type="text"
          placeholder="Rechercher un événement..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* LIST */}
      <div className="events-list">
        {filteredEvents.map(event => (
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
