import { WhatsApp } from "@mui/icons-material"
import { Avatar, Link } from "@mui/material"
import { useEffect, useState } from "react"

export default function WhatsAppBtn() {
  const [isBelowFooter, setisBelowFooter] = useState(false)
  const footerHeight = document.getElementById("footer")?.clientHeight || 0

  const handleScroll = () => {
    const scrollPosn = Math.ceil(window.innerHeight + window.scrollY)
    const spaceAboveFooter =
      document.documentElement.scrollHeight - footerHeight
    setisBelowFooter(scrollPosn >= spaceAboveFooter)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Link
      href="https://wa.me/5521984278801"
      sx={{
        ml: 2,
        position: "fixed",
        bottom: "1rem",
        opacity: isBelowFooter ? 0 : 1,
        zIndex: 99,
        transition: "all 400ms ease-in-out",
      }}
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
