// import React from "react";
// import styled from "@emotion/styled";

// const StyledDesktop = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   height: 40%;
//   a {
//     color: #555556;
//     font-size: 1.2rem;
//   }
//   .icon {
//     span {
//       color: $green;
//     }
//   }

//   .dropDown {
//     position: relative;
//     .hiddenDropDown {
//       display: none;
//     }
//     &:hover {
//       border-bottom: 1px $green solid;
//     }
//     &:hover > * {
//       display: block;
//       position: absolute;
//       display: flex;
//       flex-direction: column;
//       padding: 1rem 1.3rem 1.5rem;
//       background-color: $green;
//       z-index: 1000;
//     }
//   }
// `;

// const DesktopMenu = ({ children }) => {
//   return (
//     <StyledDesktop>
//       <Link to="/">
//         <img src={logo} width="200px" alt="Orna_logo" />
//       </Link>
//       <Link to="/" delay="200">
//         ראשי
//       </Link>
//       {/* TODO: send this to the treatment area */}
//       <Link className={styles.dropDown} delay="400">
//         טיפולים
//         <div className={styles.hiddenDropDown}>{children}</div>
//       </Link>
//       <Link to="booking" delay="600">
//         קביעת תור
//       </Link>
//       <Link to="about" delay="600">
//         עלינו
//       </Link>
//       <Link to="contact" delay="800">
//         צרי קשר
//       </Link>
//       <PhoneIcon icon={phone} text={PHONE_NUMBER} className={styles.icon} />
//     </StyledDesktop>
//   );
// };

// export default DesktopMenu;
