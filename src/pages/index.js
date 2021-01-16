import * as React from "react";

import { Banner, Form } from "../layout/components";
import BackgroundImage from "../layout/components/Img";
import pigmentation from "../layout/assets/icons/pigmentation.svg";
// import Test from "../layout/components/BackgroundImage";
import Treatments from "./components/homePage/treatments/treatments";
import Slider from "./components/homePage/slider/slider";
// import IntroText from "./components/homePage/introText/introText";

const Homepage = () => {
  console.log(BackgroundImage);
  // const images = [pigmentation, pigmentation, pigmentation];

  const images = [
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  ];
  const content = [
    {
      headline: "הכתמים לא עוזבים?",
      text: "טיפולי פיגמנטציה בהתאמה מלאה לעור המיוחד שלך ",
      img: "pigmentation.png",
      buttonText: "לטיפול מוכח ויעיל",
      icon: pigmentation,
    },
    {
      headline: "המרכז לקוסמטיקת פיוז'ן",
      text: "שילוב מיוחד לכל אחת ",
      img: "beautyFusion.png",
      buttonText: "לשילוב המיוחד שלך",
      icon: pigmentation,
    },
    {
      headline: "מעיין הנעורים הפרטי שלך",
      text: "השילובים שיאפשרו לך להיראות ולהרגיש צעירה ",
      img: "antiaging.png",
      buttonText: "קחו אותי למעיין הנעורים",
      icon: pigmentation,
    },
  ];
  return (
    <>
      <Banner
        headline="הכתמים לא עוזבים?"
        text="טיפולי פיגמנטציה בהתאמה מלאה לעור המיוחד שלך "
        img="pigmentation.png"
        textStyle={{ display: "flex", color: "green" }}
        buttonText="לטיפול מוכח ויעיל"
        icon={pigmentation}
      />
      <Slider content={content} />
      <Treatments />
      <Form />
      {/* <Test /> */}
      {/* <IntroText /> */}
    </>
  );
};

export default Homepage;
