import React from "react";
import Link from "next/link";
import Image from "next/image";

// img
import logoImg from "@/assets/logo.png";

// styles
import classes from "./MainHeader.module.css";

// components
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
