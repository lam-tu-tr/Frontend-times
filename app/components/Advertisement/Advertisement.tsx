import React from "react";
import style from "./Advertisement.module.scss";
import Image from "next/image";

import pointer_cursor from "@/app/assets/icons/pointing-cursor.svg";

import Pointer_cursor from "@/app/assets/react-svg/Pointer";

export default function Advertisement() {
  return (
    <div id={style.ad}>
      Advertisement
      <aside className="padded_container">
        {/* inverted using tailwind */}
        <span className="transform -scale-x-100">
          <Pointer_cursor className="svg_fill" />
        </span>
        <h3>Your Website Here</h3>
        <span>
          <Pointer_cursor className="svg_fill" />
        </span>
      </aside>
    </div>
  );
}
