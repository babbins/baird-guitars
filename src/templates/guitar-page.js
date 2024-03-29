import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ImageSlider from "../components/ImageSlider";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";
import { CustomPageTemplate } from "./custom-page.js";

export const GuitarPageTemplate = ({
  title,
  content,
  contentComponent,
  guitarImages,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      <div
        css={css`
          display: block;
          margin: 20px;
          ${mq[0]} {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 50px;
          }
        `}
      >
        <h1
          css={css`
            ${mq[0]} {
              grid-column: 2 / 12;
            }
          `}
        >
          {title}
        </h1>
        <ImageSlider
          css={css`
            ${mq[0]} {
              grid-column: 1 / 7;
            }
            ${mq[1]} {
              grid-column: 1 / 8;
            }
          `}
          images={guitarImages}
        />
        <PostContent
          css={css`
            margin-top: 20px;
            ${mq[0]} {
              margin-top: 0;
              grid-column: 7 / end;
            }
            ${mq[1]} {
              grid-column: 8 / end;
            }
          `}
          content={content}
        />
      </div>
    </section>
  );
};

GuitarPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const GuitarPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet titleTemplate="%s | Baird Guitars">
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>
      {post.frontmatter.guitarImages ? (
        <GuitarPageTemplate
          content={post.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          guitarImages={post.frontmatter.guitarImages}
        />
      ) : (
        <CustomPageTemplate
          content={post.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.navTitle}
        />
      )}
    </Layout>
  );
};

GuitarPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default GuitarPage;

export const pageQuery = graphql`
  query GuitarPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        guitarImages {
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
