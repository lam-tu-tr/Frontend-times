import React from "react";
import styles from "./Location.module.scss";

export default function Location() {
  return (
    <section id={styles.extra}>
      <div id={styles.map}>
        <span></span>
        <span></span>
      </div>
      <div id={styles.base}>
        Base<sup>in</sup>
      </div>
    </section>
  );
}
