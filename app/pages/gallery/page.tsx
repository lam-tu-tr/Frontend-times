import React from "react";
import Image from "next/image";

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
    <main className="padded_container">
      <ul>
        {gallery.map((image, index) => {
          return (
            <li key={index}>
              <Image src={image.src} alt={`Image ${index}`}></Image>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
