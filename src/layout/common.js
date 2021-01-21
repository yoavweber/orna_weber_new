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

const buttonHight = "60px";
const ButtonTag = styled.button`
  background: #cae3b1;
  border: 0;
  width: 100%;
  max-width: 300px;
  height: ${buttonHight};
  cursor: pointer;
  font-size: 1.5rem;
`;

const Atag = styled.a`
  margin: 10px 0;
  display: block;
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
  black: "#555556;",
  green: "#9fc975;",
};

export const H1 = styled.h1((props) => ({
  color: H1Colors[props.color],
  fontWeight: props.bold ? "600" : "300",
  fontSize: "2.3rem",
  margin: "20px 0",
}));

export const H2 = styled.h2((props) => ({
  color: H1Colors[props.color],
  fontWeight: props.bold ? "600" : "300",
  fontSize: "1.5rem",
  margin: "10px 0",
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
  height: ${buttonHight};
  background: rgba(0, 0, 0, 0);
  border: 1px solid white;
  &::placeholder {
    color: white;
    padding: 5px;
  }
`;
