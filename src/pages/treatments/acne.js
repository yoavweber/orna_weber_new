import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import { Banner, Form, IconText, TextBlocks } from "../../layout/components";
import { H1, Space } from "../../layout/common";

const Acne = () => {
  const data = useStaticQuery(query);
  const { strapiAcne } = data;
  const { BlockText, firstIconText, secondIconText, form } = strapiAcne;

  //-----Banner data-------------
  //TODO: change to CMS and add the second headline here
  const bannerContent = {
    headline: `שזה לא יתפוצץ לך בפנים`,
    img: "acneBanner.png",
    buttonText: "לטיפול יעיל באקנה",
  };

  // -------------- plain text
  const plainTextHeadline = "?כמה טיפולים אצטרך";
  const plainTextBody = `  התשובה משתנה בהתאם לגודלו של אזור הטיפול, מאפייניו, צפיפות השיער ועוד. טווח הטיפולים נע לרוב בים 8-15
  .טיפולים, כאשר ניתן לראות תוצאות משמעותיות בין טיפול לטיפול`;

  const FinalTextWrapper = styled.div`
    @media (max-width: 800px) {
      background-color: #f8f9f6;
    }
  `;
  const finalText = `באמצעות בניית תכנית  טיפול מותאמת אישית 
  ויישומה בדיוק מרבי, נאפשר גם לך ליהנות מגוף חלק.`;
  return (
    <div>
      <Banner
        headline={bannerContent.headline}
        img={bannerContent.img}
        buttonText={bannerContent.buttonText}
      />
      <main>
        <Space />
        <IconText data={firstIconText} />
        <IconText data={secondIconText} />
        <Space />
        {/* TODO: change the headline color to green */}
        <TextBlocks content={BlockText} />
      </main>
      <Space />
      <Form headline={form.headline} buttonText={form.button} />
    </div>
  );
};

const query = graphql`
  query {
    strapiAcne {
      form {
        button
        headline
        id
      }
      BlockText {
        data {
          headline
          id
          text
        }
        headline
      }
      firstIconText {
        firstPartText
        icon {
          id
          url
        }
      }
      secondIconText {
        firstPartText
        reverse
        icon {
          id
          url
        }
      }
    }
  }
`;

export default Acne;
