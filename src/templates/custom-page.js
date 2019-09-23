import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";


export const CustomPageTemplate = ({ title, content, contentComponent }) => {
  const PostContent = contentComponent || Content;

  return <PostContent
    css={css`
    margin: 2% 5%;
  `} content={content} />;
};

CustomPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  navTitle: PropTypes.string
};

const CustomPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet titleTemplate="%s | Baird Guitars">
        <title>{`${post.frontmatter.navTitle}`}</title>
      </Helmet>
      <CustomPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.navTitle}
      />
    </Layout>
  );
};

CustomPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default CustomPage;

export const pageQuery = graphql`
  query CustomPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        navTitle
      }
    }
  }
`;
