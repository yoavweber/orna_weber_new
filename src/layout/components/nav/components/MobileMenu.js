import React, { useState } from "react";
import { Link } from "gatsby";

import PhoneIcon from "../../icon/Icon";
import { PHONE_NUMBER } from "../../../config";
import logo from "../../../assets/logo.svg";
import phone from "../../../assets/phone.svg";
import { TreatmentMenu } from "../Nav";
import Burger from "./Burger";

import styles from "../nav.module.scss";

// based on: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const Menu = ({ links }) => {
  const [showSubMenu, setShowSubMen] = useState(false);
  const [open, setOpen] = useState(false);

  const LinkMenu = links.map((node) => {
    if (typeof node.link != "string") {
      return (
        <a
          delay="400"
          style={{ cursor: "pointer" }}
          onClick={() => setShowSubMen(!showSubMenu)}
        >
          <span className={styles.styledSpan}> טיפולים</span>
          <div className={styles.mobileDropDown} data-click={showSubMenu}>
            {TreatmentMenu}
          </div>
        </a>
      );
    }
    return (
      <Link to={node.link}>
        <span className={styles.styledSpan}>{node.name}</span>
      </Link>
    );
  });

  return (
    <>
      <nav className={styles.mobileWrapper}>
        <div className={styles.burger}>
          <Burger open={open} setOpen={setOpen} />
          <div className={styles.mobileMenu} data-showMenu={open}>
            {LinkMenu}
          </div>
          <div className={styles.mobileLogo}>
            <Link to="/">
              <img src={logo} width="200px" alt="ביוטי פיוזן לוגו" />
            </Link>
          </div>
          <div className={styles.mobileNumber}>
            <PhoneIcon
              icon={phone}
              text={PHONE_NUMBER}
              className={styles.icon}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
