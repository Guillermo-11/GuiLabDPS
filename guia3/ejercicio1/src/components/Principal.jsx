"use client"
import React, { useState } from 'react';
import styles from "../app/page.module.css";
import Planeta from "./Planeta";
import Tab from './Tab';
import Planetas from './Planetas.json';

let autoSlideTimer = null;

const Principal = () => {
  const [index, setIndex] = useState(0);
  const [pausa, setPausa] = useState(false);
  const [verDetalles, setverDetalles] = useState(false);
  const [tabActiva, setTabActiva] = useState("sistema");

  if (!pausa && !verDetalles) {
    clearTimeout(autoSlideTimer);
    autoSlideTimer = setTimeout(() => {
      setIndex(prev => (prev + 1) % Planetas.length);
    }, 3000);
  }

  const siguiente = () => {
    clearTimeout(autoSlideTimer);
    setIndex((index + 1) % Planetas.length);
    setPausa(true);
    setverDetalles(false);
  };

  const anterior = () => {
    clearTimeout(autoSlideTimer);
    setIndex((index - 1 + Planetas.length) % Planetas.length);
    setPausa(true);
    setverDetalles(false);
  };

  const verPlaneta = () => {
    clearTimeout(autoSlideTimer);
    setverDetalles(true);
    setPausa(true);
    setTabActiva(Planetas[index].nombre);
  };

  const salirDetalles = () => {
    setverDetalles(false);
    setPausa(false);
    setTabActiva("sistema");
  };

  return (
    <div className={styles.slider_container}>
      <h1>El Sistema Solar</h1>

      <div className={styles.slider_main_content}>
        <div className={styles.slider_content}>
          {!verDetalles ? (
            <>
              <Planeta planeta={Planetas[index]} funcion={verPlaneta} verDetalle={false} />
              <div className={styles.botones}>
                <button onClick={anterior}>← Anterior</button>
                <button onClick={siguiente}>Siguiente →</button>
              </div>
            </>
          ) : (
            <Planeta planeta={Planetas[index]} funcion={salirDetalles} verDetalle={true} />
          )}
        </div>

        <div className={styles.info_panel}>
          <div className={styles.tabs}>
            <button
              className={tabActiva === "sistema" ? styles.tab_activa : ""}
              onClick={() => setTabActiva("sistema")}
            >
              Sistema Solar
            </button>
            <button
              className={tabActiva === Planetas[index].nombre ? styles.tab_activa : ""}
              onClick={() => setTabActiva(Planetas[index].nombre)}
            >
              {verDetalles ? Planetas[index].nombre : ""}
            </button>
          </div>

          {tabActiva === "sistema" ? (
            <SistemaSolarInfo />
          ) : (
            <Tab planeta={Planetas[index]} />
          )}
        </div>
      </div>
    </div>
  );
};

const SistemaSolarInfo = () => (
  <div className={styles.tab_content}>
    <h3>Información del Sistema Solar</h3>
    <p>
      El sistema solar está compuesto por el Sol y todos los objetos que orbitan a su alrededor:
      los 8 planetas principales, sus lunas, planetas enanos, asteroides y cometas.
    </p>
    <ul>
      <li>El Sol contiene el 99.86% de toda la masa del sistema solar.</li>
      <li>
        Los planetas se dividen en rocosos (Mercurio, Venus, Tierra, Marte) y gaseosos (Júpiter,
        Saturno, Urano, Neptuno).
      </li>
      <li>Júpiter es el planeta más grande; Mercurio el más pequeño.</li>
      <li>La luz del Sol tarda más de 4 horas en llegar a Neptuno.</li>
    </ul>
  </div>
);

export default Principal;