import StickyFooter from "./StickyFooter"
import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Outlet } from "react-router-dom"
import { routes, RouterLink, ListRouterLink, isCurrentPath } from "./Router"
import { Container, CssBaseline, Stack } from "@mui/material"
import theme from "./theme"
import WhatsAppBtn from "./components/WhatsAppBtn"

const drawerWidth = 240

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        height: "100dvh",
      }}
    >
      <List>
        {routes.map(route => (
          <ListRouterLink to={route.to} label={route.label} key={route.label} />
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window.document.body : undefined

  const homeBg = {
    backgroundImage:
      "url('https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/bg-header.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }

  return (
    <Box
      sx={{
        display: "flex",
        ...(isCurrentPath("/home") ? homeBg : {}),
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, backgroundColor: "#000000", color: "#FFFFFF" }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/logo-cha-vivo.png"
            height="50px"
            style={{
              visibility: isCurrentPath("/home") ? "hidden" : "visible",
            }}
          />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Stack sx={{ width: "100vw" }}>
        <Container
          maxWidth="sm"
          component="main"
          sx={{
            mt: isCurrentPath("/home") ? 0 : 10,
            minHeight: "100dvh",
            borderRadius: "1rem",
            backgroundColor: isCurrentPath("/home") ? "transparent" : "default",
          }}
        >
          <Outlet />
        </Container>
        <WhatsAppBtn />
        <StickyFooter />
      </Stack>
    </Box>
  )
}
