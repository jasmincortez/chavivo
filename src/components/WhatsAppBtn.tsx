import { WhatsApp } from "@mui/icons-material"
import { Avatar, Link } from "@mui/material"

export default function WhatsAppBtn() {
  return (
    <Link
      href="https://wa.me/5521984278801"
      sx={{ ml: 2, position: "fixed", bottom: "1rem" }}
    >
      <Avatar
        sx={{
          backgroundColor: "#25D366",
          height: "4rem",
          width: "4rem",
          boxShadow: 4,
        }}
      >
        <WhatsApp sx={{ color: "#FFFFFF", height: "2rem", width: "2rem" }} />
      </Avatar>
    </Link>
  )
}
