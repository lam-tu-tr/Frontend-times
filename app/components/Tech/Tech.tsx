import React from "react";
import style from "./Tech.module.scss";

import Css from "@/app/assets/react-svg/tech/Css";
import Express from "@/app/assets/react-svg/tech/Express";
import Figma from "@/app/assets/react-svg/tech/Figma";
import Html from "@/app/assets/react-svg/tech/Html";
import Js from "@/app/assets/react-svg/tech/Js";
import Next from "@/app/assets/react-svg/tech/Next";
import Node from "@/app/assets/react-svg/tech/Node";
import Prisma from "@/app/assets/react-svg/tech/Prisma";
import Sass from "@/app/assets/react-svg/tech/Sass";
import Ts from "@/app/assets/react-svg/tech/Ts";

export default function Tech() {
  const logos = [
    <Html key="html" />,
    <Css key="css" />,
    <Sass key="sass" />,
    <Js key="js" />,
    <Ts key="ts" />,
    <Express key="express" className="svg_fill" />,
    <Next key="next" className="svg_fill" />,
    <Node key="node" />,
    <Prisma key="prisma" className="svg_fill" />,
    <Figma key="figma" />,
  ];
  return (
    <>
      <div id={style.heading_container}>
        <h3 className="top_border">Current Technologies</h3>
      </div>
      <div id={style.tech}>
        <ul aria-label="List of Current Technologies">
          {logos.map((tech, index) => {
            return (
              <li key={index} className="icon">
                {tech}
              </li>
            );
          })}
          {logos.map((tech, index) => {
            return (
              <li key={index} className="icon">
                {tech}
              </li>
            );
          })}
          {logos.map((tech, index) => {
            return (
              <li key={index} className="icon">
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
