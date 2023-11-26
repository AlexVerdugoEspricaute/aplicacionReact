import React from "react";
import "./crud.css";

export const CrudTable = ({ secciones, setEditData, handleDelete }) => {
  return (
    <>
      <table className="table w-50">
        <thead>
          <tr>
            <th>Num</th>
            <th>Codigo</th>
            <th>Seccion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {secciones.length === 0 ? (
            <tr>
              <td colSpan="4">No hay secciones</td>
            </tr>
          ) : (
            secciones.map((seccion, index) => {
              return (
                <tr key={index}>
                  <td>{seccion.id}</td>
                  <td>{seccion.codigo}</td>
                  <td>{seccion.seccion}</td>
                  <td>
                    <button
                      className="btn btn-info mx-1"
                      onClick={() => setEditData(seccion)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleDelete(seccion.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};
