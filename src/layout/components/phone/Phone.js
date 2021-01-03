// import React, { useEffect, useState } from 'react'
import React from "react";

import { classNames } from "../../../utils/classNames";
import phone from "../../assets/phone.svg";

import styles from "./icon.module.scss";

const PhoneIcon = ({ icon, text }) => {
  const textClass = classNames(styles.text, styles.item);
  return (
    <div className={styles.wrapper}>
      <img src={icon} className={styles.item} />
      <span className={textClass}>{text}</span>
    </div>
  );
};

export default PhoneIcon;
