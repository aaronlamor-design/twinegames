import styles from "./page.module.css";
import { glob } from 'node:fs/promises';
import { title } from "node:process";
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
          <iframe 
            src={link} 
            className={styles.gameCanvas}
            sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
          />
        </div>
      </main>
  );
}
