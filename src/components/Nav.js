import React, { useState } from "react";
import { css } from "@emotion/core";
import mq, { breakpoints } from "../utils/mediaQueries";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "@emotion/styled";
import { slide as Menu } from "react-burger-menu";
import useWindowSize from "../hooks/useWindowSize";
import hamburgerNavStyles from "../misc/hamburgerNavStyles";
export const NAV_HEIGHT = {
  MOBILE: 20,
  DESKTOP: 90,
};

const NavLink = styled(Link)`
  font-family: "jinx";
  color: white !important;
  font-weight: 300;
  font-size: 40px;
  display: block;
  ${mq[2]} {
    font-size: 25px;
    color: #200000 !important;
  }
`;

const MENU_CONTAINER = "menu-container";

const Nav = ({ heading }) => {
  const [isOpen, setOpen] = useState(false);
  const handleMenuStateChange = (state) => setOpen(state.isOpen);
  const closeMenu = () => setOpen(false);

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
  ).allMarkdownRemark.edges.map((edge) => edge.node.frontmatter);

  const size = useWindowSize();

  return (
    <section
      css={css`
        position: static;
        top: 0;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 36px;
        z-index: 1;
        background-color: #fffaf0;

        ${mq[0]} {
          justify-content: center;
        }
      `}
      id={MENU_CONTAINER}
    >
      <Link to="/">
        <h1
          css={css`
            font-family: "jinx";
            font-weight: 300;
            font-size: 60px;
            line-height: 1;
            color: #200000 !important;
            ${mq[0]} {
              font-size: 6.5vw;
              justify-self: center;
            }
            ${mq[2]} {
              font-size: 90px;
              position: static;
              margin-left: 0;
            }
          `}
        >
          {heading}
        </h1>
      </Link>

      {size.width < breakpoints[2] ? (
        <Menu
          isOpen={isOpen}
          onStateChange={handleMenuStateChange}
          width="100%"
          right
          styles={hamburgerNavStyles}
          outerContainerId={MENU_CONTAINER}
          pageWrapId="page-wrap"
        >
          <NavLink onClick={closeMenu} key="gallery" to="/">
            GUITARS
          </NavLink>
          <NavLink onClick={closeMenu} key="gallery" to="/for-sale">
            FOR SALE
          </NavLink>
          <NavItems items={navItems} handleClick={closeMenu} />
        </Menu>
      ) : (
        <section
          css={css`
            ${mq[2]} {
              top: 10px;
              right: 10px;
              position: fixed;
            }
          `}
        >
          <NavLink onClick={closeMenu} key="gallery" to="/">
            GUITARS
          </NavLink>
          <NavLink onClick={closeMenu} key="gallery" to="/for-sale">
            FOR SALE
          </NavLink>
          <NavItems handleClick={closeMenu} items={navItems} />
        </section>
      )}
    </section>
  );
};

const NavItems = ({ items, handleClick }) => (
  <>
    {items.map(({ navTitle, slug }) => (
      <NavLink onClick={handleClick} key={slug} to={`/${slug}`}>
        {navTitle.toUpperCase()}
      </NavLink>
    ))}
    <NavLink to="/other">OTHER</NavLink>
  </>
);

export default Nav;
