"use client"
import React, { useState } from 'react';
import styles from "../app/page.module.css";
import Grafica from "./Grafica";
import Ventas from "./Ventas.json";

const Principal = () => {
  const [year, setYear] = useState(2023);

  const handleChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  const ventasYear = Ventas.find((v) => v.year === year);

  return (
    <div>
      <h1 className={styles.title}>Gráfica de Ventas Mensuales</h1>

      <div className={styles.container}>
        <label className={styles.label}>Seleccionar Año: </label>
        <select value={year} onChange={handleChange} className={styles.select}>
          {Ventas.map((registro) => (
            <option key={registro.year} value={registro.year}>
              {registro.year}
            </option>
          ))}
        </select>
        <Grafica datos={ventasYear.meses} />
      </div>
    </div>
  );
};

export default Principal;