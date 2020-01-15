import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HorizontalGallery from "../components/HorizontalGallery";
import mq from "../utils/mediaQueries";
import { css } from "@emotion/core";

export const ForSaleTemplate = ({ galleryItems }) => (
  <div
    css={css`
      width: "90%",
      ${mq[0]} {
        width: "70%"
      },
    `}
  >
    <HorizontalGallery galleryItems={galleryItems} />
  </div>
);

const ForSale = ({ data }) => {
  const { heading, galleryItems } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <ForSaleTemplate heading={heading} galleryItems={galleryItems} />
    </Layout>
  );
};

export default ForSale;

export const pageQuery = graphql`
  query ForSaleTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "for-sale" } }) {
      frontmatter {
        heading
        galleryItems {
          image {
            childImageSharp {
              fluid(maxWidth: 700) {
                src
                aspectRatio
                srcSet
                sizes
              }
            }
          }
          name
          url
          description
        }
      }
    }
  }
`;
