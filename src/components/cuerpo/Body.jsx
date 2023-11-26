import React from "react";
import YamahaR7 from "../../images/YamahaR7.jpg";
import YamahaMt03 from "../../images/YamahaMt03.jpg";
import YamahaTracer9 from "../../images/YamahaTracer9.jpg";
import YamahaNmax from "../../images/YamahaNmax.jpg";
import { useNavigate } from "react-router-dom";
import "./body.css"

function Body() {
  const goPaginas = useNavigate();

  const goDeportivas = (e) => {
    e.preventDefault();
    goPaginas("/deportivas");
      }

  const goCalles = (e) => {
    e.preventDefault();
    goPaginas("/calles");
      }     
  const goScooters = (e) => {
    e.preventDefault();
    goPaginas("/scooters");
      }      
  const goTerrenos = (e) => {
    e.preventDefault();
    goPaginas("/terrenos");
      }    
      
  return (
    <>
      <nav className="card">
        <p className="container-fluid">
          Nos dedicamos 100% a la venta de motocicletas de la marca Yamaha en 4
          tipos distintos para elegir.
        </p>
      </nav>
      <section className="card-container" style={{ display: "flex" }}>
        <div className="card" style={{ width: "600px" }}>
          <img
            src={YamahaMt03}
            className="card-img-top"
            alt="Imagen moto Yamaha Fz150"            
          />
          <div className="card-body">
            <h5 className="card-title">Calle</h5>
            <a onClick={goCalles} className="btn btn-primary">
              Ver mas
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "600px" }}>
          <img
            src={YamahaR7}
            className="card-img-top"
            alt="Imagen moto Yamaha R7"
          />
          <div className="card-body">
            <h5 className="card-title">Deportivas</h5>
            <a onClick={goDeportivas} className="btn btn-primary">
              Ver mas
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "600px" }}>
          <img src={YamahaTracer9} className="card-img-top"  alt="Imagen moto Yamaha Tracer 9"/>
          <div className="card-body">
            <h5 className="card-title">Todo Terreno</h5>
            <a onClick={goTerrenos} className="btn btn-primary">
              Ver mas
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "600px" }}>
          <img
            src={YamahaNmax}
            className="card-img-top"
            alt="Imagen moto Yamaha Nmax"
          />
          <div className="card-body">
            <h5 className="card-title">Scooter</h5>
            <a onClick={goScooters} className="btn btn-primary">
              Ver mas
            </a>
          </div>
        </div>
      </section>
      <br/><br/>
      <br/><br/>

    </>
  );
}

export default Body;
