import React from "react";
import "./PaginaScooters.css";
import Navbar from "../components/cuerpo/Navbar";
import Footer from "../components/cuerpo/Footer";
import YamahaNmax from '../images/YamahaNmax.jpg';
import { useNavigate } from "react-router-dom";

function PaginaScooters() {

  const goPago = useNavigate();
  const goCarrito = (e) => {
    e.preventDefault();
    goPago("/carrito");
      } 

  return (
    <>
    <Navbar/>
      <body>
        <main>
          <h1 class="titulo">Scooters</h1>
          <section>
            <div class="card" style={{width: "500px"}}>
              <img
                src={YamahaNmax}
                class="card-img-top"
                alt="Imagen de moto Yamaha NMAX"
              />
              <div class="card-body">
                <h5 class="card-title">YAMAHA NMAX</h5>
                <p>
                  {" "}
                  Nmax gracias a su sistema Connected te permitirá estar en
                  contacto directo con tu moto en todo momento gracias a la
                  conexión que tiene con el celular del usuario. Su diseño
                  sofisticado, elegante y urbano, tecnología y su amplio
                  maletero de 23 litros harán de NMAX CONNECTED una experiencia
                  única al conducirla.
                </p>
                <h5 class="card-price">$2.000.000</h5>
                <a onClick={goCarrito} >
                  <button class="btn btn-primary">ir al carrito</button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </body>
      <Footer/>
    </>
  );
}

export default PaginaScooters;
