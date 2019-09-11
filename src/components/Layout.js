import React from "react";
import Helmet from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import * as emotion from "@emotion/core";
import Nav, { NAV_HEIGHT } from "./Nav.js";
import mq from "../utils/mediaQueries";

const { Global, css } = emotion;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
        />
        // Add the new slick-theme.css if you want the default styling
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
            color: inherit;
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
            font-family: Arial, Helvetica, sans-serif;
          }

          body {
            background-color: #fffaf0;
            color: #200000;
          }
        `}
      />
      <Nav heading="BAIRD GUITARS" />
      <div
        css={{
          margin: "0 auto",
          marginTop: NAV_HEIGHT.MOBILE + 10 + "px",
          [mq[0]]: {
            width: "70%",
            marginTop: 0
          },
          position: "relative"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TemplateWrapper;
