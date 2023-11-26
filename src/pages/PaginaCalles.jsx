import React from "react";
import "./PaginaCalles.css";
import Navbar from "../components/cuerpo/Navbar";
import Footer from "../components/cuerpo/Footer";
import YamahaFz150 from "../images/YamahaFz150.jpg";
import YamahaFZ25 from "../images/YamahaFZ25.jpg"
import YamahaMt03 from "../images/YamahaMt03.jpg"
import { useNavigate } from "react-router-dom";

function PaginaCalles() {
  const goPago = useNavigate();
  const goCarrito = (e) => {
    e.preventDefault();
    goPago("/carrito");
      } 
  return (
    <>
      <Navbar />
      <h1 className="container-fluid card-title" >Calle</h1>
      <section>
        <div className="card" id='imagenes' >
          <img src={YamahaFz150} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">YAMAHA FZ 15</h4>
            <p>
              {" "}
              FZN-150 está pensada para quienes quieren recorrer la ciudad con
              la mayor eficiencia, comodidad y libertad posible. Este modelo
              incorpora además tecnología Blue Core para lograr una máxima
              eficiencia del motor, reduciendo de manera importante las
              emisiones de gases y el consumo de combustible, sin dejar de lado
              la agresividad y lo elegante de su diseño{" "}
            </p>
            <h5 className="card-price">$1.000.000</h5>
            <a onClick={goCarrito}>
              <button className="btn btn-primary">ir al carrito</button>
            </a>
          </div>
        </div>
        <div className="card" id='imagenes' >
          <img 
          src={YamahaFZ25} 
          className="card-img-top" 
          alt="Yamaha Fz25" />
          <div className="card-body">
            <h4 className="card-title">YAMAHA FZ 25</h4>
            <p>
              
              La Yamaha FZN-25 es la moto con mejor performance urbana del
              mercado. Tecnología de punta japonesa para superar todos los
              obstáculos de la ciudad actual. Los pilotos de estas motocicletas
              Yamaha vivirán la filosofía del “Handling” de la marca, con una
              conducción intuitiva, podrán girar sin esfuerzo, tomar curvas con
              precisión y con dinámicas propias de la saga FZ.
            </p>
            <h5 className="card-price">$2.000.000</h5>
            <a onClick={goCarrito} >
              <button className="btn btn-primary">ir al carrito</button>
            </a>
          </div>
        </div>
        <div className="card" id='imagenes' >
          <img
            src={YamahaMt03}
            className="card-img-top"
            alt="Yamaha Mt03"
            />
          <div className="card-body">
            <h4 className="card-title">YAMAHA MT 03</h4>
            <p>
              {" "}
              La Yamaha Mt-03 está pensada para quienes quieren recorrer la
              ciudad con la mayor eficiencia, comodidad y libertad posible. Este
              modelo incorpora además tecnología Blue Core para lograr una
              máxima eficiencia del motor, reduciendo de manera importante las
              emisiones de gases y el consumo de combustible, sin dejar de lado
              la agresividad y lo elegante de su diseño{" "}
            </p>
            <h5 className="card-price">$3.000.000</h5>
            <a onClick={goCarrito}>
              <button className="btn btn-primary">ir al carrito</button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PaginaCalles;
