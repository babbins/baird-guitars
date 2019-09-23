import React, { useState } from "react";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "@emotion/styled";
import { slide as Menu } from 'react-burger-menu';
import useWindowSize from '../hooks/useWindowSize';
import hamburgerNavStyles from '../misc/hamburgerNavStyles';

export const NAV_HEIGHT = {
  MOBILE: 20,
  DESKTOP: 90
};

const NavLink = styled(Link)`
  font-family: "jinx";
  font-weight: 300;
  font-size: 40px;
  display: block;
  ${mq[0]} {
    font-size: 25px;
  }
`;

const MENU_CONTAINER = "menu-container";

const Nav = ({ heading }) => {
  const [isOpen, setOpen] = useState(false);
  const handleMenuStateChange = state => setOpen(state.isOpen);
  const closeMenu = () => { console.log('cliose'); setOpen(false); }

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
        z-index: 1;
        background-color: #fffaf0;
        ${mq[0]} {
          justify-content: flex-start;
          flex-direction: column;
        }
      `}
      id={MENU_CONTAINER}
    >
      <Link to="/">
        <h1
          css={css`
            font-family: "jinx";
            font-weight: 300;
            font-size: 9.5vw;
            margin-left: 10px;

            ${mq[0]} {
              font-size: 6.5vw;
              position: static;
              margin-left: 0;
            }
          `}
        >
          {heading}
        </h1>
      </Link>

      {size.width < 768 ?
        (<Menu isOpen={isOpen} onStateChange={handleMenuStateChange} width="100%" right styles={hamburgerNavStyles} outerContainerId={MENU_CONTAINER} pageWrapId="page-wrap">
          <NavLink onClick={closeMenu} key="gallery" to="/">GUITARS</NavLink>
          <NavItems items={navItems} handleClick={closeMenu} />
        </Menu>) : (<section
          css={css`
          ${mq[0]} {
            top: 10px;
            right: 10px;
            position: fixed;
          }
        `}
        >
          <NavItems handleClick={closeMenu} items={navItems} />
        </section>)
      }
    </section>
  );
};

const NavItems = ({ items, handleClick }) => (
  <>
    {items.map(({ navTitle, slug }) => (
      <NavLink onClick={handleClick} key={slug} to={`/${slug}`}>{navTitle.toUpperCase()}</NavLink>
    ))}
  </>
);

export default Nav;
