import { useEffect, useRef } from "react";
import style from "./Nav.module.scss";

import { BsEyeglasses, BsSunglasses } from "react-icons/bs";

export default function Nav() {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const navOffset = navRef.current?.offsetTop;
    function navStickyScroll() {
      if (navOffset && window.scrollY >= navOffset) {
        navRef.current!.classList.add("sticky");
        document.body.style.paddingTop = navRef.current!.offsetHeight + "px";
      } else {
        navRef.current!.classList.remove("sticky");
        document.body.style.paddingTop = "0px";
      }
    }

    window.addEventListener("scroll", navStickyScroll);

    return () => {
      window.removeEventListener("scroll", navStickyScroll);
    };
  }, []);

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
