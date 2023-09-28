"use client";
import { useEffect, useRef, useState } from "react";

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
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const [mode, setMode] = useState<String | null | undefined>(null);

  useEffect(() => {
    const handleThemeChange = () => {
      setMode(document.querySelector("body")?.getAttribute("data-theme"));
    };
    // Attach an event listener to the body element
    document.body.addEventListener("theme-change", handleThemeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);

  return (
    <>
      <h2>{mode}</h2>
      <Header />

      <main>
        <Intro scrollToFooter={scrollToFooter} />
        <Editorial />
        <Tech />
        <Advertisement />
      </main>

      <Footer ref={footerRef} />
    </>
  );
}
