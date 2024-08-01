import { Box, Stack, Typography } from "@mui/material";
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

export enum Flavour {
  PASSIONFRUIT = "Maracujá",
  LAVENDER = "Lavanda",
  LEMON_AND_GINGER = "Limão com Gengibre",
  HIBISCUS = "Hibisco com Morango",
  JUN = "Jun",
}

export default function Sabores() {
  return (
    <Box>
      <CarouselSabores images={images} slidesToShow={1} />
      <Stack sx={{ width: "20vw" }}>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: "bold",
            fontSize: 18,
            fontStyle: "italic",
            mt: 2,
          }}
        >
          maracujá
        </Typography>
        <Typography
          textAlign={"justify"}
          sx={{
            fontFamily: "Playfair Display",
            fontSize: 15,
            fontStyle: "italic",
            mt: 2,
            mb: 5,
          }}
        >
          Feito com Kombuchá Base, tem a acidez e o gostinho tropical
          característicos do Maracujá, um ligeiro dulçor e frizância. Encanta
          pela sua elegância e sutileza.
        </Typography>
      </Stack>
    </Box>
  );
}
