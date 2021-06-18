import React from "react";
import { isMobile } from "../../../../utils/isMobile";

import { ColoredHeadline } from "../../../common";

const PlainText = ({ data, headlineColor }) => {
  const { text, headline } = data;
  return (
    <div style={{ margin: isMobile && "0 5%" }}>
      <ColoredHeadline text={headline} />
      <p>{text}</p>
    </div>
  );
};

export default PlainText;
