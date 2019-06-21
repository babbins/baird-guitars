import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

export const IndexPageTemplate = ({ heading, images }) => (
  <div>
    <h1>{heading}</h1>
    <h2>
      Instagram: <a href="https://instagram.com/byurrt">Byurrt</a>
    </h2>
    <Gallery images={images} />
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        images={frontmatter.galleryImages}
      />
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
// galleryImages {
//   childImageSharp {
//     fluid(maxWidth: 2048, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
