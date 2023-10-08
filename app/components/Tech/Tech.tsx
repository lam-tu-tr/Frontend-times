import React from "react";
import style from "./Tech.module.scss";

import Css from "@/app/assets/react-svg/tech/Css";
import Express from "@/app/assets/react-svg/tech/Express";
import Figma from "@/app/assets/react-svg/tech/Figma";
import Html from "@/app/assets/react-svg/tech/Html";
import Javascript from "@/app/assets/react-svg/tech/Javascript";
import Next from "@/app/assets/react-svg/tech/Next";
import Node from "@/app/assets/react-svg/tech/Node";
import Prisma from "@/app/assets/react-svg/tech/Prisma";
import Sass from "@/app/assets/react-svg/tech/Sass";
import Typescript from "@/app/assets/react-svg/tech/Typescript";
import ReactJS from "@/app/assets/react-svg/tech/ReactJS";
import Git from "@/app/assets/react-svg/tech/Git";
import Tailwind from "@/app/assets/react-svg/tech/Tailwind";

export default function Tech() {
  const logos = [
    {
      logo: <Html key="html" />,
      name: "HTML",
    },
    {
      logo: <Css key="css" />,
      name: "CSS",
    },
    {
      logo: <Sass key="sass" />,
      name: "Sass",
    },
    {
      logo: <Tailwind key="tailwind" />,
      name: "Tailwind",
    },
    {
      logo: <Javascript key="js" />,
      name: "Javascript",
    },
    {
      logo: <Typescript key="ts" />,
      name: "Typescript",
    },
    {
      logo: <ReactJS key="react" />,
      name: "React",
    },
    {
      logo: <Express key="express" />,
      name: "Express",
    },
    {
      logo: <Next key="next" />,
      name: "Next",
    },
    {
      logo: <Node key="node" />,
      name: "Node",
    },
    {
      logo: <Prisma key="prisma" />,
      name: "Prisma",
    },
    {
      logo: <Git key="git" />,
      name: "Git",
    },
    {
      logo: <Figma key="figma" />,
      name: "Figma",
    },
  ];

  const tech_logos = logos.map((tech, index) => {
    return (
      <li key={index} className="icon">
        {tech.logo}
        {tech.name}
      </li>
    );
  });

  return (
    <>
      <div id={style.heading_container}>
        <h3 className="top_border">Current Technologies</h3>
      </div>
      <div id={style.tech}>
        <ul aria-label="List of Current Technologies">
          {tech_logos}
          {tech_logos}
          {tech_logos}
        </ul>
      </div>
    </>
  );
}
