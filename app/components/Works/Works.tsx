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
      description: "temp",
      link: "Project 1",
    },
    {
      src: KimNailsPNG,
      alt: "Project 2 Pic",
      title: "Kim Nails and Beauty Lounge",
      rating: 3,
      description: "Prject2",
      link: "Project 2",
    },
    {
      src: PokedexPNG,
      alt: "Project 3 Pic",
      title: "Sinnoh Pokedex",
      rating: 3,
      description: "temp",
      link: "Project 3",
    },
    {
      src: LamTypesPNG,
      alt: "Project 4 Pic",
      title: "Lam Types",
      rating: 3,
      description: "temp",
      link: "Project 4",
    },
  ];
  const projects = projectsData.map((project, index) => {
    return (
      <li key={index}>
        <div>
          <Image
            src={project.src}
            // width="300"
            // height="300"
            alt={project.alt}
            fill={true}
            objectFit="cover"
          ></Image>
        </div>
        <div>
          <h3 className="text-left">{project.title}</h3>
          <article>
            <aside>{project.rating}</aside>
            <p>{project.description}</p>
            <p>Free Shipping</p>
          </article>
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
