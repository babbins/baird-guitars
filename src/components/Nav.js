import React from "react";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";

export const NAV_HEIGHT = {
  MOBILE: 80,
  DESKTOP: 90
};

const Nav = ({ heading }) => (
  <section
    css={css`
      position: fixed;
      top: 0;
      width: 100%;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 1;
      height: ${NAV_HEIGHT.MOBILE}px;
      ${mq[0]} {
        height: ${NAV_HEIGHT.DESKTOP}px;
      }

      background-color: #fffaf0;
    `}
  >
    <h1
      css={css`
        font-size: 40px;
        ${mq[0]} {
          font-size: 50px;
        }
      `}
    >
      {heading}
    </h1>
    <h2>
      Instagram: <a href="https://instagram.com/byurrt">Byurrt</a>
    </h2>
  </section>
);

export default Nav;
