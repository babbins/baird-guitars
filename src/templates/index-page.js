import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import willsGuitar from "../img/will-guitar.png";
import ilyasGuitar from "../img/ilya-guitar.png";
import nickysGuitar from "../img/nicky-guitar.png";
import maxsGuitar from "../img/max-guitar.png";
import blueGuitar from "../img/blue-boy.png";
import goodGuitar from "../img/good-one.png";

const flexboxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap"
};

const imageStyle = {
  width: "33%",
  display: "inline-block"
};
export const IndexPageTemplate = ({ heading, galleryImages }) => (
  <div>
    <h1>{heading}</h1>
    <h2>
      Instagram: <a href="https://instagram.com/byurrt">Byurrt</a>
    </h2>
    <div style={flexboxStyle}>
      <img src={blueGuitar} style={imageStyle} alt="Blue Guitar Guitar" />
      <img src={ilyasGuitar} style={imageStyle} alt="Ilya's Guitar" />
      <img src={goodGuitar} style={imageStyle} alt="Good Guitar" />
      <img src={nickysGuitar} style={imageStyle} alt="Nicky's Guitar" />
      <img src={maxsGuitar} style={imageStyle} alt="Max's Guitar" />
      <img src={willsGuitar} style={imageStyle} alt="Will's Guitar" />
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  // galleryImages: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate heading={frontmatter.heading} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
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
