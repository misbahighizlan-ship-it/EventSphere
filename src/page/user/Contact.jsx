export default function Contact() {
  const submit = async (e) => {
    e.preventDefault();

    await fetch(import.meta.env.VITE_N8N_URL, {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      }),
      headers: { "Content-Type": "application/json" }
    });

    alert("Message envoyé !");
  };

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Nom" />
      <input name="email" placeholder="Email" />
      <textarea name="message" />
      <button>Envoyer</button>
    </form>
  );
}
