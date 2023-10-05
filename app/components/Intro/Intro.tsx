import React from "react";
import Image from "next/image";
import style from "./Intro.module.scss";

import Avatar from "../../assets/Avatar.jpeg";
import footer from "../Footer/Footer.module.scss";

export default function Intro() {
  return (
    <div id={style.intro} className=" top_border padded_container">
      <h2>New Bay Area developer set to make waves in the tech industry.</h2>

      <div id={style.profile_pic} className="img_container">
        <Image
          src={Avatar}
          alt={"Avatar"}
          fill={true}
          style={{ objectFit: "cover" }}
        ></Image>
      </div>

      <p>
        <b>Meet Lam Tran</b>, the emerging electrical engineer turned front-end
        developer who thrives on the excitement of transforming digital UI/UX
        designs into responsive and tangible digital experience.
      </p>

      <aside>
        <a href={`#${footer.footer}`}>
          <button type="button" className="button_54">
            Connect
          </button>
        </a>
      </aside>
    </div>
  );
}
