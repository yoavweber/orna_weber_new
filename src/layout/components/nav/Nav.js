import React, { useState } from "react";
import { Link } from "gatsby";

import PhoneIcon from "../icon/Icon";
import { PHONE_NUMBER } from "../../config";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";

import { classNames } from "../../../utils/classNames";
import { isMobile } from "../../../utils/isMobile";
import Burger from "./components/Burger";
import Menu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";

import styles from "./nav.module.scss";
import styled from "@emotion/styled";

const StyledSpan = styled.span`
  color: white;
  margin: 1rem 0;

  cursor: pointer;
  &:hover {
    font-weight: 600;
    border-bottom: 1px white solid;
  }
`;

const StyledDesktop = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  a {
    color: #555556;
    font-size: 1.2rem;
  }
  .icon {
    span {
      color: $green;
    }
  }

  .dropDown {
    position: relative;
    .hiddenDropDown {
      display: none;
    }
    &:hover {
      border-bottom: 1px $green solid;
    }
    &:hover > * {
      display: block;
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 1rem 1.3rem 1.5rem;
      background-color: $green;
      z-index: 1000;
    }
  }
`;

const Nav = ({ children }) => {
  // TODO: move all of the desktop parts to its on comopnent
  // the problem is what to do with the classname, one solution could be to follow the mobileMenu design
  const [open, setOpen] = useState(false);

  const navClassName = classNames(styles.desktopNav, styles.nav);

  const treatments = [
    { name: "טיפולי אנטי אייג'נג", link: "/treatments/antiAge" },
    { name: "טיפולי פיגמנטציה", link: "/treatments/pigmentation" },
    { name: "טיפולי אקנה", link: "/treatments/acne" },
    { name: "טשטוש צלקות", link: "/treatments/scars" },
    { name: "הסרת שיער", link: "/treatments/hairRemoval" },
  ];
  const TreatmentMenu = treatments.map((node) => {
    return (
      <Link to={node.link}>
        <StyledSpan>{node.name}</StyledSpan>
      </Link>
    );
  });

  const LinkMenu = ({ children }) => {
    return (
      <>
        <Link to="/">
          <img src={logo} width="200px" alt="Orna_logo" />
        </Link>
        <Link to="/" delay="200">
          ראשי
        </Link>
        {/* TODO: send this to the treatment area */}
        <Link className={styles.dropDown} delay="400">
          טיפולים
          <div className={styles.hiddenDropDown}>{children}</div>
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
      </>
    );
  };

  return (
    <nav className={styles.wrapper}>
      {isMobile(900) ? (
        <div className={styles.mobileWrapper}>
          <div className={styles.burger}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open}>{TreatmentMenu}</Menu>
          </div>
        </div>
      ) : (
        <div className={navClassName}>
          <LinkMenu>{TreatmentMenu}</LinkMenu>
        </div>
      )}
      {children}
    </nav>
  );
};

export default Nav;
