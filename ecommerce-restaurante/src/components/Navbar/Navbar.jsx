"use client";

import styles from "./Navbar.module.scss";
import Image from "next/image";
import Navlinks from "./Navlinks";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const setNavbarHandler = () => {
      setIsNavbarShow(window.scrollY >= 600);
    };

    document.addEventListener("scroll", setNavbarHandler);
    return () => document.removeEventListener("scroll", setNavbarHandler);
  }, []);

  const toggleMenuHandler = () => setIsMenu(!isMenu);

  return (
    <section
      className={`${styles["navbar-wrapper"]} ${isNavbarShow && styles.active}`}
    >
      <div className={styles.navbar}>
        <a href="#">
          <Image src="/logo.png" width={220} height={50} alt="Logo" />
        </a>

        {/* Desktop Links (without toggleMenu) */}
        <nav className={styles.links}>
          <Navlinks />
        </nav>

        {/* Mobile Burger Icon */}
        <GiHamburgerMenu className={styles.icon} onClick={toggleMenuHandler} />

        {/* Mobile Burger Menu (with toggleMenu) */}
        <nav className={`${styles.burger} ${isMenu && styles.active}`}>
          <Navlinks toggleMenu={toggleMenuHandler} />
        </nav>

        {/* Background Overlay */}
        <div className={`${styles.background} ${isMenu && styles.active}`} />
      </div>
    </section>
  );
};

export default Navbar;
