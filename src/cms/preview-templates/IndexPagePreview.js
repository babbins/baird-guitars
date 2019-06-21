import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";
import Layout from "../../components/Layout";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
<<<<<<< HEAD
      <Layout>
        <IndexPageTemplate images={data.galleryImages} heading={data.heading} />
      </Layout>
=======
      <IndexPageTemplate images={data.galleryImages} heading={data.heading} />
>>>>>>> ed33220f31c2b0e294a5141b3e0d26438036e9e3
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
