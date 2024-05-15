import { Link } from "@chakra-ui/react";
import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import NextImage from "next/legacy/image";

export type GalleryImg = {
  galleryName: string;
  img: string;
};

export type GalleryProp = {
  galleryImgs: GalleryImg[];
};

export default function Gallery({ galleryImgs }: GalleryProp) {
  const [slider, setSlider] = React.useState<Slider>();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const slideNo = useBreakpointValue({
    base: 2,
    md: 2,
    lg: 3,
    xl: 4,
    "2xl": 5,
  });

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    slidesToShow: slideNo,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Link
        position="absolute"
        left={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      ></Link>

      <Link
        position="absolute"
        right={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      ></Link>

      <Slider {...settings} ref={(slider) => setSlider(slider as Slider)}>
        {galleryImgs.map((image, index) => (
          <Box key={index} mr="10px">
            <Box
              key={index}
              w="272px"
              h={{
                sm: "150px",
                md: "211px",
                lg: "211px",
                xl: "272px",
                "2xl": "272px",
              }}
              position="relative"
            >
              <NextImage
                src={image.img}
                layout="fill"
                alt="gallery"
                objectFit="cover"
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
