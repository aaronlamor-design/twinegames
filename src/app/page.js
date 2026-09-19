import styles from "./page.module.css";
import Link from "next/link";
import { glob } from 'node:fs/promises';
import path from 'path';
import NavBar from "@/components/NavBar";

export default async function Home() {
  const games = []
  const publicDir = path.join(process.cwd(), 'public');
  for await (const entry of glob(`*/`, { cwd: publicDir })) {
    for await (const url of glob(`${entry}/*.html`, { cwd: publicDir })) {
      const removeFolder = url.replace(/^.*\\/, '');
      const removeUnderscores = removeFolder.replace(/_/g, ' ')
      const desc = removeUnderscores.replace('.html', '')
      games.push({id: entry, desc: desc, file:url})
      break;
    }
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.content}>
          <h1 className={styles.title}>Games Availiable:</h1>
          <ul className={styles.gameList}>
            {games.map((game) => (
              <li key={game.id}>
                <div class={styles.listItem}>
                  <Link href={`/games/${game.id}`}>{game.desc}</Link>
                  <Link href={game.file} download={game.desc} class={styles.download}>download</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
