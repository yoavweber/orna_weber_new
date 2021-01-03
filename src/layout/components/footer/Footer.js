// import React, { useEffect, useState } from 'react'
import React from "react";
import { Link } from "gatsby";

// import logo from "../../assets/logo.svg";
import Icon from "../phone/Phone";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import instegram from "../../assets/instegram.svg";
import facebook from "../../assets/facebook.svg";
import { PHONE_NUMBER, ADDRESS } from "../../config";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.contact}>
        <div className={styles.contactsIcons}>
          <Icon icon={phone} text={PHONE_NUMBER} />
          <Icon icon={location} text={ADDRESS} />
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaIcons}>
          <Icon icon={instegram} />
          <Icon icon={facebook} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
