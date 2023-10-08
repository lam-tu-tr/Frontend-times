import React from "react";

import style from "./Editorial.module.scss";
import Image from "next/image";

import ItineraryPNG from "../../assets/project-screenshots/Itinerary-desktop.png";
import KimNailsPNG from "../../assets/project-screenshots/NailSalon-desktop.png";
import PokedexPNG from "../../assets/project-screenshots/Pokedex-desktop.png";
import LamTypes from "../../assets/project-screenshots/LamTypes-desktop.png";
import { BsArrowUpRight } from "react-icons/bs";

import Pointer_cursor from "@/app/assets/react-svg/Pointer";

const projectsData = [
  {
    title: "Ai Itinery Planner",
    src: ItineraryPNG,
    alt: "Project 1 Pic",
    description:
      "Empower your journey with the magic of Artificial Intelligence, crafting seamless and unforgettable travel itineraries just for you.",
    link: "https://ai-itinerary-planner.vercel.app/",
    tech: ["Prisma", "OpenAI", "Typescript", "NextJS"],
  },
  {
    title: "Kim Nails ",
    src: KimNailsPNG,
    alt: "Project 2 Pic",
    description:
      "Elevate your style with stunning nail artistry at our salon – book your appointment for pampering perfection.",
    link: "https://www.kimnailsandbeautylounge.com/",
    tech: ["NextJS", "Sass/Scss", "React", "Typescript"],
  },
  {
    title: "Sinnoh Pokedex",
    src: PokedexPNG,
    alt: "Project 3 Pic",
    description:
      "Discover and learn about Pokémon like never before with our Pokedex web app - your portal to the Pokemon world",
    link: "https://sinnoh-pokedex.vercel.app/",
    tech: ["NodeJS", "Express", "React", "Javascript ES6+"],
  },
  {
    title: "Lam Types",
    src: LamTypes,
    alt: "Project 4 Pic",
    description:
      "Test and practice your typing skills using inspirational quotes. Made using pure HTML, CSS, Javascript.",
    link: "https://lamtran.info",
    tech: ["Html", "Css", "Javascript"],
  },
];

export default function Editorial() {
  const projects = projectsData.map((project, index) => {
    return (
      <li key={index} className={style.card}>
        <div className={style.project_pic}>
          <Image
            src={project.src}
            alt={project.alt}
            fill={true}
            // sizes="60svw"
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className={style.project_description}>
          <a
            aria-label={`${project.title} Project Picture`}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <h4>{project.title}</h4>
            <BsArrowUpRight />
          </a>

          <p>{project.description}</p>

          <div id={style.tech_used}>
            {project.tech.map((tech, index) => {
              return <span key={index}>{tech}</span>;
            })}
          </div>
        </div>
      </li>
    );
  });

  return (
    <section id={style.editorial} className="top_border ">
      <h3>Editorial Top Project Picks </h3>
      <ul className={style.scroll_container}>
        {projects}

        {/* Empty Project Placeholder */}
        {/* <li className={style.card}>
          <div className={`${style.project_pic} ${style.ad_project}`}>
            <h3>This could be your project!</h3>
          </div>
          <aside id={style.contact_button}>
            <a href={`#${footer.footer}`}>
              <button type="button" className="button_54">
                Contact
              </button>
            </a>
          </aside>
        </li> */}
      </ul>
    </section>
  );
}
