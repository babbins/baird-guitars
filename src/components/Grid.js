import React from "react";
import PropTypes from "prop-types";

const style = {
  display: "grid",
  "grid-template-columns": "1fr 1fr 1fr"
};
const Grid = ({ children }) => <div style={style}>{children}</div>;

// FeatureGrid.propTypes = {
//   gridItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//       text: PropTypes.string,
//     })
//   ),
// }

export default Grid;
