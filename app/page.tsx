import Image from "next/image";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hero></Hero>
      <About></About>
      <Works></Works>
    </main>
  );
}
