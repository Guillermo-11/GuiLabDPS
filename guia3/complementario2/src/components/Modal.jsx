import React, { useState } from 'react'
import styles from "../app/page.module.css"

const Lenguaje = ({leng, modalOpen, cerrarModal}) => {
    return (
        <div className={styles.modal_container + ' ' + (modalOpen ? styles.modal_visible : styles.modal_hidden)}>
            <div className={styles.modal}>
                <div className={styles.modal_header}>
                    <div className={styles.modal_title_container}>
                        <h1 className={styles.modal_title}>{leng.nombre}</h1>
                        <img className={styles.modal_img} src={leng.url_img} alt={leng.nombre}/>
                        <p className={styles.modal_title_p}>Creado por: {leng.creador} ({leng.year})</p>
                    </div>
                    <button className={styles.modal_close} onClick={() => cerrarModal()}>X</button>
                </div>
                {/* <!--<hr className={styles.barra_division} />--> */}

                <div className={styles.modal_body}>
                    {/* <div className="modal_body_content"> */}
                        <p className={styles.modal_body_p}>Breve Historia: {leng.historia}</p>
                        <p className={styles.modal_body_p}>Su uso actual se centra en: {leng.uso_actual} </p> <br />
                        <p className={styles.modal_body_p}>Su demanda es {leng.demanda_actual} y es de tipado {leng.tipado} </p>
                        <p className={styles.modal_body_p}>Actualemente, su porcentaje de uso es {leng.porcentaje_uso}%</p>
                    {/* </div> */}
                </div>

                <div className={styles.modal_footer}>
                    <button className={styles.modal_footer_button} onClick={() => cerrarModal()}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default Lenguaje