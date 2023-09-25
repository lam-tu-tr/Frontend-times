import { useState, useEffect, useRef } from "react";
import style from "./Nav.module.scss";

import { BsEyeglasses, BsSunglasses } from "react-icons/bs";

import { Passion_One } from "next/font/google";

const passion_one = Passion_One({
  weight: "400",
  subsets: ["latin"],
});

import { BiMenu } from "react-icons/bi";

export default function Nav() {
  const navRef = useRef<HTMLElement | null>(null);

  const [navOffset, setNavOffset] = useState<number | null>(null);

  const [navSticky, setNavSticky] = useState<Boolean>(false);

  const [lightMode, setLightMode] = useState<Boolean>(true);

  const [english, setEnglish] = useState<Boolean>(true);

  //* Recalculate Y of Nav to Top on screen resize
  useEffect(() => {
    function updateNavOffset() {
      setNavOffset(navRef.current?.offsetTop || null);
    }

    updateNavOffset();

    window.addEventListener("resize", updateNavOffset);

    return () => {
      window.addEventListener("resize", updateNavOffset);
    };
  }, []);

  //* Auto sticky nav when screen scrolls past Nav
  useEffect(() => {
    function navStickyScroll() {
      if (navOffset !== null && window.scrollY >= navOffset) {
        setNavSticky(true);
        document.body.classList.add("sticky");
        document.body.style.paddingTop = navRef.current?.offsetHeight + "px";
      } else {
        setNavSticky(false);
        document.body.classList.remove("sticky");
        document.body.style.paddingTop = "0px";
      }
    }

    window.addEventListener("scroll", navStickyScroll);

    return () => {
      window.removeEventListener("scroll", navStickyScroll);
    };
  }, [navOffset]);

  return (
    <nav id={style.nav} ref={navRef}>
      {/* <ul>
        <li>-Home-</li>
        <li>-More About me-</li>
        <li>-Project Details-</li>
      </ul> */}

      <aside>
        {navSticky && (
          <h3 className={passion_one.className}>
            {navSticky && "<FRONTEND TIMES/>"}
          </h3>
        )}
        {!navSticky && (
          <>
            <span onClick={() => setLightMode(!lightMode)}>
              {lightMode ? (
                <BsSunglasses className="icon" />
              ) : (
                <BsEyeglasses className="icon" />
              )}
            </span>

            {/* <span onClick={() => setEnglish(!english)}>
              {english ? "English" : "Vietnamese"}
            </span> */}
          </>
        )}
      </aside>
      <div>
        <BiMenu className="icon" />
      </div>
    </nav>
  );
}
