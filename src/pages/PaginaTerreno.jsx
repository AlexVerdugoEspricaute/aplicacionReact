import React from "react";
import "./PaginaTerreno.css";
import YamahaTracer9 from "../images/YamahaTracer9.jpg"
import Navbar from "../components/cuerpo/Navbar";
import Footer from "../components/cuerpo/Footer";
import { useNavigate } from "react-router-dom";

function PaginaTerreno() {
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
          <h1 class="titulo">Todo Terreno</h1>
          <section style={{display: "flex"}}>
            <div class="card" style={{width: "500px"}}>
              <img
                src={YamahaTracer9}
                class="card-img-top"
                alt="Imagen de moto Yamaha Tracer 9"
              />
              <div class="card-body">
                <h5 class="card-title">YAMAHA TRACER 9</h5>
                <p>
                  Esta moto se ha diseñado para ofrecerte una vía de escape de
                  la rutina diaria. Y gracias a su depósito de 18 litros, esta
                  Sport Tourer está hecha para llegar muy lejos. Decídete por la
                  Tracer 900. Y deja que se te acelere el pulso. El nuevo diseño
                  de paneles del chasis de alta calidad proporciona una
                  apariencia más refinada, mientras que la mejora de la
                  ergonomía y el parabrisas regulable de mayor tamaño garantiza
                  un mayor confort en la conducción.
                </p>
                <h5 class="card-price">$5.000.000</h5>
                <a onClick={goCarrito}>
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

export default PaginaTerreno;
