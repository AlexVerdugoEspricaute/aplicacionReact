import { createHashRouter } from "react-router-dom";
import  Login  from "../components/Login";
import  Home  from "../components/Home";
import AgregarProducto from "../pages/AgregarProducto";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Carrito from "../pages/Carrito";
import PaginaDeportivas from "../pages/PaginaDeportivas";
import PaginaScooters from "../pages/PaginaScooters";
import PaginaTerreno from "../pages/PaginaTerreno";
import PaginaCalles from "../pages/PaginaCalles";
import Ofertas from "../pages/Ofertas";

const router = createHashRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/agregar-producto",
    element: <AgregarProducto />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path: "/galeria",
    element: <Galeria />,
  },
  {
    path: "/calles",
    element: <PaginaCalles />,
  },
  {
    path: "/deportivas",
    element: <PaginaDeportivas />,
  },
  {
    path: "/scooters",
    element: <PaginaScooters />,
  },
  {
    path: "/terrenos",
    element: <PaginaTerreno />,
  },
  {
    path: "/ofertas",
    element: <Ofertas />,
  },

]);

export default router;
