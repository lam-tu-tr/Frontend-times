import React from "react";
import style from "./Advertisement.module.scss";
import Image from "next/image";
import pointer from "../../assets/icons/pointing-cursor.svg";

export default function Advertisement() {
  return (
    <div id={style.ad}>
      Advertisement
      <aside className="padded_container">
        <span>
          {/* inverted using tailwind */}
          <Image src={pointer} alt="pointer" className="scale-x-[-100%] " />
        </span>
        <h3>Your Website Here</h3>
        <span>
          <Image src={pointer} alt="pointer" />
        </span>
      </aside>
    </div>
  );
}
