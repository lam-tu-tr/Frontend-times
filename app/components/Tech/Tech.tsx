import React from "react";
import style from "./Tech.module.scss";
import Image from "next/image";

import css from "../../assets/icons/css.svg";
import express from "../../assets/icons/express.svg";
import figma from "../../assets/icons/figma.svg";
import html from "../../assets/icons/html.svg";
import js from "../../assets/icons/javascript.svg";
import next from "../../assets/icons/nextjs.svg";
import node from "../../assets/icons/nodejs.svg";
import prisma from "../../assets/icons/prisma.svg";
import ts from "../../assets/icons/typescript.svg";
import sass from "../../assets/icons/sass.svg";

export default function Tech() {
  const logos = [html, css, sass, js, ts, next, node, express, prisma, figma];
  return (
    <div id={style.tech_container} className="top_border">
      <h3>Current Technologies</h3>
      <div id={style.tech}>
        <ul aria-label="List of Current Technologies">
          {logos.map((tech, index) => {
            return (
              <li key={index}>
                <Image src={tech} alt={"tech"} />
              </li>
            );
          })}
          {logos.map((tech, index) => {
            return (
              <li key={index}>
                <Image src={tech} alt={"tech"} />
              </li>
            );
          })}
          {logos.map((tech, index) => {
            return (
              <li key={index}>
                <Image src={tech} alt={"tech"} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
