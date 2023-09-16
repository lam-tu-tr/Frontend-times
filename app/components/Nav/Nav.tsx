import { useState, useEffect, useRef } from "react";
import style from "./Nav.module.scss";

import { BsEyeglasses, BsSunglasses } from "react-icons/bs";

export default function Nav() {
  const navRef = useRef<HTMLElement | null>(null);

  const [navOffset, setNavOffset] = useState<number | null>(null);

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

  useEffect(() => {
    // const navOffset = navRef.current?.offsetTop;
    function navStickyScroll() {
      if (navOffset !== null && window.scrollY >= navOffset) {
        document.body.classList.add("sticky");
        document.body.style.paddingTop = navRef.current?.offsetHeight + "px";
      } else {
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
