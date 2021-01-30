import React from "react";
import styled from "@emotion/styled";
// https://www.dandenney.com/posts/front-end-dev/embracing-emotion-with-gatsby/
//https://emotion.sh/docs/styled

//EXAMPLE
// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// export const Button = ({ length, link, text }) => {
//   const buttonStyle = {
//     backgroundColor: "#cae3b1",
//     border: 0,
//     width: "100%",
//     maxWidth: "200px",
//     height: "40px",-
//   };
//   return (
//     <a>
//       <button style={{ ...buttonStyle }}> {text}</button>
//     </a>
//   );
// };

const DESKTOP_BUTTON_HEIGHT = "calc(30px + 2vw)";
const MOBILE_BUTTON_HEIGHT = "calc(60px + 2vw)";
const FONT_SIZE = "calc(2rem + 1vw)";

const ButtonTag = styled.button`
  background: #cae3b1;
  border: 0;
  width: 100%;
  height: ${DESKTOP_BUTTON_HEIGHT};
  cursor: pointer;
  font-size: 1.2rem;
  @media (max-width: 800px) {
    height: ${MOBILE_BUTTON_HEIGHT};
  }
  ${"" /* padding: 25px 50px; */}
`;

const Atag = styled.a`
  margin: 10px 0;
  display: block;
  max-width: none;
`;
export const Button = ({ children, buttonStyle, ...props }) => {
  return (
    <Atag {...props}>
      <ButtonTag style={buttonStyle}> {children}</ButtonTag>
    </Atag>
  );
};

// ------------headlines------------------------------
const H1Colors = {
  white: "#ffffff;",
  grey: "#555556;",
  green: "#9fc975;",
  black: "#424d37",
};

// make the lineHeight varible
export const H1 = styled.h1(({ color, bold, largeSpace, style }) => ({
  color: H1Colors[color],
  fontWeight: bold ? "600" : "300",
  fontSize: " calc(2rem + 1vw)",
  marginBottom: largeSpace ? "40px" : "20px",
  lineHeight: "calc(1.1em + 0.5vw)",
  ...style,
}));

export const H2 = styled.h2((props) => ({
  color: H1Colors[props.color],
  fontWeight: props.bold ? "600" : "300",
  fontSize: "calc(1.5rem + 0.8vw)",
  marginBottom: "calc(10px + 2vh) ",
  lineHeight: "calc(1.1em + 0.5vw)",
}));

export const ColoredH1 = ({ firstPart, secondPart, spanSize }) => {
  return (
    <H1 style={{ lineHeight: "1.25" }}>
      {" "}
      <span>{firstPart}</span>
      <br />{" "}
      <span style={{ color: "#9fc975", marginTop: "10px" }}>{secondPart}</span>
    </H1>
  );
};
//--------------------Input----------------------
export const Input = styled.input`
  height: ${DESKTOP_BUTTON_HEIGHT};
  background: rgba(0, 0, 0, 0);
  border: 1px solid white;
  color: white;
  padding-right: 10px;
  font-size: 20px;
  &::placeholder {
    color: white;
    padding-right: 10px;
  }
  &:focus::placeholder {
    color: transparent;
  }
  @media (max-width: 800px) {
    height: ${MOBILE_BUTTON_HEIGHT};
  }
`;

// other

export const Space = styled.div(({ smallSpace }) => ({
  margin: smallSpace ? "calc(50px + 2vw)" : "calc(50px + 4vw)",
}));

export const MobileTextWrapper = styled.section`
  padding: 0 25px;
`;
