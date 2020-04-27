import React from "react";
import Helmet from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import * as emotion from "@emotion/core";
import Nav, { NAV_HEIGHT } from "./Nav.js";
import mq from "../utils/mediaQueries";
import "react-image-lightbox/style.css";
import Footer from "./Footer";
import "focus-visible/dist/focus-visible.min.js";

const { Global, css } = emotion;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div id="page-wrap">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta
          meta
          name="viewport"
          content="width=device-width, user-scalable=no"
        />
      </Helmet>
      <Global
        styles={css`
          @font-face {
            font-family: "jinx";
            font-style: normal;
            font-weight: light;
            src: url("/fonts/jinx.ttf") format("ttf");
            src: url("/fonts/jinx.woff") format("woff");
            src: url("/fonts/jinx.woff2") format("woff2");
          }
          a,
          a:visited {
            color: #200000;
            text-decoration: none;
          }
          .slick-image-gallery {
            position: static;
          }
          .slick-image-gallery li {
            width: 60px;

            height: auto;
            display: inline-block;
            margin-right: 5px;
          }

          .slick-image-gallery img {
            max-width: 100%;
          }

          * {
            margin: 0;
            padding: 0;
            font-family: "Courier Prime", monospace;
            box-sizing: border-box;
          }

          body {
            background-color: #fffaf0;
            color: #200000;
            overflow-x: hidden;
          }
          /*
            This will hide the focus indicator if the element receives focus via the mouse,
            but it will still show up on keyboard focus.
          */
          .js-focus-visible :focus:not(.focus-visible) {
            outline: none;
          }
        `}
      />
      <Nav heading="BAIRD GUITARS" />
      <div
        css={{
          margin: "0 auto",
          marginTop: NAV_HEIGHT.MOBILE + 10 + "px",
          [mq[1]]: {
            width: "80%",
            minWidth: "800px",
            marginTop: 0,
          },
          position: "relative",
        }}
      >
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default TemplateWrapper;
