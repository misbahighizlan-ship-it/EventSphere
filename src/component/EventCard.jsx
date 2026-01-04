
import "./EventCard.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
export default function EventCard({ event, onAddToCart }) {
  return (
    <div className="event-card">
      
      <div className="event-image">
        <img
          src={event.image || "https://via.placeholder.com/400x250"}
          alt={event.title}
        />

        <span className="event-category">{event.category}</span>
        <span className="event-price">{event.price} MAD</span>
      </div>

      {/* Content */}
      <div className="event-content">
        <h3>{event.title}</h3>
        <p className="event-description">{event.description}</p>

<div className="event-info">
          <span>
            <FaCalendarAlt /> {event.date}
          </span>
          <span>
            <FaMapMarkerAlt /> {event.location}
          </span>
        </div>

        <button className="add-btn" onClick={onAddToCart}>
          + Ajouter au panier
        </button>
      </div>
    </div>
  );
}
