// import React, { useEffect, useState } from 'react'
import React from "react";

import { classNames } from "../../../utils/classNames";
import phone from "../../assets/phone.svg";

import styles from "./icon.module.scss";

const PhoneIcon = ({ icon, text, className }) => {
  const textClass = classNames(styles.text, styles.item);
  const wrapperClass = classNames(styles.wrapper, className);
  return (
    <div className={wrapperClass}>
      <img src={icon} className={styles.item} />
      <span className={textClass}>{text}</span>
    </div>
  );
};

export default PhoneIcon;
