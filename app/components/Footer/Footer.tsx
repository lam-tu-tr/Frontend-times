"use client";
import { forwardRef } from "react";
import styles from "./Footer.module.scss";

//icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

interface ChildProps {}

const Footer = forwardRef<HTMLElement, ChildProps>(({}, footerRef) => {
  return (
    <footer id={styles.footer} ref={footerRef}>
      <section id={styles.form}>
        {/* <form action="temp">
        </form> */}
        Contact
      </section>
      <section>Your Ads Here</section>
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
        <FaGithub className="w-10 h-10" />
        <FaLinkedin className="w-10 h-10" />
      </section>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
