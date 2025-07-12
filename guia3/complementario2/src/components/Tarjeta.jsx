import React, { useState } from 'react'
import styles from "../app/page.module.css"

const Tarjeta = ({lang, index, abrirModal}) => {
    return (
        <>
            <div className={styles.card} onClick={() => abrirModal(index)}>
                <h3 className={styles.card_title}>{lang.nombre}</h3>
                <img className={styles.card_img} src={lang.url_img} alt={lang.nombre}/>
            </div>
        </>
    )
}

export default Tarjeta;