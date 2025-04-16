import { Box, useMediaQuery } from "@mui/material";
import theme from "./theme";

export default function Home() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: isDesktop ? "50vw" : "90vw", // TODO
      }}
    >
      <img src="./splash_chavivo.gif" width="100%" />
    </Box>
  );
}
