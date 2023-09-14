"use client";
import { useRef } from "react";

import About from "./components/About/About";
import Works from "./components/Works/Works";
import Intro from "./components/Intro/Intro";
import Tech from "./components/Tech/Tech";
import Connect from "./components/Connect/Connect";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";

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
