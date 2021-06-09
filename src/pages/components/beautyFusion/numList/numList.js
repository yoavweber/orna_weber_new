import React from "react";
import { H1 } from "../../../../layout/common";

import styles from "./numlist.module.scss";

const NumList = ({ data }) => {
  if (!data) {
    // TODO: return 404 page
    return <div>error</div>;
  }
  const { headline, listElement } = data;

  const listComponent = listElement.map((listElement, index) => {
    return (
      <li num={index}>
        <p>
          <span style={{ color: "#85b240", fontWeight: "bold" }}>
            {listElement.bold}{" "}
          </span>
          <br />
          {listElement.text}
        </p>
      </li>
    );
  });
  return (
    <section className={styles.section}>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <H1 largeSpace="true" bold="true">
          {headline}
        </H1>
        <ol>{listComponent}</ol>
      </div>
    </section>
  );
};

export default NumList;
