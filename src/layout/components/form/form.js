import React, { useState } from "react";
import { H1, Button, Input } from "../../common";

import styles from "./form.module.scss";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H1 color="white"> לעור זורח ופרצוף שמח: </H1>
        <form className={styles.form}>
          <Input
            type="text"
            placeholder="שם"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-aos="zoom-in"
            data-aos-duration="200"
            data-aos-delay="200"
            data-aos-once="true"
          />
          <Input
            type="email"
            placeholder="אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-aos="zoom-in"
            data-aos-duration="200"
            data-aos-delay="400"
            data-aos-once="true"
          />
          <Button
            primary
            style={{ margin: "0", maxWidth: "150px" }}
            onClick={(e) => alert("submited")}
            className={styles.formButton}
          >
            שלחי
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
