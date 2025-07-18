import styles from "./page.module.css";
import Carrito from "@/components/Carrito";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <h1>
            Completa tu Lista de Compra:
          </h1>
          <Carrito></Carrito>
        </div>
      </div>
    </main>
  );
}