import React, { useState } from 'react'
import styles from "../app/page.module.css"

const Compra = ({Compra, index, deleteCompra}) => {
    if (!Compra || Object.keys(Compra).length === 0)
        return null;
    const total = parseFloat(Compra.cantidad) * parseFloat(Compra.precio);
    return (
        <>
            <tr className={styles.filas}>
                <td className={styles.celdas}>
                    <p className={styles.texto}>{Compra.producto}</p>
                </td>
                <td className={styles.celdas}>
                    <p className={styles.texto}>{Compra.marca}</p>
                </td>
                <td className={styles.celdas}>
                    <p className={styles.texto}>{Compra.cantidad}</p>
                </td>
                <td className={styles.celdas}>
                    <p className={styles.texto}>${Compra.precio}</p>
                </td>
                <td className={styles.celdas}>
                    <button className={styles.btn_delete} onClick={() => deleteCompra(index)}>X</button>
                </td>
            </tr>
            {/* <div className={styles.list}>
                <h3 className='Titulo3'>{Compra}</h3>
                <button className={styles.btn_delete} onClick={()=>deleteCompra(index)}>X</button>
            </div> */}
        </>
    )
}

export default Compra