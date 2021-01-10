import React from "react";
import { Nav } from "./src/layout/components";
import { Footer } from "./src/layout/components";
import "./src/layout/global.scss";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
// the elements and props are part of the wrapPageElement
const wrapPageElement = ({ element, props }) => (
  <Nav {...props}>
    {element}
    <Footer />
  </Nav>
);

export default wrapPageElement;
