import React from "react";
import style from "./Advertisement.module.scss";
import Image from "next/image";
import pointer from "../../assets/icons/pointing-cursor.svg";

export default function Advertisement() {
  return (
    <div id={style.ad}>
      Advertisement
      <aside className="padded_container">
        <Image
          src={pointer}
          alt="pointer"
          className="w-12 scale-x-[-100%] fill-blue-500"
        />
        <span>
          <b>Your Website Here</b>
        </span>
        <Image src={pointer} alt="pointer" className="w-12" />
      </aside>
    </div>
  );
}
