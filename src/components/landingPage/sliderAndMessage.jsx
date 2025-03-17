import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import {
  containerStyles,
  sliderWrapperStyles,
  slideBoxStyles,
  imageStyles,
  messageWrapperStyles,
  messageTitleStyles,
  messageBoxStyles,
  messageImageStyles,
  messageTextStyles,
  detailsLinkStyles,
  arrowButtonStyles,
  leftArrowStyles,
  rightArrowStyles,
} from "../../assets/styles/sliderAndMessageStyles"; // Import styles
import sliderAndMessageData from "../../assets/data/sliderAndMessageData"; // Import data
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box sx={{ ...arrowButtonStyles, ...leftArrowStyles }} onClick={onClick}>
      ◀
    </Box>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box sx={{ ...arrowButtonStyles, ...rightArrowStyles }} onClick={onClick}>
      ▶
    </Box>
  );
};

export default function SliderAndMessage() {
  // Slider settings with custom arrows
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box sx={containerStyles}>
      {/* Left - Slider Section */}
      <Box sx={sliderWrapperStyles}>
        <Slider {...settings}>
          {sliderAndMessageData.images.map((src, index) => (
            <Box key={index} sx={slideBoxStyles}>
              <Image src={src} alt={`Slide ${index + 1}`} sx={imageStyles} />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Right - Messages Section */}
      <Box sx={messageWrapperStyles}>
        <Text sx={messageTitleStyles}>Messages</Text>
        {sliderAndMessageData.messages.map((message, index) => (
          <Box key={index} sx={messageBoxStyles}>
            <Image src={message.image} alt={message.name} sx={messageImageStyles} />
            <Box sx={messageTextStyles}>
              <Text fontWeight="bold">{message.name}</Text>
              <Text fontSize="sm">{message.title}</Text>
            </Box>
            <Link href={message.link} sx={detailsLinkStyles}>
              Details
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
