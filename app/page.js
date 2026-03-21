import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>COMMBADGE</h1>
        <h3>Ever wanted to see what's going on in those chat apps everyone uses? You probably know some of their names, maybe even some strategies they use, but what if you could make one?</h3>
        <h2>Well, why don't you? </h2>
      </main>
    </div>
  );
}
