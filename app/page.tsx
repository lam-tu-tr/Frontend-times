"use client";
import { useRef } from "react";

import About from "./components/About/About";
import Works from "./components/Works/Works";
import Intro from "./components/Intro/Intro";
import Tech from "./components/Tech/Tech";
import Connect from "./components/Connect/Connect";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

import { Passion_One } from "next/font/google";

const passion_one = Passion_One({
  weight: "400",
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
    <div>
      <section id="title">
        <h1 className={passion_one.className}>&#60;FRONTEND TIMES /&#62;</h1>
        <aside id="breaking_news">
          <h2>BREAKING NEWS</h2>
          <h2>BREAKING NEWS</h2>
        </aside>
        <Nav></Nav>
      </section>

      <main>
        <Intro />
        <About />
        <Works />
        <Location />
        <Tech />
        <Connect scrollToFooter={scrollToFooter} />
      </main>
      <Footer ref={footerRef} />
    </div>
  );
}
