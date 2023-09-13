import React from "react";
import styles from "./Footer.module.scss";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
export default function Footer() {
  return (
    <footer id={styles.footer}>
      <section id={styles.temp}>Contacts</section>
      <section id={styles.contact}>
        <span>
          <HiMail className="w-14 h-14" />
          Lam.tu.tr@gmail.com
        </span>

        <span>
          <FaPhone className="w-10 h-10" />
          (669) - 246 2649
        </span>
      </section>
      <section id={styles.social}>
        <FaGithub className="w-14 h-14" />
        <FaLinkedin className="w-14 h-14" />
      </section>
    </footer>
  );
}
