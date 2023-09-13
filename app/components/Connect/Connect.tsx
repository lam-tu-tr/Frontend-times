"use client";
import React from "react";
import styles from "./Connect.module.scss";

import { BiSolidDownvote } from "react-icons/bi";
export default function Connect() {
  let bottomOfPage = document.getElementById(styles.connect);

  function scrollToBottom() {
    // document.body.scroll = 0;
    // document.documentElement.scrollTop = 0;
    bottomOfPage?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id={styles.connect}>
      <button onClick={scrollToBottom} type="button">
        <span className="mr-4">Get In Touch</span>
      </button>
      <div onClick={scrollToBottom}>
        <BiSolidDownvote className="w-10 h-10" />
      </div>
    </section>
  );
}
