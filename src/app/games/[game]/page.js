import styles from "./page.module.css";
import { glob } from 'node:fs/promises';
import path from 'path';
 
export default async function Home({ params }) {
  const { game } = await params;
  let link = "";
  const publicDir = path.join(process.cwd(), 'public');
  const gameDir = path.join(publicDir, 'games')
  const files = glob(`${game}/*.html`, { cwd: gameDir })
  for await (const entry of files) {
    console.log(entry)
    const webPath = entry.replace(/\\/g, '/');
    link=`/games/${webPath}`;
    break;
  }
  return (
      <main className={styles.page}>
        <div className={styles.content}>
          <iframe src={link} className={styles.gameview}></iframe>
        </div>
      </main>
  );
}
