import React from "react";
import LogoYamaha from "../../images/logos/LogoYamaha.png";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, setUser } = useAuthContext();
  const goTo = useNavigate();

  const logout = () => {
    setUser(null);
    goTo("/");
  };
  const goAddProduct = (e) => {
    e.preventDefault();
    goTo("/agregar-producto");
  };
  const goContacto = (e) => {
e.preventDefault();
goTo("/contacto");
  };

  const goGaleria = (e) => {
    e.preventDefault();
    goTo("/galeria");
      }
  const goCarrito = (e) => {
    e.preventDefault();
    goTo("/carrito");
      }
  const goOfertas = (e) => {
    e.preventDefault();
    goTo("/ofertas");
      }
  
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      id="barraSuperior"
    >
      <a >
        <img
          src={LogoYamaha}
          aria-current="page"
          alt="home"
          width="50"
          height="50"
          onClick={() => goTo("/")}
        />
      </a>
      <div className="container-fluid">
        <a to="#" className="navbar-brand" onClick={() => goTo("/")}>
          Verdugo Import
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" onClick={goGaleria}>
              Galeria
            </a>
            <a className="nav-link" onClick={goContacto}>
              Contacto
            </a>
            <a className="nav-link" onClick={goCarrito}>
              Carrito
            </a>
            <a className="nav-link" onClick={goOfertas}>
              Ofertas
            </a>
            {user ? (
              <>
                <a className="nav-link" onClick={goAddProduct}>
                  Agregar producto
                </a>
                <a onClick={logout} id="cerrar" className="btn btn-danger">
                  Cerrar sesión
                </a>
              </>
            ) : (
              <a
                id="cerrarLogin" className="btn btn-danger"  onClick={() => goTo("/login")}
              >
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
