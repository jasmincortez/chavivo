import Slider, { type Settings, type CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useEffect, useRef, useState } from "react";

function NextArrow(props: CustomArrowProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translate(100%, -50%)",
        zIndex: 99,
      }}
    >
      <IconButton aria-label="next" onClick={props.onClick}>
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}

function PreviousArrow(props: CustomArrowProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translate(-100%, -50%)",
        zIndex: 99,
      }}
    >
      <IconButton aria-label="prev" onClick={props.onClick}>
        <NavigateBeforeIcon />
      </IconButton>
    </Box>
  );
}

export interface CarouselProps {
  images: string[];
  slidesToShow: number;
}

export default function Carouesl(props: CarouselProps) {
  const container = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const slidePaddingX = 8; // I.e. 0.5rem on each side.

  useEffect(() => {
    const containerWidth = container.current
      ? container.current.offsetWidth
      : 0;
    setSlideWidth(
      Math.floor(containerWidth / props.slidesToShow) - 2 * slidePaddingX
    );
  }, [container.current]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: props.slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  return (
    // Root box helps the carousel figure out how wide its container is.
    // -80px is to make space for the two arrow buttons.
    // mb is essential to show the dots.
    <Box ref={container} sx={{ width: "calc(100% - 80px)", mb: 6 }}>
      <div className="slider-container">
        <Slider {...settings}>
          {props.images.map((url, i) => (
            <Box sx={{ my: "auto" }} key={i}>
              <Avatar
                src={url}
                sx={{
                  height: slideWidth,
                  width: slideWidth,
                  margin: "0 auto",
                  boxShadow: 2,
                  filter: "grayScale(100%)",
                  "&:hover": { filter: "none" },
                }}
              />
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  );
}
