"use client";
import { useRef } from "react";

import Intro from "./components/Intro/Intro";
import Editorial from "./components/Editorial/Editorial";
import Tech from "./components/Tech/Tech";
import Footer from "./components/Footer/Footer";

import Advertisement from "./components/Advertisement/Advertisement";
import Header from "./components/Header/Header";

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
      <Header />
      <div id="main-column">
        <main>
          <Intro scrollToFooter={scrollToFooter} />
          <Editorial />
          <Tech />
          <Advertisement />
        </main>

        <Footer ref={footerRef} />
      </div>
    </>
  );
}
