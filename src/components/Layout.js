import React from "react";
import Helmet from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import { Global, css } from "@emotion/core";
import Nav, { NAV_HEIGHT } from "./Nav.js";
import mq from "../utils/mediaQueries";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

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
      </Helmet>
      <Global
        styles={css`
          a:visited {
            color: inherit;
          }
          * {
            margin: 0;
            padding: 0;
          }
          body {
            font-family: Arial;
            background-color: #fffaf0;
            color: #200000;
          }
        `}
      />
      <Nav heading="BAIRD GUITARS" />
      <div
        css={{
          width: "90%",
          margin: "0 auto",
          marginTop: NAV_HEIGHT.MOBILE + 10 + "px",
          [mq[0]]: {
            width: "70%",
            marginTop: NAV_HEIGHT.DESKTOP + 10 + "px"
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
