import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <main id={styles.hero}>
      <section>
        <p>Hello, welcome to my page</p>
        <aside>
          <Image src="" alt="Landscape picture" width={40} height={40} />
        </aside>
      </section>
    </main>
  );
}
