import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./AddEvent.css";
export default function AddEvent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/events", form);
      alert("Event ajouté avec succès !");
      navigate("/admin/dashboard");
    } catch (err) {
      console.log(err);
      alert("Erreur lors de l'ajout !");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ajouter un événement</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Titre" onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Catégorie" onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL image" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Prix" onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
