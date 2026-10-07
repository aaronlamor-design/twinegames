import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
        <ul id="navList">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/games">Games</Link></li>
        </ul>
    </nav>
  );
}