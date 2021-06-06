import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import PhoneIcon from "../../icon/Icon";
import { PHONE_NUMBER } from "../../../config";
import logo from "../../../assets/logo.svg";
import phone from "../../../assets/phone.svg";

import styles from "../nav.module.scss";

// based on: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
// TODO: make nav fixed

const StyledSpan = styled.span`
  margin: 1rem 0;
  margin-right: 5rem;
  font-size: 1.2rem;
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9fc975;
  height: 100vh;
  padding-top: 10rem;

  width: 50%;
  position: absolute;
  align-items: flex-start;
  top: 0;
  right: 0;
  z-index: 9;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  & > * {
    margin: 20px 0;
    width: 100%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    color: white;

    &:hover {
      background-color: white;
      color: #9fc975;
    }
  }
`;

const MobileDropDown = styled.div`
  display: none;
  &[data-click="true"] {
    display: flex;
    flex-direction: column;
    background-color: #90b76a;
    color: blue;
    padding: 1rem 0;
    padding-right: 6rem;
  }
  & > * {
    margin: 1rem 0;
  }
`;
const Menu = ({ open, children }) => {
  const [showSubMenu, setShowSubMen] = useState(false);
  return (
    <>
      <StyledMenu open={open}>
        {/* <div> */}
        <Link to="/" delay="200">
          <StyledSpan> ראשי </StyledSpan>
        </Link>
        <a
          delay="400"
          style={{ cursor: "pointer" }}
          onClick={() => setShowSubMen(!showSubMenu)}
        >
          <StyledSpan> טיפולים</StyledSpan>
          <MobileDropDown data-click={showSubMenu}>{children}</MobileDropDown>
        </a>
        <Link to="/beautyFuison/" delay="600">
          <StyledSpan> על השיטה</StyledSpan>
        </Link>
        <Link to="/about/" delay="600">
          <StyledSpan> עלינו </StyledSpan>
        </Link>
        <Link to="/contact/" delay="800">
          <StyledSpan> צרי קשר </StyledSpan>
        </Link>
        {/* </div> */}
      </StyledMenu>
      <div className={styles.mobileLogo}>
        <Link to="/">
          <img src={logo} width="200px" alt="Orna_logo" />
        </Link>
      </div>
      <div className={styles.mobileNumber}>
        <PhoneIcon icon={phone} text={PHONE_NUMBER} className={styles.icon} />
      </div>
    </>
  );
};
export default Menu;
