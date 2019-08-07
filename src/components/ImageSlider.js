import React from "react";
import Slider from "react-slick";
import { css } from "@emotion/core";
import mq from "../utils/mediaQueries";
import ReactImageMagnify from "react-image-magnify";
import Img from "gatsby-image";

const ImageSlider = ({ images, className }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-image-gallery",
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(i) {
      return (
        <a>
          <Img
            css={css`
              width: 100%;
            `}
            fluid={images[i].childImageSharp.fluid}
            key={images[i].childImageSharp.fluid.src}
          />
        </a>
      );
    }
  };

  return (
    <div className={className}>
      <Slider {...settings}>
        {images.map(image => (
          <div
            css={css`
              width: 100%;
            `}
            key={image.childImageSharp.fluid.src}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              key={image.childImageSharp.fluid.src}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
