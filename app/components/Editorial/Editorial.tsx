import React from "react";

import style from "./Editorial.module.scss";
import Image from "next/image";

import ItineraryPNG from "../../assets/project-screenshots/Itinerary-desktop.png";
import KimNailsPNG from "../../assets/project-screenshots/NailSalon-desktop.png";
import PokedexPNG from "../../assets/project-screenshots/Pokedex-desktop.png";
import LamTypes from "../../assets/project-screenshots/LamTypes-desktop.png";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import footer from "../Footer/Footer.module.scss";
// import Pointer_cursor from "@/app/assets/react-svg/Pointer";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const projectsData = [
  {
    title: "Itinerary Genie",
    src: ItineraryPNG,
    alt: "Project 1 Pic",
    description:
      "Empower your journey with the magic of Artificial Intelligence, crafting seamless and unforgettable travel itineraries just for you.",
    link: "https://ai-itinerary-planner.vercel.app/",
    github: undefined,
    tech: ["Redux", "OpenAI", "Typescript", "NextJS"],
  },
  {
    title: "Kim Nails",
    src: KimNailsPNG,
    alt: "Project 2 Pic",
    description:
      "Elevate your style with stunning nail artistry at our salon – book your appointment for pampering perfection.",
    link: "https://www.kimnailsandbeautylounge.com/",
    github: undefined,
    tech: ["NextJS", "Sass/Scss", "React", "Typescript"],
  },
  // {
  //   title: "Sinnoh Pokedex",
  //   src: PokedexPNG,
  //   alt: "Project 3 Pic",
  //   description:
  //     "Discover and learn about Pokémon like never before with our Pokedex web app - your portal to the Pokemon world",
  //   link: "https://sinnoh-pokedex.vercel.app/",
  //   github: "https://github.com/lam-tu-tr/SinnohPokedex",
  //   tech: ["NodeJS", "Express", "React", "Javascript ES6+"],
  // },
  // {
  //   title: "Lam Types",
  //   src: LamTypes,
  //   alt: "Project 4 Pic",
  //   description:
  //     "Test and practice your typing skills using inspirational quotes. Made using pure HTML, CSS, Javascript.",
  //   link: "https://github.com/lam-tu-tr/LamTypes.github.io",
  //   github: "https://github.com/lam-tu-tr/LamTypes.github.io",
  //   tech: ["Html", "Css", "Javascript"],
  // },
];
async function getProjects() {
  const query = `*[_type == "projects"] {
    title,
    description,
    link,
    technologies,
    image,
    "imageUrl": image.asset->url,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Editorial() {
  const fetched_projects = await getProjects();

  console.log(fetched_projects);

  const projects = fetched_projects.map((project: any) => {
    return (
      <li key={project.title} className={style.card}>
        <div className={style.project_pic}>
          <Image
            src={project.imageUrl}
            alt={project.image.alt}
            fill={true}
            // sizes="60svw"

            style={{ objectFit: "contain" }}
            loading="lazy"
          ></Image>
        </div>

        <div className={style.project_description}>
          <h4>
            <a
              aria-label={`Open project ${project.title} in new tab`}
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.title}
              <span>
                <BsArrowUpRight />
              </span>
            </a>
            {/* {project.github && (
              <a
                aria-label="Github"
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            )} */}
          </h4>

          <p>{project.description}</p>

          <div id={style.tech_used}>
            {project.technologies.map((tech: string[], index: number) => {
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
        <li className={style.card}>
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
        </li>
      </ul>
    </section>
  );
}
