import React from "react";
import Navbar from "../components/cuerpo/Navbar";
import Footer from "../components/cuerpo/Footer";
import YamahaR15 from "../images/YamahaR15.jpg";
import YamahaR3 from "../images/YamahaR3.jpg";
import YamahaR7 from "../images/YamahaR7.jpg";
import Carrito from "./Carrito"
import { useNavigate } from "react-router-dom";

function PaginaDeportivas() {
  const goPago = useNavigate();
  const goCarrito = (e) => {
    e.preventDefault();
    goPago("/carrito");
      } 
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="titulo">Deportivas</h1>
        <section style={{ display: "flex" }}>
          <div className="card" style={{width: "30%"}}>
            <img
              src={YamahaR15}
              className="card-img-top"
              alt="Imagen moto Yamaha R15"
            />
            <div className="card-body">
              <p>
               
                New R15 V4 es la nueva integrante de la familia Superdeportiva
                R-World de Yamaha, convirtiéndola en la más avanzada de su
                segmento por sus elementos de equipamiento, seguridad y
                tecnología que posee. Posee sistema Y-Connect te permitirá estar
                en contacto directo con tu New R15 V4 en todo momento gracias a
                la conexión que tiene con el celular del usuario.
              </p>
              <div className="product">
                <h5 className="card-title">YAMAHA R15 v4</h5>
                <h5 className="card-price">$2.000.000</h5>
                <a onClick={goCarrito}>
                  <button className="btn btn-primary">ir al carrito</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "30%" }}>
            <img
              src={YamahaR3}
              className="card-img-top"
              alt="Imagen moto Yamaha R3"
            />
            <div className="card-body">
              <p>
                
                Esta superdeportiva ligera presenta una estética completamente
                renovada de inspiración MotoGP® que la convierte en la 300 más
                radical tanto en las calles como en circuito. Su nueva
                carrocería estilizada recuerda a la máquina YZR-M1 MotoGP® de
                Yamaha, mientras que la estética agresiva de su doble faro LED
                destaca la más pura esencia de la serie R. La nueva horquilla
                invertida de 37 mm de altas especificaciones te proporciona una
                mejor sensación y respuesta en cuanto a suspensión, mientras que
                el depósito de combustible más bajo y la posición revisada del
                manillar mejoran la ergonomía del conductor para ofrecerte mayor
                confort y control. Escucha la llamada y adéntrate en el Mundo R.
              </p>
              <h5 className="card-title">YAMAHA R3 v1</h5>
              <h5 className="card-price">$3.000.000</h5>
              <a href="../html/carrito.html">
                <button onClick={goCarrito} className="btn btn-primary">
                  ir al carrito
                </button>
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "30%" }}>
            <img
              src={YamahaR7}
              className="card-img-top"
              alt="Imagen moto Yamaha R7"
            />
            <div className="card-body">
              <h5 className="card-title">YAMAHA R7</h5>
              <p>
                {" "}
                Una superdeportiva de nueva generación con el estilo legendario
                de Yamaha que combina un avanzado motor CP2 con un chasis
                ultradelgado y ligero para proporcionar un rendimiento de torque
                tanto en la pista como en la calle. La nueva YZF - R7 está
                destinada a aquellos que buscan un diseño puramente Supersport
                con un excitante rendimiento para su día a día.{" "}
              </p>
              <h5 className="card-title">YAMAHA R7 v1</h5>
              <h5 className="card-price">$4.000.000</h5>
              <a href="../html/carrito.html">
                <button onClick={goCarrito} className="btn btn-primary">
                  ir al carrito
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PaginaDeportivas;
