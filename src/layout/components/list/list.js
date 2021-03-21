import React from "react";
import { H2 } from "../../common";
import miniLogo from "../../assets/miniLogo.svg";

import styles from "./list.module.scss";

const List = ({ data }) => {
  const { headline, listElement } = data;
  const listComponent = listElement.map((listElement) => {
    return (
      <li className={styles.listItem}>
        <img src={miniLogo} />{" "}
        <p>
          <span style={{ color: "#85b240" }}>{listElement.bold} </span>
          {listElement.text}
        </p>
      </li>
    );
  });
  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <H2 largeSpace="true" styles={{ fontWight: "500" }}>
          {headline}
        </H2>
        <ul>{listComponent}</ul>
      </div>
    </section>
  );
};

export default List;
