import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";

import getFluid from "../../../../utils/getFluid";

import { H1 } from "../../../../layout/common";
import sink from "../../../../layout/assets/icons/sink.svg";
import needle from "../../../../layout/assets/icons/needle.svg";

import styles from "./treatments.module.scss";

//https://erikmartinjordan.com/parent-child-height-width-react-hooks
const Treatments = () => {
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState();
  // TODO: use the strapi api and not gatsby
  const imageNames = [
    { key: 1, href: "/treatments/acne/", imgName: "acne.png", name: "אקנה" },
    {
      key: 2,
      href: "/treatments/antiAge/",
      imgName: "antiAge.png",
      name: "אנטי-אייג'ינג",
    },
    {
      key: 3,
      href: "/treatments/hairRemoval/",
      imgName: "hairRemoval.png",
      name: "הסרת שיער",
    },
    {
      key: 4,
      href: "/treatments/scars/",
      imgName: "scars.png",
      name: "טשטוש צלקות",
    },
    {
      key: 5,
      href: "#",
      imgName: "pigmentationTreatment.png",
      name: "פיגמנטציה",
    },
  ];

  const headline = "הטיפולים שלנו";

  const sliderWrapperRef = useRef(null);
  useEffect(() => {
    if (sliderWrapperRef.current) {
      let sliderWidth = sliderWrapperRef.current.offsetWidth;
      setSliderWrapperWidth(sliderWidth);
    }
  }, [sliderWrapperRef]);

  const treatmentBubble = imageNames.map((node) => {
    const fluid = getFluid(node.imgName);
    return (
      <a key={node.key} href={node.href} className={styles.bubblesWrapper}>
        <Img fluid={fluid} Tag="div" className={styles.bubble} />
        <span style={{ fontSize: "1rem" }}>{node.name}</span>
      </a>
    );
  });
  console.log(sliderWrapperWidth, "!!!");
  return (
    <section className={styles.wrapper}>
      <div>
        <img src={sink} alt="treatment icon" className={styles.icon} />
      </div>
      <div className={styles.contentWrapper} ref={sliderWrapperRef}>
        <H1>{headline}</H1>
        <div className={styles.treatmentWrapper}>{treatmentBubble}</div>
        {/* {customMobile(1000) ? (
          treatmentBubble
        ) : (
          <Slider
            content={treatmentBubble}
            width={sliderWrapperWidth}
            showElements={4}
            autoPlay={2000}
          />
        )} */}
      </div>
      <div>
        <img src={needle} alt="treatment icon" className={styles.icon} />
      </div>
    </section>
  );
};

export default Treatments;
