import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

import Grid from "../components/Grid.js";
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
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <h1>BAIRD GUITARS</h1>
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
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
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
