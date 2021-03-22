import { getWidth } from "./utils";

export const isMobile = getWidth() < 800 ? true : false;

export const customMobile = (breakPoint) => {
  return getWidth() < breakPoint ? true : false;
};
