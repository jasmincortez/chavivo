import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import theme from "./theme"
import { isCurrentPath } from "./Router"

function BuiltBy() {
  return (
    <Typography
      align="center"
      variant="body2"
      color={theme.palette.secondary.main}
    >
      {
        "Kombuchá artesanal fabricado no Rio de Janeiro • Quer falar com a gente? "
      }
      <br />
      <Link color="inherit" href="https://wa.me/5521984278801">
        WhatsApp
      </Link>
      {" ou "}
      <Link color="inherit" href="mailto:contato@chavivo.com.br">
        contato@chavivo.com.br
      </Link>
    </Typography>
  )
}

export default function StickyFooter() {
  if (isCurrentPath("/home")) {
    return null
  }

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        py: 2,
        mt: 2,
        backgroundColor: "#000000",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#000000",
          color: theme.palette.secondary.main,
        }}
      >
        <BuiltBy />
      </Container>
    </Box>
  )
}
