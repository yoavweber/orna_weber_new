import * as React from "react";
import { Banner, Form, IconText, List } from "../../layout/components";
import bag from "../../layout/assets/icons/bag.svg";
import antiBottle from "../../layout/assets/icons/antiBottle.svg";
import { H1 } from "../../layout/common";

import styles from "./antiAge.module.scss";

const AntiAge = () => {
  //------------banner data
  const content = {
    headline: "מעיין הנעורים הפרטי שלך",
    img: "antiaging.png",
    buttonText: "לעור בריא וחיוני",
  };

  // -------------- icon text data
  const rawFirstText = `
  לקנות את הטלפון הכי חדש או את הבגד הכי אופנתי זה נחמד. אבל לפעמים, אנחנו פשוט
  רוצות להחזיר עטרה ליושנה – ולהרגיש צעירות יותר בעשר שנים כשאנחנו מביטות במראה. אך ?מה עושים כשלגיל הביולוגי שלנו יש תכניות משלו
    `;

  const rawSecondText = `
    החדשות הטובות: המקור של חלק ניכר מהנזקים בעור אינו נעוץ רק בהתבגרות הביולוגית, אלא באורח החיים שמוביל להזדקנות מוקדמת של העור, וכולל חשיפה לשמש, זיהום אוויר, עישון, מתח, תזונה לא נכונה ועוד. בהזדקנות המוקדמת הזו אפשר לטפל – גם באמצעות טיפול בנזקים קיימים שכבר הצטברו בעור, וגם באמצעות תחזוק העור ומניעת נזקים עתידיים
    `;

  const textContent = {
    headline:
      " .הטיפולים שיאפשרו לך להיראות ולהרגיש צעירה, באמצעות שילובים בלתי שגרתיים המותאמים לך – ורק לך",
    icon: bag,
    firstText: rawFirstText,
    secontText: rawSecondText,
  };

  const headline = `כאן נכנסים לתמונה
  טיפולי אנטי אייג'ינג שנועדו לעכב את תהליך הזדקנות העור
 ולשפר את בריאותו ומראהו`;
  // ----------- icon text second part data
  const SecondText = () => {
    const rawFirstText2 = `
    אין טיפול או תכשיר קסם אחד שפותרים את כל הבעיות ומייצרים תוצאות. יתרה מכך, אותו הטיפול
    בדיוק יוביל לתוצאות שונות אצל כל אחת, בהתאם למאפיינים התורשתיים, הסביבתיים, הבריאותיים
    והנפשיים שלה. חוסר ההתאמה לעור הוא זה שיוצר פעמים רבות אכזבה מתכשירים או מטיפולי
   .מדף, ולעיתים אף מוביל לתופעות לוואי ורגישויות
      `;
    const rawSecondText2 = `  מתוך הבנה זו טיפולי האנטי אייג'ינג אצלנו בקליניקה מבוססים על שיטת ביוטי פיוז'ן (קישור לדף השיטה): שילובים
    בלתי שגרתיים של טכנולוגיות, תכשירים ופרוטוקולי טיפול המותאמים ב- 100% לך – ורק לך. שילובים שמובילים
   .להצערת העור ולמקסום האפקט הטיפולי`;

    const textContent2 = {
      headline: " לא כל טיפול אנטי אייג'ינ מתאים לך",
      icon: antiBottle,
      firstText: rawFirstText2,
      secontText: rawSecondText2,
    };

    return (
      <>
        <IconText
          headline={textContent2.headline}
          headlineColor="green"
          icon={textContent2.icon}
          firstPartText={textContent2.firstText}
          secondPartText={textContent2.secontText}
        />
      </>
    );
  };

  // ------- list data
  const listHeadline = "?איך נסייע לך להצעיר את המראה";
  const listData = [
    {
      boldText: `הצערת העור ומקסום האפקט הטיפולי –`,
      text: `שילובים טיפוליים בלתי שגרתיים המותאמים
      .לעורך, בשיטת ביוטי פיוז'ן`,
    },
    {
      boldText: `!קיצור זמני הטיפול בעשרות אחוזים – `,
      text: `מתחילות לראות תוצאות מהטיפול הראשון`,
    },
    {
      boldText: `טכנולוגיות חדשניות - `,
      text: `ששפועלת בעומק העור ומבוילות לתוצאות הטובות ביותר. שימוש במכשור המתקדם בעולם, המבוסס על מחקרים קלייים ועל הצלחות בינ"ל`,
    },
    {
      boldText: `הטוב ביותר עבורך –`,
      text: `שימוש בתכשירים של המותגים הידועים בעולם`,
    },
    {
      boldText: `35 שנות ניסיון –`,
      text: `בשירות העור שלך!`,
    },
  ];

  return (
    <>
      <Banner
        headline={content.headline}
        img={content.img}
        buttonText={content.buttonText}
      />
      <main>
        <div className={styles.text}>
          <IconText
            headline={textContent.headline}
            icon={textContent.icon}
            firstPartText={textContent.firstText}
          />
          <p>{rawSecondText}</p>
          <H1
            style={{
              textAlign: "center",
              width: "50%",
              margin: "calc(10px + 3vw) auto",
            }}
          >
            {headline}
          </H1>
        </div>
        <SecondText />
        <List headline={listHeadline} data={listData} />
      </main>
    </>
  );
};

export default AntiAge;
