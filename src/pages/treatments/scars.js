import * as React from "react";
import styled from "@emotion/styled";

import {
  Banner,
  Form,
  IconText,
  List,
  TextBlocks,
  IconBox,
  PicText,
  PlainText,
} from "../../layout/components";
import soap_cross from "../../layout/assets/icons/soap_cross.svg";
import male from "../../layout/assets/icons/male.svg";
import female from "../../layout/assets/icons/female.svg";
import girl from "../../layout/assets/icons/girl.svg";
import { H1, Space } from "../../layout/common";

// import styles from "./antiAge/antiAge.module.scss";

//TODO: get the data from the CMS
const Scars = () => {
  //-----Banner data-------------
  const bannerContent = {
    headline: `!לא חייבים להשלים עם הצלקת`,
    img: "scarsBanner.png",
    buttonText: "לפרטים נוספים",
  };

  // ------------- icon text data

  const rawFirstText = `
  . מי שסובל מצלקת יודע שכל יציאה מהבית או מבט במראה, יכולים להפוך להתמודדות בפני עצמה
  החל מהצקות מהן סובלים בני נוער בעקבות צלקות פוסט אקנה ועד מבוגרים שהצלקת מותירה אותם
  חסרי ביטחון. וכך הצלקת חודרת לא רק לשכבות העמוקות של העור, אלא גם לנבכי הנשמה. זאת עוד
  לפני שהזכרנו תופעות כמו כאב או גרד שפוגעים בתפקוד היומיומי. החדשות הטובות: טכנולוגיות
 .חדישות מאפשרות לנו לטשטש את הצלקות – ואת החוויות הלא נעימות שמתלוות אליהן    `;

  const headline = `מכשור חדשני וקומבינציות טיפוליות המותאמות לעורך יאפשרו לך סופסוף להיפרד מהצלקת (הפיזית והרגשית)`;
  const textContent = {
    headline: headline,
    icon: soap_cross,
    firstPartText: rawFirstText,
  };

  // ------------- round picture
  const roundPicHeadline = " למה בעצם נוצרה צלקת?";
  const roundPicText = ` צלקת היא דרכו של העור לבשר בפומבי על תהליך ריפוי פצע שהסתבך. הצלקות
  עשויות להופיע בפגיעות החודרות את שכבת העור העליונה ומגיעות לרקמות
  נוספות בעומק העור. הצלקות נגרמות בעקבות טראומה כגון כוויה או חתך, או
 . פרוצדורות רפואיות דוגמת ניתוחים
  כמובן שגם מחלת עור דוגמת אקנה, בהיעדר הטיפול המתאים, עלולה להוביל
  לדלקתיות קשה שמגיעה לעומק העור ומותירה חטטים וצלקות פוסט אקנה. ישנם
 .מגוון סוגים שונים של צלקות אקנה, כל סוג מצריך מענה שונה`;

  const roundPicName = "scarsRound.png";

  const roundPicObject = {
    headline: roundPicHeadline,
    text: roundPicText,
    desktopPicName: roundPicName,
  };
  //----------------------list data ------------------
  const listHeadline = ` איך נסייעה לך לטשטש צלקות?`;
  const listData = [
    {
      text: `שימוש בטכנולוגיוה חדשנית בעלת תוצאות מוכחות`,
    },
    {
      text: `מקסום האפקט הטיפולי בשיטת ביוטי פיוז'ן`,
    },
    {
      text: `ידע וניסיון מצטבר של למעלה מ- 3 עשורים`,
    },
    {
      text: `ללא תופעות לוואי`,
    },
    {
      text: `זמן החלמה קצר`,
    },
  ];

  // --------- icon box data -------------------
  const blockList = [
    {
      headline: "הדרך היעילה לטיפול בצלקות",
      text: `
    תכשירים שפותחו לאורך השנים לצורך טיפול בצלקות התקשו לייצר תוצאות משמעותיות, בין היתר
    בשל העובדה שהצלקת משפיעה על רקמות בשכבת הדרמיס (השכבה הפנימית של העור). בעקבות
    הבנה טובה יותר של תהליכי ריפוי הפצע, הגיחו לאוויר העולם טכנולוגיות המגיעות לעומק העור
   ?ומאפשרות לטשטש את הצלקות ביעילות. איזו מהן עדיפה
   \n
   \n
   מוביל לשיקום משמעותי של העור – (Fractora) בשונה מטכנולוגיות אחרות, טיפול בשיטת הפרקטורה
   בזמן החלמה קצר וללא תופעות לוואי. טיפול בשיטת הפרקטורה מסייע לטשטוש הצלקת, פועל לשיפור
  .מרקמה ומקנה לרקמת הצלקת מראה של עור בריא

  \n

  טכנולוגיה זו מבוססת על גלי רדיו, מעבירה אנרגיית חום לעומק העור דרך מחטים זעירות  ומובילה
  להיווצרות מוגברת של קולגן ואלסטין. באופן זה מואץ תהליך חידוש העור והדרך לטשטוש הצלקת הולך
 . ומתקצר
  אך הטכנולוגיה לבדה לא מספיקה: לכל צלקת ולכל מטופל יש להתאים תמהיל טיפול מדויק הכולל
  שימוש במכשור, בתכשירים ובתכנית הטיפול המתאימה. בדיוק לשם כך פיתחנו את שיטת ביוטי פיוז'ן
  המבוססת על יצירת שילובים טיפוליים ייחודיים עבור כל מטופל. יצירת שילוב בלתי שגרתי המותאם
 .לעור המיוחד שלך, יוביל לטשטוש הצלקת ביעילות מרבית

   `,
    },
  ];

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
        <IconText data={textContent} />
        <Space />
        <PicText data={roundPicObject} />
        <Space />
        <TextBlocks data={blockList} />
        <List headline={listHeadline} data={listData} />

        <Space />
      </main>
      <Space />
      <Form headline="רוצה להגיד להתראות לצלקת?" buttonText="לפרטים נוספים" />
    </div>
  );
};

export default Scars;
