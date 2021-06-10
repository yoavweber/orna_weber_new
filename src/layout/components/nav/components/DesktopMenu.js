import React from "react";
import { Link } from "gatsby";

import PhoneIcon from "../../icon/Icon";
import { PHONE_NUMBER } from "../../../config";
import logo from "../../../assets/logo.svg";
import phone from "../../../assets/phone.svg";
import { TreatmentMenu } from "../Nav";

import styles from "../nav.module.scss";

const DesktopMenu = ({ links }) => {
  const LinkMenu = links.map((node) => {
    if (typeof node.link != "string") {
      return (
        <Link className={styles.dropDown}>
          {node.name}
          <div className={styles.hiddenDropDown}>{TreatmentMenu}</div>
        </Link>
      );
    }
    return <Link to={node.link}>{node.name}</Link>;
  });

  return (
    <nav className={styles.desktopNav}>
      <Link to="/">
        <img src={logo} width="200px" alt="Orna_logo" />
      </Link>
      {LinkMenu}
      <PhoneIcon icon={phone} text={PHONE_NUMBER} className={styles.icon} />
    </nav>
  );
};

export default DesktopMenu;
