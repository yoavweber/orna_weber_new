import * as React from "react";
import styled from "@emotion/styled";

import {
  Banner,
  Form,
  IconText,
  List,
  TextBlocks,
  IconBox,
  PlainText,
} from "../../layout/components";
import soaps from "../../layout/assets/icons/soaps.svg";
import male from "../../layout/assets/icons/male.svg";
import female from "../../layout/assets/icons/female.svg";
import girl from "../../layout/assets/icons/girl.svg";
import { H1, Space } from "../../layout/common";

// import styles from "./antiAge/antiAge.module.scss";

const HairRemoval = () => {
  //-----Banner data-------------
  const bannerContent = {
    headline: `אומרים "להתראות" לשיערות הסוררות`,
    img: "hairBanner.png",
    buttonText: "לגוף חלק",
  };

  // ------------- icon text data

  // ------------- list data
  const listHeadline = ` כדי לאפשר לך ליהנות מגוף חלק, אנחנו בקליניקה עושים שימוש
  :המתקדם מסוגו, עם כל היתרונות הנלווים- IPL במכשור ה`;
  const listData = [
    {
      text: `תוצאות מהטיפול הראשון`,
    },
    {
      text: `תוצאות מהירות בהרבה ביחס לטיפולים אחרים`,
    },
    {
      text: `טכנולוגיה בטוחה מאוד`,
    },
    {
      text: `טיפול מהיר ונטול כאב`,
    },
    {
      text: `הסרת שיער בכל ימות השנה`,
    },
    {
      text: `טיפול במגוון רחב של גווני עור ושיער`,
    },
    {
      text: `שילובים טיפוליים בלתי שגרתיים המותאמים
        .לעורך, בשיטת ביוטי פיוז'ן`,
    },
  ];

  //-------icon text after the list
  const secondIconHeadline = `הגורם המכריע בהצלחת טיפולי הסרת שיער`;
  const secondIconFirstText = ` לא יניב את התוצאה הרצויה, בהיעדר בניית IPL גם המכשיר המתקדם ביותר להסרת שיער בשיטת
  תכנית טיפול המותאמת למאפיינים הייחודיים שלך, דוגמת עובי וצבע השערה, גוון העור, מחזוריות
  הצמיחה של השערה – לכל אלו משמעות גדולה בהצלחת הטיפול. לשם המחשה, שימוש בעוצמת
 , אור נמוכה מדי ביחס למה שהשיער צריך בשל דיוק, עלול להוביל לתוצאה הפוכה: במקום גוף חלק
 .נקבל צמיחה מוגברת באזור הטיפול`;
  const secondIconSecondText = ` גם לאזור בגוף יש השפעה על אופי הטיפול: כך למשל הסרת שיער באזור הכתפיים והצוואר תהיה שונה מהסרת שיער מאזורים אחרים, בשל השוני במבנה השערה ובשל השפעות הורמונאליות
 מתוך הבנה זו יצרנו את שיטת ביוטי פיוז'ן (קישור לדף השיטה) שיטה הכוללת בניית תכנית טיפול ייחודית המותאמת  לצרכים והמאפיינים הייחודיים שלך: מהגיל, המצב הבריאותי וגוון העור – ועד צבע השערה. לאחר שנבנה תכנית טיפול .מותאמת אישית נוציא אותה אל הפועל בדיוק מרבי, באמצעות מומחיות שצברנו לאורך 35 שנות עשייה`;
  const secondIconObject = {
    headline: secondIconHeadline,
    icon: soaps,
    firstText: secondIconFirstText,
    secontText: secondIconSecondText,
  };

  // --------- icon box data -------------------
  const iconBoxHeadline = "למי זה מיועד?";
  const iconBoxFootline = "וכל מי שרוצה ליהנות מגוף חלק";
  const iconBoxObject = {
    headline: iconBoxHeadline,
    icons: [
      { src: male, text: "גברים" },
      { src: female, text: "נשים" },
      { src: girl, text: "נערות" },
    ],
    footline: iconBoxFootline,
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
        <List headline={listHeadline} data={listData} />
        <Space />
        <IconText
          headline={secondIconObject.headline}
          headlineColor="green"
          icon={secondIconObject.icon}
          firstPartText={secondIconObject.firstText}
          secondPartText={secondIconObject.secontText}
        />
        <IconBox data={iconBoxObject} />
        <Space />
        <PlainText headline={plainTextHeadline} text={plainTextBody} />
        <Space />
        <FinalTextWrapper>
          <H1
            style={{
              width: "60%",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            {finalText}
          </H1>
        </FinalTextWrapper>
      </main>

      <Space />
      <Form headline="רוצה להיפרד מהשיער המיותר?" buttonText="לגוף חלק" />
    </div>
  );
};

export default HairRemoval;
