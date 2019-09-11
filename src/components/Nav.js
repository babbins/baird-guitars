import React from "react";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";
import { Link } from "gatsby";

export const NAV_HEIGHT = {
  MOBILE: 80,
  DESKTOP: 90
};

const Nav = ({ heading }) => (
  <section
    css={css`
      position: static;
      top: 0;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 1;
      background-color: #fffaf0;
      ${mq[0]} {
        position: static;
      }
    `}
  >
    <Link to="/">
      <h1
        css={css`
          font-size: 35px;
          ${mq[0]} {
            font-size: 80px;
          }
          font-family: "jinx";
          font-weight: 300;
        `}
      >
        {heading}
      </h1>
    </Link>
    <Link
      css={css`
        ${mq[0]} {
          top: 10px;
          right: 10px;
          position: fixed;
        }

        font-family: "jinx";
        font-weight: 300;
        font-size: 30px;
        position: absolute;
        top: 40px;
        right: 30px;
      `}
      to="/about"
    >
      ABOUT
    </Link>
  </section>
);

export default Nav;
