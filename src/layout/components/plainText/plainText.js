import React from "react";
import { H1, MobileTextWrapper } from "../../common";

const PlainText = ({ headline, text }) => (
  <MobileTextWrapper>
    <H1>{headline}</H1>
    <p>{text}</p>
  </MobileTextWrapper>
);

export default PlainText;
