import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import mq from "../utils/mediaQueries";
import { css } from "@emotion/core";

export const IndexPageTemplate = ({ heading, galleryItems }) => (
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

const IndexPage = ({ data }) => {
  const { heading, galleryItems } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <IndexPageTemplate heading={heading} galleryItems={galleryItems} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
