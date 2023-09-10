import React from "react";
import Image from "next/image";
import styles from "./Intro.module.scss";

import LamTypesPNG from "../../assets/Lamtypes.png";

export default function Intro() {
  return (
    <div id={styles.intro}>
      <section>
        <p>Hello, welcome to my page</p>
      </section>
    </div>
  );
}
