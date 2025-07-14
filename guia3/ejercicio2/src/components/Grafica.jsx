import React, { useState } from 'react';
import styles from "../app/page.module.css";

const Grafica = ({datos}) => {
    const maxValor = Math.max(...datos.map((d) => d.valor)) || 1; // evita división por cero

  return (
    <div className={styles.grafica}>
      {datos.map((dato, i) => {
        const alturaPorcentaje = (dato.valor / maxValor) * 100;

        return (
          <div key={i} className={styles.barra_contenedor}>
            <div
              className={styles.barra}
              style={{ height: `${alturaPorcentaje}%` }}
              title={`$${dato.valor}`}
            >
              <span className={styles.valor}>${dato.valor}</span>
            </div>
            <span className={styles.mes}>{dato.mes.slice(0, 3)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Grafica;