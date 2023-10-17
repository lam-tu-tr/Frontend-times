import React from "react";
import Nav from "../Nav/Nav";
import Link from "next/link";

import style from "./Header.module.scss";

import { Passion_One } from "next/font/google";

const passion_one = Passion_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const date = new Date();

  return (
    <>
      <header id={style.header}>
        <section>
          <Link href="/">
            <h1 className={passion_one.className}>&#60;FRONTEND TIMES/&#62;</h1>
          </Link>
          <h3>{date.toLocaleDateString()}</h3>
        </section>
      </header>
      <Nav></Nav>
      <aside id={style.breaking_news}>
        <h2>BREAKING NEWS</h2>
        <h2>BREAKING NEWS</h2>
        <h2>BREAKING NEWS</h2>
      </aside>
    </>
  );
}
