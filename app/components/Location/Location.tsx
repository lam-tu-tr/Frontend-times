import React from "react";
import styles from "./Location.module.scss";
import { FaSearchLocation } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

export default function Location() {
  return (
    <section id={styles.extra}>
      <div id={styles.map}>
        <span>
          <FaSearchLocation className="w-20 h-20" />
          Bay Area
        </span>
        <span>
          <MdLocationCity /> San Francisco
        </span>
        <span>
          <MdLocationCity /> San Jose
        </span>
      </div>
      <div id={styles.base}>
        Base
        <sup>
          in<sup></sup>
        </sup>
      </div>
    </section>
  );
}
