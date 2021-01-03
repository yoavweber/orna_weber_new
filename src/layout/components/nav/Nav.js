// import React, { useEffect, useState } from 'react'
import React from "react";
import { Link } from "gatsby";

import PhoneIcon from "../phone/Phone";
import { PHONE_NUMBER } from "../../config";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";

import { classNames } from "../../../utils/classNames";
import styles from "./nav.module.scss";

const Nav = ({ children }) => {
  const navClassName = classNames(styles.desktopNav, styles.nav);
  return (
    <div className={styles.wrapper}>
      <nav className={navClassName}>
        <Link to="/">
          <img src={logo} width="100px" alt="Orna_logo" />
        </Link>
        <Link to="/" delay="200">
          ראשי
        </Link>
        <Link to="hair" delay="400">
          טיפולים
        </Link>
        <Link to="booking" delay="600">
          קביעת תור
        </Link>
        <Link to="whyUs" delay="600">
          עלינו
        </Link>
        <Link to="contact" delay="800">
          צרי קשר
        </Link>
        <PhoneIcon icon={phone} text={PHONE_NUMBER} />
      </nav>
      {children}
    </div>
  );
};

export default Nav;
