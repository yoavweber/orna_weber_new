import React, { useRef, useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { H1 } from "../../../../layout/common";
import sink from "../../../../layout/assets/icons/sink.svg";
import needle from "../../../../layout/assets/icons/needle.svg";

import styles from "./treatments.module.scss";

//https://erikmartinjordan.com/parent-child-height-width-react-hooks
const Treatments = ({ data }) => {
  // INFO: this part is for the slider which is currently unused
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState();
  const sliderWrapperRef = useRef(null);
  useEffect(() => {
    if (sliderWrapperRef.current) {
      let sliderWidth = sliderWrapperRef.current.offsetWidth;
      setSliderWrapperWidth(sliderWidth);
    }
  }, [sliderWrapperRef]);

  if (!data) {
    // TODO: change to data handler
    return <div>loading...</div>;
  }
  const { headline, bubble } = data;

  const treatmentBubble = bubble.map((node) => {
    const fluid = node.image.localFile.childImageSharp?.gatsbyImageData;
    return (
      <a key={node.key} href={node.link} className={styles.bubblesWrapper}>
        <GatsbyImage image={fluid} className={styles.bubble} />
        <span style={{ fontSize: "1rem" }}>{node.name}</span>
      </a>
    );
  });
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
