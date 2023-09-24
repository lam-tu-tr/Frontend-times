import React, { useState } from "react";

import styles from "./Editorial.module.scss";
import Image from "next/image";
import Link from "next/navigation";

import ItineraryPNG from "../../assets/Itinerary.png";
import KimNailsPNG from "../../assets/NailSalon.png";
import PokedexPNG from "../../assets/Pokedex.png";
import LamTypesPNG from "../../assets/LamTypes.png";

const projectsData = [
  {
    title: "Ai Itinery Planner",
    src: ItineraryPNG,
    alt: "Project 1 Pic",
    rating: 3,
    description:
      "Empower your journey with the magic of Artificial Intelligence, crafting seamless and unforgettable travel itineraries just for you.",
    link: "Project 1",
  },
  {
    title: "Kim Nails and Beauty Lounge",
    src: KimNailsPNG,
    alt: "Project 2 Pic",
    rating: 3,
    description:
      "Elevate your style with stunning nail artistry at our salon – book your appointment for pampering perfection.",
    link: "Project 2",
  },
  {
    title: "Sinnoh Pokedex",
    src: PokedexPNG,
    alt: "Project 3 Pic",
    rating: 3,
    description:
      "Discover and learn about Pokémon like never before with our Pokedex web app - your portal to the Pokemon world",
    link: "Project 3",
  },
  {
    title: "Lam Types",
    src: LamTypesPNG,
    alt: "Project 4 Pic",
    rating: 3,
    description:
      "Boost your touch typing skills with this speed test web app - assess your typing speed and accuracy",
    link: "Project 4",
  },
];
export default function Works() {
  const projects = projectsData.map((project, index) => {
    return (
      <li key={index} id={styles.card}>
        <div id={styles.project_pic} className="img_container">
          <Image
            src={project.src}
            alt={project.alt}
            fill={true}
            // sizes="60svw"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div id={styles.project_description}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      </li>
    );
  });
  return (
    <section id={styles.works} className="top_border">
      <h3>Editorial Top Project Picks </h3>
      <ul className={styles.scroll_container}>{projects}</ul>
    </section>
  );
}
