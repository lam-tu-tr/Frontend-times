import React from "react";
import styles from "./Footer.module.scss";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <section>Contacts</section>
      <section>
        <aside>Links?</aside>
        <aside>More stuff</aside>
      </section>
      <section>
        <FaGithub className="w-20 h-20" />

        <FaLinkedin className="w-20 h-20" />
      </section>
    </footer>
  );
}
