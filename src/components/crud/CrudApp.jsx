import React, { useState } from "react";
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';

const BBDD = [
  { id: 1, codigo: 'Yamaha R15', seccion: 'Motos deportivas' },
  { id: 2, codigo: 'Yamaha R3', seccion: 'Motos deportivas' },
  { id: 3, codigo: 'Yamaha R7', seccion: 'Motos deportivas' },
  { id: 4, codigo: 'Yamaha Fz15', seccion: 'Motos de calle' },
  { id: 5, codigo: 'Yamaha Fz25', seccion: 'Motos de calle' },
  { id: 6, codigo: 'Yamaha Mt03', seccion: 'Motos de calle' },
  { id: 7, codigo: 'Yamaha Nmax', seccion: 'Motos Scooters' },
  { id: 8, codigo: 'Yamaha Tracer9', seccion: 'Motos TodoTerreno' }
];

export const CrudApp = () => {
  const [secciones, setSecciones] = useState(BBDD);
  const [editData, setEditData] = useState(null);

  const addSeccion = (seccion) => {
    setSecciones([
      ...secciones,
      seccion
    ]);
  };

  const editSeccion = (seccion) => {
    const newSecciones = secciones.map(sec => sec.id === seccion.id ? seccion : sec);
    setSecciones(newSecciones);
    setEditData(null);
  };

  const handleDelete = (id) => {
    const newSecciones = secciones.filter(seccion => seccion.id !== id);
    setSecciones(newSecciones);
  };

  return (
    <>
      <CrudForm addSeccion={addSeccion} editSeccion={editSeccion} editData={editData} />
      <CrudTable secciones={secciones} setEditData={setEditData} handleDelete={handleDelete} />
    </>
  );
};
