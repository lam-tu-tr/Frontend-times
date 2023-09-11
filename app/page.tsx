import Image from "next/image";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Intro from "./components/Intro/Intro";
import Tech from "./components/Tech/Tech";
import Connect from "./components/Connect/Connect";
import Extra from "./components/Extra/Extra";

export default function Home() {
  return (
    <main>
      <Intro></Intro>
      <About></About>
      <Works></Works>
      <Extra></Extra>
      <Tech></Tech>
      <Connect></Connect>
    </main>
  );
}
