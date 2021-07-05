import React, { useState } from "react";
import { H1, Button, Input } from "../../common";

import styles from "./form.module.scss";

const Form = ({ data }) => {
  const { headline, button } = data;
  // const [submitted,setSubmitted] = useState(false)
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
          name="contact-form"
          netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
        >
          <label>
            <Input
              className={styles.input}
              type="text"
              name="name"
              placeholder="שם"
              data-aos="zoom-in"
            />
          </label>
          <label>
            <Input
              className={styles.input}
              type="text"
              name="phone"
              placeholder="טלפון"
            />
          </label>
          <Button
            primary
            type="submit"
            form="form"
            style={{ margin: "0" }}
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
