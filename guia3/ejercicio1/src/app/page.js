import styles from "./page.module.css";
import Principal from "@/components/Principal";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.stars}></div>
      <Principal />
    </main>
  );
}