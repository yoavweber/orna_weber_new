import React from "react";
import Img from "gatsby-image";

import getFluid from "../../../../utils/getFluid";

import { H1 } from "../../../../layout/common";
import sink from "../../../../layout/assets/icons/sink.svg";
import needle from "../../../../layout/assets/icons/needle.svg";
import styles from "./treatments.module.scss";

const Treatments = () => {
  const imageNames = [
    { key: 1, href: "#", imgName: "acne.png", name: "אקנה" },
    { key: 2, href: "#", imgName: "antiAging.png", name: "אנטי-אייג'ינג" },
    { key: 3, href: "#", imgName: "hairRemoval.png", name: "הסרת שיער" },
    { key: 4, href: "#", imgName: "scars.png", name: "טשטוש צלקות" },
    {
      key: 4,
      href: "#",
      imgName: "pigmentationTreatment.png",
      name: "פיגמנטציה",
    },
  ];

  const headline = "הטיפולים שלנו";

  const treatmentBubble = imageNames.map((node) => {
    const fluid = getFluid(node.imgName);
    return (
      <a key={node.key} href={node.href} className={styles.bubblesWrapper}>
        <Img fluid={fluid} Tag="div" className={styles.bubble} />
        <span>{node.name}</span>
        {/* <div className={styles.bubbleWrapper}>
          <Img fluid={fluid} Tag="div" />
        </div> */}
      </a>
    );
  });

  return (
    <section className={styles.wrapper}>
      {/* <div className={styles.testing}> */}
      <img src={sink} className={styles.icon} />
      <div className={styles.contentWrapper}>
        <H1>{headline}</H1>
        <div className={styles.content}>{treatmentBubble}</div>
      </div>
      <img src={needle} className={styles.icon} />
      {/* </div> */}
    </section>
  );
};

export default Treatments;
