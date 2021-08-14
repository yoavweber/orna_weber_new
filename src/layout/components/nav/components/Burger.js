import React from "react";
import styled from "@emotion/styled";

// TODO: change the type of style
const FIXED_BUTTON_POISTION = "3.5%";
const FIXED_BUTTON_POISTION_BUILD = "4.5%";

const ABSOLUTE_BUTTON_POISTION = "20%";
export const StyledBurger = styled.button`
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  top: ${({ open }) =>
    open ? FIXED_BUTTON_POISTION_BUILD : ABSOLUTE_BUTTON_POISTION};
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    ${
      "" /* TODO: change this the color name to something which is not hardcoded */
    }
    background: ${({ open }) => (open ? "#ffffff" : "#9fc975")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Burger;
