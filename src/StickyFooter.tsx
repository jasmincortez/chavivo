import { Box, Button, Container, Typography } from "@mui/material"
import theme from "./theme"
import { isCurrentPath } from "./Router"
import { WhatsApp } from "@mui/icons-material"
import InstagramIcon from "@mui/icons-material/Instagram"
import MailOutlineIcon from "@mui/icons-material/MailOutline"

function ContactButtons() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
      <Button target="_blank" component="a" href="https://wa.me/5521984278801">
        <WhatsApp />
      </Button>
      <Button
        target="_blank"
        component="a"
        href="mailto:contato@chavivo.com.br"
      >
        <MailOutlineIcon />
      </Button>
      <Button
        target="_blank"
        component="a"
        href="https://www.instagram.com/cha.vivo/"
      >
        <InstagramIcon />
      </Button>
    </Box>
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
        <Typography
          align="center"
          variant="body2"
          color={theme.palette.secondary.main}
        >
          Kombuchá artesanal fabricado no Rio de Janeiro • Quer falar com a
          gente?
        </Typography>

        <ContactButtons />
      </Container>
    </Box>
  )
}
