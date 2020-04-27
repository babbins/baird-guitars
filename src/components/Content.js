import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import mq from "../utils/mediaQueries";

const Div = styled.div`
  span {
    margin-bottom: 30px;
  }
  * + * {
    margin-top: 10px;
  }

  li + li {
    margin-top: 5px;
  }

  ul {
    margin-left: 30px;
  }

  max-width: 850px;
  margin: 50px auto;

  /* style markdown rendered embed videos */
  .embedVideo-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;

    .embedVideo-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const HTMLContent = ({ content, className }) => (
  <Div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }) => (
  <Div className={className}>{content}</Div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
