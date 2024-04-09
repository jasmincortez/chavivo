import StickyFooter from "./StickyFooter"
import { isCurrentPath } from "./Router"
import { Box, CssBaseline } from "@mui/material"
import WhatsAppBtn from "./components/WhatsAppBtn"
import MobileLayout from "./components/MobileLayout"
import DesktopLayout from "./components/DesktopLayout"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function App() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  const homeBg = {
    backgroundImage:
      "url('https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/bg-header.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }

  function Layout() {
    return isDesktop ? <DesktopLayout /> : <MobileLayout />
  }

  return (
    <Box
      sx={{
        width: "100vw",
        ...(isCurrentPath("/home") ? homeBg : {}),
      }}
    >
      <CssBaseline />
      <Layout />
      <WhatsAppBtn />
      <StickyFooter />
    </Box>
  )
}
