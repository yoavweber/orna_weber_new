import React from "react";
import { H2, MobileTextWrapper } from "../../../common";

const PlainText = ({ data, headlineColor }) => {
  const { text, headline } = data;
  return (
    <MobileTextWrapper>
      <H2 color={headlineColor}>{headline}</H2>
      <p>{text}</p>
    </MobileTextWrapper>
  );
};

export default PlainText;
