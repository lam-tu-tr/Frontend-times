import Image from "next/image";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Intro from "./components/Intro/Intro";
import Tech from "./components/Tech/Tech";

export default function Home() {
  return (
    <main>
      <Intro></Intro>
      <About></About>
      <Works></Works>
      <Tech></Tech>
    </main>
  );
}
