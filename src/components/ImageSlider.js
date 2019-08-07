import React from "react";
import Slider from "react-slick";
import { css } from "@emotion/core";
import headstock from "../img/blue-headstock.jpg";
import bodyAngled from "../img/blue-body-angled.jpg";
import body from "../img/blue-body.jpg";
import mq from "../utils/mediaQueries";
import ReactImageMagnify from "react-image-magnify";
import Img from "gatsby-image";

const carouselImages = [headstock, bodyAngled, body];

const ImageSlider = images => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(i) {
      return (
        <a>
          <Img
            fluid={images[i].childImageSharp.fluid}
            key={images[i].childImageSharp.fluid.src}
          />
        </a>
      );
    }
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map(image => (
          <div
            css={css`
              width: 40vw;
            `}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              key={image.childImageSharp.fluid.src}
            />
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
