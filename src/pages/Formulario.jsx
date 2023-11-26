// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   // Otros campos de registro, como nombre, correo electrónico, etc., pueden agregarse aquí.

//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // Aquí puedes agregar lógica para registrar al usuario en tu sistema.
//     // Esto puede incluir enviar una solicitud al servidor Node.js para crear un nuevo usuario en la base de datos.
//     // Después de un registro exitoso, puedes redirigir al usuario a la página de inicio de sesión.
//     alert("Registro exitoso. Redirigiendo al inicio de sesión.");
//     navigate("/login"); // Redirige al usuario a la página de inicio de sesión.
//   };

//   return (
//     <div className="register-container">
//       <h2>Registrarse</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Nombre de usuario"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         {/* Otros campos de registro aquí */}
//         <button type="submit">Registrarse</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
