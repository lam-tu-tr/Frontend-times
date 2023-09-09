import React from "react";

import styles from "./Works.module.scss";
import Image from "next/image";
import Link from "next/navigation";

import ItineraryPNG from "../../assets/Itinerary.png";
import KimNailsPNG from "../../assets/NailSalon.png";
import PokedexPNG from "../../assets/Pokedex.png";
import LamTypesPNG from "../../assets/Lamtypes.png";

export default function Works() {
  const projectsData = [
    {
      src: ItineraryPNG,
      alt: "Project 1 Pic",
      title: "Ai Itinery Planner",
      rating: 3,
      description:
        "Empower your journey with the magic of Artificial Intelligence, crafting seamless and unforgettable travel itineraries just for you.",
      link: "Project 1",
    },
    {
      src: KimNailsPNG,
      alt: "Project 2 Pic",
      title: "Kim Nails and Beauty Lounge",
      rating: 3,
      description:
        "Elevate your style with stunning nail artistry at our salon – book your appointment for pampering perfection.",
      link: "Project 2",
    },
    {
      src: PokedexPNG,
      alt: "Project 3 Pic",
      title: "Sinnoh Pokedex",
      rating: 3,
      description:
        "Discover and learn about Pokémon like never before with our Pokedex web app - your portal to the Pokemon world",
      link: "Project 3",
    },
    {
      src: LamTypesPNG,
      alt: "Project 4 Pic",
      title: "Lam Types",
      rating: 3,
      description:
        "Boost your touch typing skills with this speed test web app - assess your typing speed and accuracy",
      link: "Project 4",
    },
  ];
  const projects = projectsData.map((project, index) => {
    return (
      <li key={index}>
        <div>
          <Image
            src={project.src}
            alt={project.alt}
            fill={true}
            // sizes="60svw"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div>
          <article>
            <h3>{project.title}</h3>

            <aside>Free Shipping</aside>

            <p>{project.description}</p>
          </article>
          {/* <p>{project.rating}</p> */}
        </div>
      </li>
    );
  });
  return (
    <section id={styles.works}>
      <h1>My Works</h1>
      <ul>{projects}</ul>
    </section>
  );
}
