import React from "react";
import Nav from "./src/layout/components/nav/Nav";
import Footer from "./src/layout/components/footer/Footer";
import "./src/layout/global.css";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ children, props }) => (
  <Nav {...props}>
    sdfsd
    {children}
    <Footer />
  </Nav>
);

export default wrapPageElement;
