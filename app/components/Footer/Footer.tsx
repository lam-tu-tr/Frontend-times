"use client";

import style from "./Footer.module.scss";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { BsMailbox2 } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id={style.footer}>
      <h3>&#60;FRONTEND TIMES/&#62;</h3>
      {/* <form action="submit" id={style.form}>
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

      <section id={style.contact}>
        <a
          id={style.info}
          aria-label="Email"
          href="mailto: lam.tu.tr@gmail.com"
        >
          <span>
            <BsMailbox2 className="icon" />
          </span>
          <span>Lam.tu.tr@gmail.com</span>
        </a>
        <ul id={style.social} role="list">
          <li>
            <a
              aria-label="Github"
              href="https://github.com/lam-tu-tr"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/lam-t-tran/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
        </ul>
      </section>

      <p>Lam Tran &copy; Built using React and NextJS</p>
    </footer>
  );
}
