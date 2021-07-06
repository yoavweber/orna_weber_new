import React from "react";
import { H1, Button, Input } from "../../common";

import styles from "./form.module.scss";

const Form = ({ data }) => {
  const { headline, button } = data;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <H1 color="white" classname={styles.headline}>
          {" "}
          {headline}
        </H1>
        <form
          method="post"
          name="contact-form"
          data-netlify="true"
          className={styles.form}
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
