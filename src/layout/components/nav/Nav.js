import React from "react";
import { Link } from "gatsby";

import MobileNav from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";

import styles from "./nav.module.scss";

const treatments = [
  { name: "טיפולי אנטי אייג'נג", link: "/treatments/antiAge/" },
  { name: "טיפולי פיגמנטציה", link: "/treatments/pigmentation/" },
  { name: "טיפולי אקנה", link: "/treatments/acne/" },
  { name: "טשטוש צלקות", link: "/treatments/scars/" },
  { name: "הסרת שיער", link: "/treatments/hairRemoval/" },
];

export const TreatmentMenu = treatments.map((node) => {
  return (
    <Link to={node.link}>
      <span className={styles.styledSpan}>{node.name}</span>
    </Link>
  );
});

export const Nav = ({ children }) => {
  const navLinks = [
    { name: "ראשי", link: "/" },
    { name: "טיפולים", link: TreatmentMenu },
    { name: "על השיטה", link: "/beautyFuison/" },
    { name: "עלינו", link: "/about/" },
    { name: "צרי קשר", link: "/contact/" },
  ];

  return (
    <>
      <MobileNav links={navLinks} />
      <DesktopMenu links={navLinks} />
      {children}
    </>
  );
};

export default Nav;
