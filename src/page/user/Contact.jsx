
import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await axios.post(import.meta.env.VITE_N8N_URL, data, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Message envoyé avec succès ✅");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <form className="contact-card" onSubmit={submit}>
        <h2>Contactez-nous</h2>

        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          placeholder="Votre message..."
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
