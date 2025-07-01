//Ejercicio 3

"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + (parseFloat(numero2));
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
  }

  const dividir = () => {
    if (parseFloat(numero2) === 0) {
      setResultado("No se puede dividir por cero.");
    } else {
      const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadoDivision}`);
    }
  }

  const potenciar = () => {
    const resultadoPotencia = parseFloat(numero1) ** parseFloat(numero2);
    setResultado(`Resultado de la potencia: ${resultadoPotencia}`);
  }

  const raiz = () => {
    const resultadoRaiz = `El resultado de la raíz cuadrada del número 1 es: ${Math.sqrt(parseFloat(numero1))} y el número 2 es: ${Math.sqrt(parseFloat(numero2))}.`;
    setResultado(resultadoRaiz);
  }

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <label className={styles.text}>Número 1:</label>
        <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
      
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potenciar}>Potencia</button>
          <button className={styles.button} onClick={raiz}>Raiz Cuadrada</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}