import { Box, Typography } from "@mui/material";
import CarouselSabores from "./components/CarouselSabores";

{
  /* Bkgnd color split, bottle + info in carousel  */
}

const images = [
  "https://www.chavivo.com.br/site/wp-content/uploads/2022/04/3eadeca34cdba8e3fa4d192022143b70-780x1024.png",
  "https://www.chavivo.com.br/site/wp-content/uploads/2022/04/0cda8e552f79cc73e55cf556935c06fa-893x1024.png",
  "https://www.chavivo.com.br/site/wp-content/uploads/2022/04/8b2d7abe57e5d89af94efaf3cacbc4bb-790x1024.png",
  "https://www.chavivo.com.br/site/wp-content/uploads/2022/04/bb8df66fed768cb725664ad8b57ed49c-841x1024.png",
  "https://www.chavivo.com.br/site/wp-content/uploads/2022/04/090a1877309aa8fb283ea0f8a7718e82-605x1024.png",
];

export default function Sabores() {
  return (
    <Box>
      <CarouselSabores images={images} slidesToShow={1} />
    </Box>
  );
}
