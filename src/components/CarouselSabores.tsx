import { Box, Grid, IconButton, useMediaQuery } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectFlavour,
  setFlavour,
  Flavour,
  bottleImages,
  getFlavourIndex,
} from "@/features/flavours/flavourSlice";
import { useSwipeable } from "react-swipeable";
import theme from "@/theme";

export default function CaroueslSabores() {
  const flavourState = useAppSelector(selectFlavour);
  const flavour = flavourState || Flavour.HIBISCUS;
  const [slideIndex, setSlideIndex] = useState(getFlavourIndex(flavour));
  const imageCount = Object.keys(bottleImages).length;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => onClick("next"),
    onSwipedRight: (eventData) => onClick("previous"),
    preventScrollOnSwipe: true,
  });

  const NextArrow = () => {
    return (
      <Box>
        <IconButton
          aria-label="next"
          onClick={() => onClick("next")}
          sx={{ color: "white", m: 0, p: 0 }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    );
  };

  const PreviousArrow = () => {
    return (
      <Box>
        <IconButton
          aria-label="prev"
          onClick={() => onClick("previous")}
          sx={{ color: "white", m: 0, p: 0 }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    );
  };

  const dispatch = useAppDispatch();

  const onClick = (type: "next" | "previous") => {
    if (type === "next") {
      const newIndex = slideIndex < imageCount - 1 ? slideIndex + 1 : 0;
      setSlideIndex(newIndex);
      handleChangeIndex(newIndex);
    } else {
      const newIndex = slideIndex > 0 ? slideIndex - 1 : imageCount - 1;
      setSlideIndex(newIndex);
      handleChangeIndex(newIndex);
    }
  };

  const handleChangeIndex = (newIndex: number) => {
    switch (newIndex) {
      case 0:
        dispatch(setFlavour(Flavour.PASSIONFRUIT));
        break;
      case 1:
        dispatch(setFlavour(Flavour.LAVENDER));
        break;
      case 2:
        dispatch(setFlavour(Flavour.LEMON_AND_GINGER));
        break;
      case 3:
        dispatch(setFlavour(Flavour.HIBISCUS));
        break;
      case 4:
        dispatch(setFlavour(Flavour.JUN));
        break;
      default:
        return;
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      pt={5}
      mb={isDesktop ? 0 : 8}
      {...handlers}
    >
      {/* Bottles */}
      <Grid item xs={1}>
        <PreviousArrow />
      </Grid>
      <Grid item xs={10}>
        <Box display="flex" justifyContent="center">
          <img
            src={bottleImages[flavour]}
            height={Math.floor(window.innerHeight / (isDesktop ? 1.15 : 1.8))}
          />
        </Box>
      </Grid>
      <Grid item xs={1}>
        <NextArrow />
      </Grid>
    </Grid>
  );
}
