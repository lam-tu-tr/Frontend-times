import Image from "next/image";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Works from "./components/Works/Works";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Works></Works>
      <Footer></Footer>
    </main>
  );
}
