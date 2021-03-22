import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";

import getFluid from "../../../../utils/getFluid";

import { H1 } from "../../../../layout/common";
import { isMobile, customMobile } from "../.././../../utils/isMobile";
import sink from "../../../../layout/assets/icons/sink.svg";
import needle from "../../../../layout/assets/icons/needle.svg";

import Slider from "../slider/slider";

import styles from "./treatments.module.scss";

//https://erikmartinjordan.com/parent-child-height-width-react-hooks
const Treatments = () => {
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState();
  const imageNames = [
    { key: 1, href: "#", imgName: "acne.png", name: "אקנה" },
    { key: 2, href: "#", imgName: "antiAge.png", name: "אנטי-אייג'ינג" },
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
        <Img fluid={fluid} Tag="div" className={styles.bubble} />
        <span>{node.name}</span>
      </a>
    );
  });

  return (
    <section className={styles.wrapper}>
      <img src={sink} className={styles.icon} />
      <div className={styles.contentWrapper} ref={sliderWrapperRef}>
        <H1>{headline}</H1>
        {customMobile(1000) ? (
          treatmentBubble
        ) : (
          <Slider
            content={treatmentBubble}
            width={sliderWrapperWidth}
            showElements={3}
            autoPlay={2000}
          />
        )}
      </div>
      <img src={needle} className={styles.icon} />
    </section>
  );
};

export default Treatments;
