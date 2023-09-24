"use client";

import { forwardRef } from "react";
import styles from "./Footer.module.scss";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { BsMailbox2 } from "react-icons/bs";

interface ChildProps {}

const Footer = forwardRef<HTMLElement, ChildProps>(({}, footerRef) => {
  return (
    <footer id={styles.footer} ref={footerRef}>
      <h3>&#60;FRONTEND TIMES /&#62;</h3>
      {/* <form action="submit" id={styles.form}>
        <aside>
          <input placeholder="@gmail.com" type="text" />
          <input placeholder="Subject2" type="text" />
        </aside>
        <textarea
          name="mail-body"
          id="mail-body"
          cols={15}
          rows={5}
          placeholder="Write a message"
        ></textarea>
      </form> */}

      <section id={styles.contact}>
        <aside id={styles.info}>
          <span>
            <BsMailbox2 className="w-10 h-10" />
          </span>
          <span>Lam.tu.tr@gmail.com</span>
        </aside>
      </section>

      <section id={styles.social}>
        <span>
          <FaGithub className="w-8 h-8" />
        </span>
        <span>
          <FaLinkedin className="w-8 h-8" />
        </span>
      </section>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
