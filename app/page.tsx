"use client";
import { useRef } from "react";

import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import Editorial from "./components/Editorial/Editorial";
import Tech from "./components/Tech/Tech";
import Footer from "./components/Footer/Footer";

import { Passion_One } from "next/font/google";

const passion_one = Passion_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  //Create a ref so that the button in the connect Element
  //can scroll into view of the footer
  const footerRef = useRef<HTMLElement | null>(null);

  function scrollToFooter() {
    console.log("scrolling");
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <header>
        <h1 className={passion_one.className}>&#60;FRONTEND TIMES /&#62;</h1>
        <aside id="breaking_news">
          <h2>BREAKING NEWS</h2>
          <h2>BREAKING NEWS</h2>
        </aside>
        <Nav></Nav>
      </header>

      <main>
        <Intro />
        <Editorial />
        <Tech />
      </main>

      <Footer ref={footerRef} />
    </>
  );
}
