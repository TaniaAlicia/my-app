import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main /* className={styles.main} */>
        <h1>Hola Mundo</h1>
      </main>
      <div>
        <Link href="/users">
          
          Link para ir a la página usuarios
        </Link>
      </div>
    </>
  );
}
