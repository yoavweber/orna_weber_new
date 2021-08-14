import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

import PhoneIcon from "../../icon/Icon";
import { PHONE_NUMBER } from "../../../config";
import logo from "../../../assets/logo.svg";
import phone from "../../../assets/phone.svg";
import { TreatmentMenu } from "../Nav";
import Burger from "./Burger";

import styles from "../nav.module.scss";

// based on: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

function useClickOutside(buttonDomElement, elRef, callback) {
  // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  // https://www.youtube.com/watch?v=J-g9ZJha8FE&t=481s&ab_channel=JSConf
  const callbackRef = useRef();
  callbackRef.current = callback;
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !elRef?.current?.contains(e.target) &&
        !e.path.includes(buttonDomElement) &&
        callbackRef.current
      ) {
        callbackRef.current(e);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callbackRef, elRef]);
}

const Menu = ({ links }) => {
  const [showTreatmentMenu, setShowTreatmentMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const hide = () => setOpen(false);

  const buttonRef = useRef();
  const wrapperMobileNavRef = useRef();
  const buttonDomElement = buttonRef?.current?.base;
  if (buttonDomElement) {
    useClickOutside(buttonDomElement, wrapperMobileNavRef, hide);
  }

  const LinkMenu = links.map((node) => {
    if (typeof node.link != "string") {
      return (
        <a
          delay="400"
          style={{ cursor: "pointer" }}
          onClick={() => setShowTreatmentMenu(!showTreatmentMenu)}
        >
          <span className={styles.styledSpan}> טיפולים</span>
          <div className={styles.mobileDropDown} data-click={showTreatmentMenu}>
            <TreatmentMenu toggle={toggle} />
          </div>
        </a>
      );
    }
    return (
      <Link to={node.link} onClick={toggle} onBlur={hide}>
        <span className={styles.styledSpan}>{node.name}</span>
      </Link>
    );
  });
  return (
    <>
      <nav className={styles.mobileWrapper}>
        <div className={styles.burger}>
          <Burger open={open} setOpen={setOpen} ref={buttonRef} />
          <div
            className={styles.mobileMenu}
            data-showMenu={open}
            ref={wrapperMobileNavRef}
          >
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
