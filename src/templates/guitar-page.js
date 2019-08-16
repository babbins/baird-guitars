import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ImageSlider from "../components/ImageSlider";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";

export const BlogPostTemplate = ({
  title,
  content,
  contentComponent,
  guitarImages
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      <div>
        <div>
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-column-gap: 50px;
            `}
          >
            <h1
              css={css`
                grid-column: 2 / 11;
                ${mq[0]} {
                  grid-column: 2 / 6;
                }
              `}
            >
              {title}
            </h1>
            <ImageSlider
              css={css`
                grid-column: 2 / 11;
                ${mq[0]} {
                  grid-column: 2 / 6;
                }
              `}
              images={guitarImages}
            />
            <PostContent
              css={css`
                grid-column: 2 / 11;
                ${mq[0]} {
                  grid-column: 6 / 12;
                }
              `}
              content={content}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet titleTemplate="%s | Baird Guitars">
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        guitarImages={post.frontmatter.guitarImages}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
