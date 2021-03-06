import React from "react";
import styled from "@emotion/styled";
// import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { splitText } from "../utils/utils";
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
const FONT_SIZE = "calc(1rem + 0.5vw)";

const ButtonTag = styled.button`
  background: #cae3b1;
  border: 0;
  width: 100%;
  height: ${DESKTOP_BUTTON_HEIGHT};
  cursor: pointer;
  font-size: ${FONT_SIZE};
  line-height: calc(1.6em + 0.2vw);

  @media (max-width: 800px) {
    height: ${MOBILE_BUTTON_HEIGHT};
  }
`;

const Atag = styled.a`
  margin: 10px 0;
  display: block;
  max-width: 420px;
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
  white: "#ffffff",
  grey: "#555556",
  green: "#9fc975",
  black: "#424d37",
};

export const FirstHeadLine = styled.h1(
  ({ color, bold, largeSpace, style }) => ({
    color: color ? H1Colors[color] : H1Colors["grey"],
    fontWeight: bold ? "600" : "300",
    fontSize: " calc(2rem + 0.5vw)",
    marginBottom: largeSpace ? "40px" : "20px",
    lineHeight: "calc(1.2em + 0.5vw)",
    ...style,
  })
);

// change the name to different H1, since I can only have 1 H1 in a page
export const H1 = styled.h2(({ color, bold, largeSpace, style }) => ({
  color: color ? H1Colors[color] : H1Colors["grey"],
  fontWeight: bold ? "600" : "300",
  fontSize: " calc(2rem + 0.5vw)",
  marginBottom: largeSpace ? "40px" : "20px",
  lineHeight: "calc(1.2em + 0.5vw)",
  ...style,
}));

export const H2 = styled.h2(({ bold, color, style }) => ({
  color: H1Colors[color],
  fontWeight: bold ? "600" : "300",
  fontSize: "calc(1.4rem + 0.5vw)",
  marginBottom: "calc(10px + 2vh) ",
  lineHeight: "calc(1.1em + 0.5vw)",
  ...style,
}));

export const H3 = styled.h3(({ bold, color }) => ({
  color: H1Colors[color],
  fontWeight: bold ? "500" : "300",
  fontSize: "calc(1.2rem + 0.4vw)",
  marginBottom: "calc(10px + 2vh) ",
  lineHeight: "calc(1.1em + 0.5vw)",
}));

export const ColoredHeadline = ({ text, spanSize, ...props }) => {
  if (!text) {
    return <div>loading...</div>;
  }
  const textArray = splitText(text);
  const coloredText = textArray.map((text, index) => {
    const isColoredBlack = (index + 2) % 2 === 0 ? true : false;
    const isMargin = textArray.length > 1 ? { marginBottom: "10px" } : {};
    return (
      <>
        {isColoredBlack ? (
          <H1 color="black" style={isMargin} bold>
            {text}
          </H1>
        ) : (
          <H2 color="green" bold>
            {text}
          </H2>
        )}
      </>
    );
  });
  return <>{coloredText}</>;
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

export const Space = ({ smallSpace, isMobile }) => (
  <div
    css={css`
      margin: ${smallSpace ? "calc(25px + 1vw)" : "calc(25px + 2vw)"};
      @media (max-width: 800px) {
        margin: ${isMobile
          ? 0
          : smallSpace
          ? "calc(50px + 1vw)"
          : "calc(50px + 2vw)"};
      }
    `}
  />
);

export const MobileTextWrapper = styled.section`
  padding: 0 10%;

  @media (max-width: 1200px) {
    padding: 0 80px;
  }

  @media (max-width: 800px) {
    padding: 0 25px;
  }
`;

const FinalTextWrapper = styled.div`
  @media (max-width: 800px) {
    background-color: #f8f9f6;
  }
`;

export const Headline = ({ style, children }) => (
  <FinalTextWrapper>
    <H1
      bold={true}
      style={{
        width: "60%",
        textAlign: "center",
        margin: "0 auto",
        paddingBottom: "50px",
        ...style,
      }}
    >
      {children}
    </H1>
  </FinalTextWrapper>
);
