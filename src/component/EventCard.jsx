import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.image || "https://via.placeholder.com/150"} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.category}</p>
      <p>{event.description}</p>
      <p className="price">{event.price} MAD</p>
    </div>
  );
}
