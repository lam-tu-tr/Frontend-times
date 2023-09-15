import React from "react";
import style from "./Nav.module.scss";

import { BsEyeglasses, BsSunglasses } from "react-icons/bs";

export default function Nav() {
  //* Check if mobile, hamburger if mobile
  return (
    <nav id={style.nav}>
      <ul>
        <li>-Home-</li>
        <li>-More About me-</li>
        <li>-Project Details-</li>
      </ul>
      <aside>
        <span>Language</span>
        <span>
          <BsSunglasses className="w-10 h-10" />
          ---
          <BsEyeglasses className="w-10 h-10" />
        </span>
      </aside>
    </nav>
  );
}
