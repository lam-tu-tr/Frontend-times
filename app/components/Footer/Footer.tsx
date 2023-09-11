import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <section>Contacts</section>
      <section>
        <aside>Links?</aside>
        <aside>More stuff</aside>
      </section>
      <section>Connect</section>
    </footer>
  );
}
