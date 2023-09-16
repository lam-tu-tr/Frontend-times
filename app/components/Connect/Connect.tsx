"use client";
import React from "react";
import styles from "./Connect.module.scss";

import { BiSolidDownvote } from "react-icons/bi";

export default function Connect({
  scrollToFooter,
}: {
  scrollToFooter: () => void;
}) {
  return (
    <section id={styles.connect}>
      <button onClick={scrollToFooter} type="button">
        <span className="mr-4">Get In Touch</span>
        <BiSolidDownvote className="w-10 h-10" />
      </button>
    </section>
  );
}
