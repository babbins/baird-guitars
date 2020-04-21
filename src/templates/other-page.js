import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import mq from "../utils/mediaQueries";
import { css } from "@emotion/core";

export const OtherPageTemplate = ({ heading, galleryItems }) => (
  <div
    css={css`
      width: "90%",
      ${mq[0]} {
        width: "70%"
      },
    `}
  >
    <Gallery galleryItems={galleryItems} />
  </div>
);

const OtherPage = ({ data }) => {
  const { heading, galleryItems } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <OtherPageTemplate heading={heading} galleryItems={galleryItems} />
    </Layout>
  );
};

export default OtherPage;

export const pageQuery = graphql`
  query OtherPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "other-page" } }) {
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
          url
        }
      }
    }
  }
`;
