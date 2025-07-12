import styles from "./page.module.css";
import Principal from "@/components/Principal";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lenguajes de Programación</h1>
      <Principal />
    </main>
  )
}
