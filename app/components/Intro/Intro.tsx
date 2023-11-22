import React from "react";
import Image from "next/image";
import style from "./Intro.module.scss";

import Avatar from "../../assets/Avatar.jpeg";
import footer from "../Footer/Footer.module.scss";

export default function Intro() {
  return (
    <div id={style.intro} className=" top_border padded_container">
      <h2>Bay Area developer set to make waves in the tech industry.</h2>

      <div id={style.profile_pic} className="img_container">
        <Image
          src={Avatar}
          alt={"Avatar"}
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
        ></Image>
      </div>

      <p>
        <b>Meet Lam Tran</b>, the front-end developer who thrives on the
        excitement of transforming digital UI/UX designs into responsive and
        tangible digital experience.
      </p>
      {/* <p>
        In an industry that is constantly evolving, he has the innate cursiosity
        and adaptability allows him to learn new technologies quickly and
        effectively(as demonstrated by his project progressions), staying at the
        forefront of industry trends, and implementing cutting-edge solutions.
      </p>
      <p>
        &quot;There&apos;s just something about making wireframe or design come
        to life that I love&quot; - Lam
      </p> */}

      <aside aria-label="Scroll to contact section">
        <a href={`#${footer.footer}`} className="button_54">
          Connect
        </a>
      </aside>
    </div>
  );
}
