import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      alignItems={"center"}
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src="https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/logo-cha-vivo.png"
        width="700"
      />
    </Box>
  );
}
