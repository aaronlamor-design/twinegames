import Image from "next/image";
import styles from "./page.module.css";
import { glob } from 'node:fs/promises';
import path from 'path';
 
export default async function Home({ params }) {
  const { game } = await params;
  let link = "";
  const publicDir = path.join(process.cwd(), 'public');
  for await (const entry of glob(`${game}/*.html`, { cwd: publicDir })) {
    const webPath = entry.replace(/\\/g, '/');
    link=`/${webPath}`;
    break;
  }
  return (
    <div className={styles.content}>
      <iframe src={link} className={styles.gameview}></iframe>
    </div>
  );
}
