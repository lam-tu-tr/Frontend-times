import React from "react";
import Image from "next/image";
import style from "./gallery.module.scss";

const gallery = [
  {
    src: "temp",
    date: "date",
    location: "location",
    description: "description",
  },
  {
    src: "temp",
    date: "date",
    location: "location",
    description: "description",
  },
  {
    src: "temp",
    date: "date",
    location: "location",
    description: "description",
  },
  {
    src: "temp",
    date: "date",
    location: "location",
    description: "description",
  },
  {
    src: "temp",
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
              <div>Picture</div>
              {/* <Image src={image.src} alt={`Image ${index}`}></Image> */}
              <p>{photos.src}</p>
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
