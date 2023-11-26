import React from "react";
import YamahaBolt from "../images/YamahaBolt.jpg";
import YamahaFz150 from "../images/YamahaFz150.jpg";
import YamahaFZ25 from "../images/YamahaFZ25.jpg";
import YamahaMt03 from "../images/YamahaMt03.jpg";
import YamahaNmax from "../images/YamahaNmax.jpg";
import YamahaR15 from "../images/YamahaR15.jpg";
import YamahaR3 from "../images/YamahaR3.jpg";
import YamahaR7 from "../images/YamahaR7.jpg";
import YamahaTracer9 from "../images/YamahaTracer9.jpg";
import Navbar from "../components/cuerpo/Navbar";
import Footer from "../components/cuerpo/Footer";
import './galeria.css'


function Galeria() {
    
  return (
    <>
      <Navbar />
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
  </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={YamahaBolt}
              className="d-block w-100"
              data-bs-interval="2000"
              alt="Yamaha Bolt 850"
            />
            <h1>Yamaha Bolt 850</h1>
          </div>
          <div className="carousel-item">
            <img
              src={YamahaFz150}
              className="d-block w-100"
              data-bs-interval="2000"
              alt="Yamaha Fz150"
            />
            <h1>Yamaha Fz150</h1>
          </div>
          <div className="carousel-item">
            <img src={YamahaFZ25} 
            className="d-block w-100" 
            data-bs-interval="2000"
            alt="Yamaha Fz25" />
            <h1>Yamaha Fz25</h1>
          </div>
          <div className="carousel-item">
            <img src={YamahaMt03} 
            className="d-block w-100" 
            data-bs-interval="2000"
            alt="Yamaha MT03" />
            <h1>Yamaha MT03</h1>
          </div>
          <div className="carousel-item">
            <img src={YamahaNmax} 
            className="d-block w-100" 
            data-bs-interval="2000"
            alt="Yamaha Nmax" />
            <h1>Yamaha Nmax</h1>
          </div>
          <div className="carousel-item">
            <img src={YamahaR15} 
            className="d-block w-100" 
            data-bs-interval="2000"
            alt="Yamaha R15" />
            <h1>Yamaha R15</h1>
          </div>
          <div className="carousel-item">
            <img src={YamahaR3} 
            className="d-block w-100" 
            data-bs-interval="2000"
            alt="Yamaha R3" />
            <h1>Yamaha R3</h1>
          </div>
          <div className="carousel-item">
            <img src={YamahaR7} 
            className="d-block w-100" 
            data-bs-interval="2000"
            alt="Yamaha R7"/>
            <h1>Yamaha R7</h1>
          </div>
          <div className="carousel-item">
            <img
              src={YamahaTracer9}
              className="d-block w-100"
              data-bs-interval="2000"
              alt="Yamaha Tracer 9"/>
             <h1>Yamaha Tracer9</h1> 
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div>
      <Footer />
    </>
  );
}

export default Galeria;
