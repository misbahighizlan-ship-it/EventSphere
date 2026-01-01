/*export default function Login() {
  const login = (e) => {
    e.preventDefault();

    if (
      e.target.user.value === import.meta.env.VITE_ADMIN_USER &&
      e.target.pass.value === import.meta.env.VITE_ADMIN_PASS
    ) {
      localStorage.setItem("admin", true);
      window.location.href = "/admin/dashboard";
    }
  };

  return (
    <form onSubmit={login}>
      <input name="user" />
      <input name="pass" type="password" />
      <button>Login</button>
    </form>
  );
}
*/