import React, { useEffect, useState } from 'react';

export const CrudForm = ({ addSeccion, editSeccion, editData }) => {
  useEffect(() => {
    if (editData !== null) {
      setFormData(editData);
    } else {
      setFormData({
        codigo: '',
        seccion: '',
        id: null,
      });
    }
  }, [editData]);

  const [formData, setFormData] = useState({
    codigo: '',
    seccion: '',
    id: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.codigo !== '' && formData.seccion !== '') {
      if (editData !== null) {
        editSeccion(formData);
      } else {
        formData.id = Date.now();
        addSeccion(formData);
        setFormData({
          codigo: '',
          seccion: '',
          id: null,
        });
      }
    } else {
      alert('Agregue Codigo y Seccion');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='hola'>
    <h1>Agregar Motos</h1>
    <div className="d-flex justify-content-center align-items-center">
      <form className="m-5 flex-row" onSubmit={handleSubmit}>
        <label htmlFor="codigo">Producto:</label>
        <input type="text" name="codigo" onChange={handleChange} value={formData.codigo} />
        <label htmlFor="seccion">Tipo:</label>
        <input type="text" name="seccion" onChange={handleChange} value={formData.seccion} />
        <input type="submit" value="Enviar" className="btn btn-info mx-1" />
        <input type="reset" value="Cancelar" className="btn btn-danger mx-1" />
      </form>
      </div>
    </div>
  );
};
