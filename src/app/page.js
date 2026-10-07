import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
    <main className={styles.page}>
        <h1>Twine Library</h1>
        <p>The purpose of this site is to make it easier to play twine games you've already downloaded.</p>
        <p>I don't yet know how to code the backend effectly. so in order to use this site, you are going <br></br> to have to download the source code from my github repository.</p>
        <p>you can find the repository here: <Link href="https://github.com/aaronlamor-design/twinegames">https://github.com/aaronlamor-design/twinegames</Link></p>
        <p>once you've downloaded the repository, extract or move any twine game you into the folder <br></br> labeled as <i>games</i> inside the <i>public</i> folder.</p>
        <p>each html and assoicated image or img folder needs to be in a their own folder inside the <br></br> public games folder. Whatever you name you html inside theh Games folder will be the same <br></br> as the link on the games page of this website under Games Availiable.</p>
    </main>
    )
}
