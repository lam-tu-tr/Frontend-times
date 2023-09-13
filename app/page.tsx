import Image from "next/image";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Intro from "./components/Intro/Intro";
import Tech from "./components/Tech/Tech";
import Connect from "./components/Connect/Connect";
import Location from "./components/Location/Location";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Works />
      <Location />
      <Tech />
      <Connect />
    </main>
  );
}
