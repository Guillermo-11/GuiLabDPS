"use client"
import React, { useState } from 'react';
import Modal from './Modal';
import Tarjeta from './Tarjeta';
import styles from "../app/page.module.css";
import Lenguajes from './lenguajes.json';

const Principal = () => {
    const [lengSelect, setLengSelect] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const abrirModal = (index) => () => {
        setLengSelect(Lenguajes[index]);
        setModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    const cerrarModal = () => () => {
        setLengSelect({});
        setModalOpen(false);
        document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
    }

    return (
        <>
            <div className={styles.cards_container}>
                {
                    Lenguajes.map((lenguaje, index) => (
                        <Tarjeta key={index} lang={lenguaje} abrirModal={abrirModal(index)} />
                    ))
                }
            </div>
            <Modal leng={lengSelect} modalOpen={modalOpen} cerrarModal={cerrarModal()}/>
        </>
    )
}

export default Principal;