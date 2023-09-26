import React from "react";
import Image from "next/image";
import style from "./Intro.module.scss";

import Avatar from "../../assets/Avatar.jpeg";

export default function Intro({
  scrollToFooter,
}: {
  scrollToFooter: () => void;
}) {
  return (
    <div id={style.intro} className=" top_border">
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
        designs into tangible and seamless digital experience.
      </p>

      <aside>
        <button
          type="button"
          onClick={scrollToFooter}
          className={style.button_54}
        >
          Connect
        </button>
      </aside>
    </div>
  );
}
