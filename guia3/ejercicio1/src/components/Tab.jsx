import React, { useState } from 'react'
import styles from "../app/page.module.css"

const Tab = ({planeta, tipo, datos}) => {
    return(
        <div className={styles.tab_content}>
            <h3>Información del Planeta {planeta.nombre}</h3>
            <p>
                La composición del planeta {planeta.nombre} es: {planeta.composicion}. Y algunos datos importantes de dicho planeta son: <br />
            </p>
            <ul>
                <li>Masa: {planeta.masa}.</li>
                <li>Diámetro: {planeta.diametro}.</li>
                <li>Distancia al Sol: {planeta.distancia}.</li>
                <li>Temperatura Media: {planeta.temperatura_media}.</li>
                <li>Duración de un Día: {planeta.duracion_dia}.</li>
                <li>Duración de un Año: {planeta.duracion_year}.</li>
                <li>Lunas: {planeta.lunas}.</li>
            </ul>
            <p>
                {planeta.dato_curioso}
            </p>
        </div>
    )
}

export default Tab