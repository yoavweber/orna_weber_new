import React, { useState } from "react";
import { H1, Button, Input } from "../../common";

import styles from "./form.module.scss";

const Form = ({ data }) => {
  const { headline, button } = data;
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H1 color="white" classname={styles.headline}>
          {" "}
          {headline}
        </H1>
        {/* TODO: change this to env */}
        <form
          className={styles.form}
          netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
          name="form"
        >
          <Input
            className={styles.input}
            type="text"
            name="name"
            placeholder="שם"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            data-aos="zoom-in"
            data-aos-duration="200"
            data-aos-delay="200"
            data-aos-once="true"
          />
          <Input
            className={styles.input}
            type="text"
            name="phone"
            placeholder="טלפון"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            data-aos="zoom-in"
            data-aos-duration="200"
            data-aos-delay="400"
            data-aos-once="true"
          />
          <Button
            primary
            type="submit"
            form="form"
            style={{ margin: "0" }}
            // onClick={(e) => alert("submited")}
            className={styles.formButton}
          >
            {button}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;
