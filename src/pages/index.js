import * as React from "react";

import { Banner, Form } from "../layout/components";
import BackgroundImage from "../layout/components/Img";
import pigmentation from "../layout/assets/icons/pigmentation.svg";

const Homepage = () => {
  console.log(BackgroundImage);
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
      <Form />
    </>
  );
};

export default Homepage;
