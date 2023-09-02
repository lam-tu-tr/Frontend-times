import React from "react";

import style from "./Nav.module.scss";

export default function Nav() {
  //* Check if mobile, hamburger if mobile
  return (
    <nav id={style.nav}>
      <ul>
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
