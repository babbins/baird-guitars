import React from "react";
import Img from "gatsby-image";
import mq from "../utils/mediaQueries";
import { Link } from "gatsby";

const GalleryImage = ({ image, className }) => (
  <Img className={className} fluid={image.childImageSharp.fluid} />
);

const GalleryItemCss = {
  width: "85%",
  [mq[0]]: {
    width: "25%"
  }
};

const Gallery = ({ galleryItems, links }) => (
  <div
    css={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
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
);

export default Gallery;
