import React from "react";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "@emotion/styled";

export const NAV_HEIGHT = {
  MOBILE: 80,
  DESKTOP: 90
};

const NavLink = styled(Link)`
  font-family: "jinx";
  font-weight: 300;
  font-size: 30px;
  display: block;
`;

const Nav = ({ heading }) => {
  const navItems = useStaticQuery(
    graphql`
      query NAV_ITEMS {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "custom-page" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                navTitle
                slug
              }
            }
          }
        }
      }
    `
  ).allMarkdownRemark.edges.map(edge => edge.node.frontmatter);

  return (
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
      <section
        css={css`
          ${mq[0]} {
            top: 10px;
            right: 10px;
            position: fixed;
          }
          position: absolute;
          top: 40px;
          right: 30px;
        `}
      >
        {navItems.map(({ navTitle, slug }) => (
          <NavLink to={`/${slug}`}>{navTitle.toUpperCase()}</NavLink>
        ))}
      </section>
    </section>
  );
};

export default Nav;
