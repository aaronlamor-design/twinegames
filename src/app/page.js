import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
    <main className={styles.page}>
        <h1 className={styles.title}>Twine Library</h1>
        <p className={styles.text}>The purpose of this site is to make it easier to play twine games you've already downloaded.<br />
        I don't yet know how to code the backend effectly. <br /> 
        So in order to use this site, you are going to have to download the source code from my github repository. <br />
        You can find the repository here: <Link href="https://github.com/aaronlamor-design/twinegames">https://github.com/aaronlamor-design/twinegames</Link> <br/>
        Once you've downloaded the repository, extract or move any twine game you into the folder labeled as <i>games</i> inside the <i>public</i> folder. <br />
        Each html and assoicated image or img folder needs to be in a their own folder inside the  public games folder. <br />
        Whatever you name you html inside theh Games folder will be the same as the link on the games page of this website under Games Availiable. </p>
    </main>
    )
}
