import Slider, { type Settings, type CustomArrowProps } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Avatar, Box, IconButton } from "@mui/material"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

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
  )
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
  )
}

export interface CarouselProps {
  images: string[]
  imageHeight: number
}

export default function Carouesl(props: CarouselProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  }
  return (
    // Root box helps the carousel figure out how wide its container is.
    // mb is essential to show the dots.
    <Box sx={{ width: "calc(100% - 80px)", mb: 4 }}>
      <div className="slider-container">
        <Slider {...settings}>
          {props.images.map(url => (
            <Box sx={{ px: 4, my: "auto" }}>
              <Avatar
                src={url}
                sx={{
                  height: props.imageHeight,
                  width: props.imageHeight,
                  margin: "0 auto",
                }}
              />
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  )
}
