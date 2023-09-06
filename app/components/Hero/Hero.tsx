import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

import LamTypesPNG from "../../assets/Lamtypes.png";

export default function Hero() {
  return (
    <div id={styles.hero}>
      <section>
        <p>Hello, welcome to my page</p>
        <aside>
          <Image
            src={LamTypesPNG}
            alt="Landscape picture"
            // width={300}
            // height={300}
          />
        </aside>
      </section>
    </div>
  );
}
