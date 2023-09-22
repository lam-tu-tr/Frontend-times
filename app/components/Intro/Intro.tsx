import React from "react";
import Image from "next/image";
import styles from "./Intro.module.scss";

import Avatar from "../../assets/Avatar.jpeg";

export default function Intro() {
  return (
    <div id={styles.intro}>
      <h2>New Bay Area player set to make waves in the tech industry.</h2>

      <div id={styles.profile_pic}>
        <Image
          src={Avatar}
          alt={"Avatar"}
          fill={true}
          // sizes="60svw"
          style={{ objectFit: "contain" }}
        ></Image>
      </div>

      <p>
        <b>Meet Lam</b>, the emerging electrical engineer turned front-end
        developer who thrives on the excitement of transforming digital UI/UX
        designs into tangible and seamless digital experience. He is set to make
        waves in the tech industry.
      </p>
    </div>
  );
}
