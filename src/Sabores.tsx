import { Box, Typography } from "@mui/material";
import CarouselSabores from "./components/CarouselSabores";

{
  /* Bkgnd color split, bottle + info in carousel  */
}

const images = [
  "./maracuja1.png",
  "./lavanda1.png",
  "./limaoegengibre1.png",
  "./morango1.png",
  "./junmel1.png",
];

export default function Sabores() {
  return (
    <Box>
      <CarouselSabores images={images} slidesToShow={1} />
    </Box>
  );
}
