import React from 'react';

const TablaDatos = ({ datos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.ApellidoP}</td>
            <td>{item.ApellidoM}</td>
            <td>{item.Telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDatos;

