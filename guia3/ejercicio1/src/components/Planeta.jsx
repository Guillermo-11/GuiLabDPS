import React, { useState } from 'react'
import styles from "../app/page.module.css"

const Planeta = ({ planeta, funcion, verDetalle }) => {
  return (
    <>
      {!verDetalle ? (
        <>
          <h2 className={styles.planet_name}>{planeta.nombre}</h2>
          <img
            src={planeta.url}
            alt={planeta.nombre}
            className={styles.slider_img}
            onClick={funcion}
          />
        </>
      ) : (
        <div className={styles.ver_detalle}>
          <h2>{planeta.nombre}</h2>
          <img
            src={planeta.url}
            alt={planeta.nombre}
            className={styles.slider_img}
          />
          <button onClick={funcion}>Salir</button>
        </div>
      )}
    </>
  );
};

export default Planeta;