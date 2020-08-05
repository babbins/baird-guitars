import React from "react";
import Img from "gatsby-image";
import mq from "../utils/mediaQueries";
import { Link } from "gatsby";
import { css } from "@emotion/core";

const GalleryImage = ({ image, className }) => (
  <Img className={className} fluid={image.childImageSharp.fluid} />
);

const GalleryItemCss = {
  width: "33%",
  [mq[0]]: {
    width: "25%",
  },
};

const Gallery = ({ galleryItems }) => (
  <>
    <h2
      css={css`
        text-align: center;
        margin-top: 20px;
      `}
    >
      Click an image for details
    </h2>
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "0 auto",
        width: "90%",
      }}
    >
      {galleryItems.map(({ image, url }) => {
        if (url) {
          return (
            <Link
              css={GalleryItemCss}
              key={image.childImageSharp.fluid.src}
              to={url}
            >
              <GalleryImage image={image} />
            </Link>
          );
        } else {
          return (
            <GalleryImage
              css={GalleryItemCss}
              key={image.childImageSharp.fluid.src}
              image={image}
            />
          );
        }
      })}
    </div>
  </>
);

export default Gallery;
