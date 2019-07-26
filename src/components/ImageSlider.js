import React from "react";
import Slider from "react-slick";
import { css } from "@emotion/core";
import headstock from "../img/blue-headstock.jpg";
import bodyAngled from "../img/blue-body-angled.jpg";
import body from "../img/blue-body.jpg";
import mq from "../utils/mediaQueries";
import ReactImageMagnify from "react-image-magnify";

const carouselImages = [headstock, bodyAngled, body];

const settings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  speed: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: function(i) {
    return (
      <a>
        <img src={carouselImages[i]} />
      </a>
    );
  }
};

const ImageSlider = () => (
  <div>
    <Slider {...settings}>
      {carouselImages.map(image => (
        <div
          css={css`
            width: 40vw;
          `}
        >
          {/* <img
            css={css`
              width: 100%;
              ${mq[0]} {
                height: 60vh;
                width: auto;
              }
            `}
            src={image}
          /> */}
          <ReactImageMagnify
            {...{
              smallImage: {
                src: image,
                width: 400,
                height: 400
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 1200
              },
              lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
            }}
            {...{
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              enlargedImagePosition: "beside"
            }}
          />
        </div>
      ))}
    </Slider>
  </div>
);
export default ImageSlider;
