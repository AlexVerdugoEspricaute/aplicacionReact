import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Estado para recordar al usuario
  const { setUser } = useAuthContext();

  const goTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setUser({ user: { username, password } });
      // Aquí puedes agregar lógica adicional para recordar al usuario si `rememberMe` está marcado.
      if (rememberMe) {
        // Guardar la información de sesión en una cookie o localStorage
        // Esto es solo un ejemplo, asegúrate de manejarlo de manera segura en tu aplicación.
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ username, password })
        );
      } else {
        // Si `rememberMe` no está marcado, borra cualquier información de sesión almacenada previamente.
        localStorage.removeItem("loggedInUser");
      }
      goTo("/");
      return;
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  };

  // Función para manejar el cambio de estado de "Recordar usuario"
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <>
      <div className="login-container">
        <div className="row g-3">
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              className="form-control"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            {/* Checkbox para "Recordar usuario" */}
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Mantener la sesión iniciada
            </label>

            <br />
            <div class="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button type="" className="btn btn-danger">
                Registrate
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
