import React from "react";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";

const Nav = ({ heading }) => (
  <section
    css={css`
      position: fixed;
      top: 0;
      width: 100%;
      padding: 10px;
      text-align: center;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      z-index: 1;
      margin-bottom: calc(100%);
    `}
  >
    <h1>{heading}</h1>
    <h2>
      Instagram: <a href="https://instagram.com/byurrt">Byurrt</a>
    </h2>
  </section>
);

export default Nav;
