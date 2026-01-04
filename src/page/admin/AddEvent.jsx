import { useState } from "react";
import axios from "axios";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./AddEvent.css";

export default function AddEvent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    image: "",
    price: "",
    Location:"",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  Upload image 
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    //
    console.log("FILE:", file);
    console.log("CLOUD NAME:", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    console.log("UPLOAD PRESET:", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    //
    if (!file) return;

    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        data
      );

      //
      console.log("CLOUDINARY RESPONSE:", res.data);
      ///
      // axios -> res.data
      setForm({ ...form, image: res.data.secure_url });
    } catch (err) {
      console.error("UPLOAD ERROR:", err.response?.data || err);
      alert("Erreur lors du upload !");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.image) {
      alert("Veuillez uploader une image !");
      return;
    }

    try {
      await api.post("/events", form);
      alert("Event ajouté avec succès !");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'ajout !");
    }
  };

  return (
    <div className="add-event-container">
      <h2>Ajouter un événement</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titre"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Catégorie"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="jj/mm/aa"
          onChange={handleChange}
          required
        />

<input
          type="text"
          name="Location"
          placeholder="Location"
          onChange={handleChange}
          required
        />

        {/* Upload image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {uploading && <p>Uploading image...</p>}

        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="preview-image"
          />
        )}

        <input
          type="number"
          name="price"
          placeholder="Prix"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={uploading}>
          Ajouter
        </button>
      </form>
    </div>
  );
}
