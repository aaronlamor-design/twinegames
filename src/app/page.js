import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export default function Home() {
    return (
        
        <main className={styles.page}>
            <NavBar />
            <h1 className={styles.title}>Twine Library</h1>
            <p className={styles.text}>The purpose of this site is to make it easier to play twine games you've already downloaded.<br />
                You can find twine games at <Link href="https://itch.io/games/made-with-twine">https://itch.io/games/made-with-twine</Link><br />
                I don't yet know how to code the backend effectly. <br /> 
                So in order to use this site, you are going to have to download the source code from my github repository. <br />
                You can find the repository here: <Link href="https://github.com/aaronlamor-design/twinegames">https://github.com/aaronlamor-design/twinegames</Link> <br/>
                Once you've downloaded the repository, extract or move any twine game into the folder labeled as <i>games</i> inside the <i>public</i> folder. <br />
                Each html and its assoicated image or img folder <b><u>HAS</u></b> to be nested together in a folder inside the <i>games</i> folder. Example: <br />
                public<br />
                ∟ games<br />
                    <span className={styles.singleIndent}>∟ example_game folder<br /></span>
                    <span className={styles.doubleIndent}>
                        ∟ image folder<br />
                        ∟ example_game.html
                    </span>
            </p>
            <Footer />
        </main>
    )
}
