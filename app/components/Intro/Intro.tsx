import React from "react";
import Image from "next/image";
import styles from "./Intro.module.scss";

import LamTypesPNG from "../../assets/Lamtypes.png";

export default function Intro() {
  return (
    <div id={styles.intro}>
      <section>
        <p>
          Welcome to my web development portfolio! I&apos;m a dedicated frontend
          developer focused on creating seamless user experiences that transform
          digital concepts into reality.
        </p>
      </section>
    </div>
  );
}
