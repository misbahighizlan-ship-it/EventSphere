import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>EventSphere</h1>
      <p>Découvrez et réservez vos événements préférés</p>

      <div className="categories">
        <span>🎵 Musique</span>
        <span>🎨 Art</span>
        <span>⚽ Football</span>
        <span>🎭 Spectacle</span>
      </div>

      <Link to="/events" className="cta">
        Voir les événements
      </Link>
    </div>
  );
}
