import React from "react";
import Img from "gatsby-image";
import mq from "../utils/mediaQueries";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const GalleryImage = ({ image, className }) => (
  <Img className={className} fluid={image.childImageSharp.fluid} />
);

const ContactLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #200000;
  text-decoration: underline;
`;

const GalleryItemCss = {
  display: "block",
  width: "100%",
  marginBottom: "20px",
};

const HorizontalGallery = ({ galleryItems }) => (
  <div>
    <h3 css={{ marginBottom: "10px" }}>
      For pricing or more information on any available instruments please
      contact me
    </h3>
    <ContactLink href="tel:718-344-8587">Phone: 718-344-8587</ContactLink>
    <ContactLink href="mailto:bairdguitars@gmail.com">
      Email: bairdguitars@gmail.com
    </ContactLink>
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {galleryItems.map(({ image, url, name, description }) => {
        return (
          <div css={GalleryItemCss} key={image.childImageSharp.fluid.src}>
            <Link to={url} css={{ color: "#200000 !important" }}>
              <h3>{name}</h3>
              <GalleryImage
                css={{
                  width: "80%",
                  [mq[0]]: {
                    width: "500px",
                  },
                }}
                image={image}
              />
            </Link>
            <span>{description}</span>
          </div>
        );
      })}
    </div>
  </div>
);

export default HorizontalGallery;
