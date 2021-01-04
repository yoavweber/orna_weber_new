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
const ButtonTag = styled.button`
  background: #cae3b1;
  border: 0;
  width: 100%;
  max-width: 200px;
  height: 40px;
`;

const Atag = styled.a`
  width: 100%;
  max-width: 200px;
  margin: 10px 0;
`;
export const Button = ({ length, link, text }) => {
  return (
    <Atag>
      <ButtonTag> {text}</ButtonTag>
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
  fontSize: "2rem",
}));

export const H2 = styled.h2((props) => ({
  color: H1Colors[props.color],
  fontWeight: props.bold ? "600" : "300",
  fontSize: "1.5rem",
  margin: "20px 0",
}));
