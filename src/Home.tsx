import { Box } from "@mui/material"

export default function Home() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50vw",
      }}
    >
      <img
        src="https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/logo-cha-vivo.png"
        width="100%"
      />
    </Box>
  )
}
