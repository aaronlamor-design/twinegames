import styles from "./page.module.css";
import { glob } from 'node:fs/promises';
import path from 'path';
import Link from "next/link";
import Footer from "@/components/footer";
 
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
        <nav className={styles.nav}>
          <ul id="navList">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/games">Games</Link></li>
          </ul>
        </nav>
        <div className={styles.content}>
          <iframe 
            src={link} 
            className={styles.gameCanvas}
            sandbox="allow-scripts allow-same-origin allow-forms allow-downloads"
          />
        </div>
        <footer className={styles.footer}>
            <p>Learn to code your own webpage at <Link href="https://scrimba.com/?via=u42d37b8">Scrimba</Link></p>
            <p>&copy; 2026, Aaron Lamoreaux</p>
        </footer>
      </main>
  );
}
