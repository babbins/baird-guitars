import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

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
