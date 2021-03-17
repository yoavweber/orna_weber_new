// import React, { useEffect, useState } from 'react'
import React from "react";
import { Link } from "gatsby";

import PhoneIcon from "../icon/Icon";
import { PHONE_NUMBER } from "../../config";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";

import { classNames } from "../../../utils/classNames";
import { isMobile } from "../../../utils/isMobile";

import styles from "./nav.module.scss";

const Nav = ({ children }) => {
  const navClassName = classNames(styles.desktopNav, styles.nav);
  // const Burger = () => {
  //   return (
  //     <button className={styles.burgerWrapper}>
  //       <svg
  //         width="32"
  //         height="16"
  //         viewBox="0 0 32 16"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <rect width="32" height="2" fill="black" />
  //         <rect y="7" width="32" height="2" fill="black" />
  //         <rect y="14" width="32" height="2" fill="black" />
  //       </svg>
  //     </button>
  //   );
  // };
  const treatments = [
    { name: "טיפולי אנטי אייג'נג", link: "/treatments/antiAge" },
    { name: "טיפולי פיגמנטציה", link: "/treatments/pigmentation" },
    { name: "טיפולי אקנה", link: "/treatments/acne" },
    { name: "טשטוש צלקות", link: "/treatments/scars" },
    { name: "הסרת שיער", link: "/treatments/hair" },
  ];
  const treatmentsMenu = treatments.map((node) => {
    return (
      <Link to={node.link}>
        <span>{node.name}</span>
      </Link>
    );
  });
  return (
    <div className={styles.wrapper}>
      {/* <Burger /> */}
      <nav className={navClassName}>
        <Link to="/">
          <img src={logo} width="200px" alt="Orna_logo" />
        </Link>
        <Link to="/" delay="200">
          ראשי
        </Link>
        {/* TODO: send this to the treatment area */}
        <Link className={styles.dropDown} delay="400">
          טיפולים
          <div className={styles.hiddenDropDown}>{treatmentsMenu}</div>
        </Link>
        <Link to="booking" delay="600">
          קביעת תור
        </Link>
        <Link to="about" delay="600">
          עלינו
        </Link>
        <Link to="contact" delay="800">
          צרי קשר
        </Link>
        <PhoneIcon icon={phone} text={PHONE_NUMBER} className={styles.icon} />
      </nav>
      {children}
    </div>
  );
};

export default Nav;
