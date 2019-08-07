import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import GuitarDetail from "../components/GuitarDetail";
import mq from "../utils/mediaQueries";

export const IndexPageTemplate = ({ heading, images }) => (
  <div>
    <Gallery images={images} />
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GuitarDetail />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        galleryImages {
          childImageSharp {
            fluid(maxWidth: 700) {
              src
              aspectRatio
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;
