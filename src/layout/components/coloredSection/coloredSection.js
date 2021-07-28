import React, { useRef, useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import getFluid from "../../../../utils/getFluid";

import { H1 } from "../../../../layout/common";
import sink from "../../../../layout/assets/icons/sink.svg";
import needle from "../../../../layout/assets/icons/needle.svg";

import Slider from "../slider/slider";

import styles from "./coloredSection.module.scss";

//https://erikmartinjordan.com/parent-child-height-width-react-hooks
const Treatments = () => {
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState();
  const imageNames = [
    { key: 1, href: "#", imgName: "acne.png", name: "אקנה" },
    { key: 2, href: "#", imgName: "antiAging.png", name: "אנטי-אייג'ינג" },
    { key: 3, href: "#", imgName: "hairRemoval.png", name: "הסרת שיער" },
    { key: 4, href: "#", imgName: "scars.png", name: "טשטוש צלקות" },
    {
      key: 5,
      href: "#",
      imgName: "pigmentationTreatment.png",
      name: "פיגמנטציה",
    },
  ];

  const headline = "הטיפולים שלנו";

  const sliderWrapperRef = useRef(null);
  // let sliderWidth;
  useEffect(() => {
    if (sliderWrapperRef.current) {
      let sliderWidth = sliderWrapperRef.current.offsetWidth;
      setSliderWrapperWidth(sliderWidth);
    } else {
      let sliderWidth = "wrong";
    }
  }, [sliderWrapperRef]);

  const treatmentBubble = imageNames.map((node) => {
    const fluid = getFluid(node.imgName);
    return (
      <a key={node.key} href={node.href} className={styles.bubblesWrapper}>
        <GatsbyImage image={fluid} Tag="div" className={styles.bubble} />
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
      <img
        src={sink}
        className={styles.icon}
        alt="אייקון קישוט לקיליניקה של אורנה ובר"
      />
      <div className={styles.contentWrapper} ref={sliderWrapperRef}>
        <H1>{headline}</H1>
        <Slider
          content={treatmentBubble}
          width={sliderWrapperWidth}
          showElements={3}
          autoPlay={20}
        />
        {/* <div className={styles.content}>{treatmentBubble}</div> */}
      </div>
      <img
        src={needle}
        className={styles.icon}
        alt="אייקון קישוט לקיליניקה של אורנה ובר"
      />
      {/* </div> */}
    </section>
  );
};

export default Treatments;
