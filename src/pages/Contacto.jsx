import React from 'react'
import Navbar from '../components/cuerpo/Navbar'
import Footer from '../components/cuerpo/Footer'
import './contacto.css'

function Contacto() {
  return (
   <>
   <Navbar/>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Nombre:
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Ingrese su nombre..."
      />
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        E-mail:
      </label>
      <input
        type="email "
        className="form-control"
        id="exampleFormControlInput2"
        placeholder="Ingrese su E-mail..."
      />
      <label htmlFor="exampleFormControlTextarea2" className="form-label">
        Telefono:
      </label>
      <input
        type="tel"
        className="form-control"
        id="exampleFormControlInput3"
        placeholder="Ingrese su Telefono..."
      />
      <label htmlFor="exampleFormControlTextarea3" className="form-label">
        Direccion:
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput4"
        placeholder="Ingrese su direccion..."
      />
      <label htmlFor="exampleDataList" className="form-label">
        Comuna:
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleDataList"
        placeholder="Ingrese su comuna..."
        list="datalistOptions"
      />
      <label 
        htmlFor="exampleFormControlTextarea5" 
        className="form-label">
        Producto:
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput6"
        placeholder="Ingrese su producto."
      />
      <label 
        htmlFor="exampleFormControlTextarea6" 
        className="form-label">
        Numero de boleta:
      </label>
      <input
        type="number"
        className="form-control"
        id="exampleFormControlInput7"
        placeholder="Ingrese su numero de boleta."
      />
      <label 
        htmlFor="exampleFormControlTextarea7" 
        className="form-label">
        Por qué medio compró:
      </label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Seleccione una opcion</option>
        <option value="1">Tienda</option>
        <option value="2">Pagina</option>                          
      </select>
      <label 
        htmlFor="exampleFormControlTextarea8" 
        className="form-label">
        ¿Desea cambio o devolución?
      </label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Seleccione una opcion</option>
        <option value="1">Cambio</option>
        <option value="2">Devolucion</option>                          
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea9" className="form-label">
        Comentario:
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea9"
        placeholder="Ingrese su Comentario."
        rows="3"
      ></textarea>
    </div>

    <div className="mb-3">
      <button type="button" className="btn btn-danger">
        Enviar
      </button>
    </div><br/><br/><br/><br/>
    <Footer/>
  </>
  )
}

export default Contacto