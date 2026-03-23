import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.header}>COMMBADGE</h1>
        <h3>
          Ever wanted to see what's going on in those chat apps everyone uses? You probably know some of their names, maybe even some strategies they use. But what if you could make one?
        </h3>
        <h2>
          Well, why don't you?
        </h2>
        <h3>
          Make a chat app. Anything can fly, from simple text board sites to massive systems with guilds, group chats, and private rooms. Give it a gimmick, give it something you've always wanted. And in the end, get a raspberry pi to host it on and a domain credit.
        </h3>
        
      </main>
    </div>
  );
}
