
import "./Login.css";

export default function Login() {
  const login = (e) => {
    e.preventDefault();

    if (
      e.target.user.value === import.meta.env.VITE_ADMIN_USER &&
      e.target.pass.value === import.meta.env.VITE_ADMIN_PASS
    ) {
      localStorage.setItem("admin", "true");
      window.location.href = "/admin/dashboard";
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={login}>
        <h2>Admin Login</h2>

        <input type="text" name="user" placeholder="Username" required />
        <input type="password" name="pass" placeholder="Password" required />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
