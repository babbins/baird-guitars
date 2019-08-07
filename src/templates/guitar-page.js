import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ImageSlider from "../components/IamgeSlider";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  galleryImages
  tags,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      <div>
        1
        <div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <ImageSlider images={galleryImages} />
            <PostContent content={content} />
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
        description={post.frontmatter.description}
        title={post.frontmatter.title}
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
