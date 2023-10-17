import React from "react";
import Image from "next/image";
import style from "./gallery.module.scss";

import ItineraryPNG from "../assets/project-screenshots/Itinerary-desktop.png";
import KimNailsPNG from "../assets/project-screenshots/NailSalon-desktop.png";
import PokedexPNG from "../assets/project-screenshots/Pokedex-desktop.png";
import LamTypes from "../assets/project-screenshots/LamTypes-desktop.png";
const gallery = [
  {
    src: ItineraryPNG,
    date: "date",
    location: "location",
    description: "description",
  },
  {
    src: KimNailsPNG,
    date: "date",
    location: "location",
    description: "description",
  },
  {
    src: PokedexPNG,
    date: "date",
    location: "location",
    description: "description",
  },
  {
    src: LamTypes,
    date: "date",
    location: "location",
    description: "description",
  },
];
export default function page() {
  return (
    <main className={`padded_container`}>
      <ul className={`${style.gallery_wrapper} mobile_body_padding`}>
        {gallery.map((photos, index) => {
          return (
            <li key={index}>
              <div>
                <Image src={photos.src} alt={`Image ${index}`}></Image>
              </div>

              <p>{photos.date}</p>
              <p>{photos.location}</p>
              <p>{photos.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
