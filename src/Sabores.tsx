import { Box, Stack, Typography } from "@mui/material";
import CarouselSabores from "./components/CarouselSabores";
import { useAppSelector } from "./store/hooks";
import { selectFlavour } from "./features/flavours/flavourSlice";

{
  /* Bkgnd color split, bottle + info in carousel  */
}

export default function Sabores() {
  const flavour = useAppSelector(selectFlavour);

  return (
    <Box>
      <CarouselSabores />
      <Stack>
        <Typography
          color="white"
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: "bold",
            fontSize: 18,
            fontStyle: "italic",
            mt: 2,
          }}
        >
          {flavour}
        </Typography>
        <Typography
          color="white"
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
