import styles from "./page.module.css";
import Link from "next/link";
import { glob } from 'node:fs/promises';
import path from 'path';

export default async function Home() {
  const games = []
  const publicDir = path.join(process.cwd(), 'public');
  const gameDir = path.join(publicDir, 'games')
  for await (const entry of glob(`*/`, { cwd: gameDir })) {
    for await (const url of glob(`${entry}/*.html`, { cwd: gameDir })) {
        const removeFSlashes = url.replace(/^.*\\/, '');
        const removeUnderscores = removeFSlashes.replace(/_/g, ' ')
        const replaceDashes = removeUnderscores.replace(/-/g, ' ')
        const removeDotHtml = replaceDashes.replace('.html', '')
        games.push({id: entry, desc: removeDotHtml})
        break;
    }
  }
  return (
      <main className={styles.page}>
          <h1 className={styles.title}>Games Availiable:</h1>
          <ul className={styles.gameList}>
            {games.map((game) => (
              <li key={game.id}>
                <div className={styles.listItem}>
                   <Link href={`/games/${game.id}`}>{game.desc}</Link>
                </div>
              </li>
            ))}
          </ul>
      </main>
  );
}
