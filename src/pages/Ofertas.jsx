import React from 'react'
import Navbar from '../components/cuerpo/Navbar';
import Footer from '../components/cuerpo/Footer';

function Ofertas() {
    
  return (
    <>
    <Navbar/>
<main className="main">
      <h2>Motos en oferta !! </h2>
        <section>
          <article className="Titulo">
            <table>
              <tbody>
                <tr>
                  <td>
                    <form onSubmit={(event) => {
                      event.preventDefault();
                      onFormSubmit();
                    }} autoComplete="off">
                      <div className="container text-center">
                        <div className="row">
                          <div>
                            <label htmlFor="producto">Producto</label><br />
                            <select id="producto" className="form-select">
                              <option value="YAMAHA R15,2000000">YAMAHA R15</option>
                              <option value="YAMAHA R3,3000000">YAMAHA R3</option>
                              <option value="YAMAHA R7,4000000">YAMAHA R7</option>
                                                          </select>
                            <label className="validation-error hide" id="productoValidationError">
                              Elige la moto que deseas agregar
                            </label>
                            <br />
                          </div>

                          <div className="col">
                            <label htmlFor="cantidad">Cantidad</label><br />
                            <input className="form-control" type="number" name="cantidad" id="cantidad" min="1" />
                            <label className="validation-error hide" id="cantidadValidationError">
                              Elige la cantidad a comprar
                            </label>
                          </div>
                          <div className="form-action-buttons"><br />
                            <input className="btn btn-primary" id="agregar" type="submit" value="Agregar" /><br /><br />
                          </div>
                        </div>
                      </div>
                    </form><br></br><br></br>
                    <table className="list" id="stockList">
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table><br />

            <input className="btn btn-primary" id="mostrarBoleta" type="submit" onClick={() => {
              document.getElementById('voucher').style.display = 'block';
              pagar();
            }} value="Mostrar boleta" /><br /><br />
          </article>

          <div className="card" id="voucher">
            <div className="card-body">
              <h5 className="card-title">Boleta</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Detalle de compra</h6>
              <ul id="lista"></ul>
              <label className="centrar">Valor Neto: </label>
              <output type="text" id="valorNeto"></output><br />
              <label className="centrar">I.V.A.: </label>
              <output type="text" id="iva"></output><br />
              <label className="centrar">Valor total: </label>
              <output type="text" id="valorTotal"></output>
              <br /><br /><br /><br /><br /><br />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Ofertas