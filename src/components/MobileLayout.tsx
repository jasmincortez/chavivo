import { useState } from "react"
import { Outlet } from "react-router-dom"
import { routes, ListRouterLink, isCurrentPath } from "@/Router"
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import theme from "@/theme"
import ChaVivoLogo from "./ChaVivoLogo"

const drawerWidth = 240

export default function MobileLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(prevState => !prevState)
  }

  const mobileAppBarHeight = "100px"

  const drawerContent = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        height: "100dvh",
      }}
    >
      <List>
        {routes
          .filter(route => route.render)
          .map(route => (
            <ListRouterLink
              to={route.to}
              label={route.label}
              key={route.label}
            />
          ))}
      </List>
    </Box>
  )

  const appBarBg = {
    backgroundColor: "rgba(255, 255, 255, .15)",
    backdropFilter: "blur(5px)",
  }

  interface HideOnScrollProps {
    children: React.ReactElement
  }

  function HideOnScroll(props: HideOnScrollProps) {
    const trigger = useScrollTrigger()

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {props.children}
      </Slide>
    )
  }
  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          sx={{ height: mobileAppBarHeight, ...appBarBg }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            {/* Hamburger Icon */}
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "#000000",
                boxShadow: 2,
              }}
            >
              <MenuIcon />
            </IconButton>

            <ChaVivoLogo height={`calc(${mobileAppBarHeight} - 2rem)`} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={window.document.body}
          variant="temporary"
          open={isDrawerOpen}
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
          {drawerContent}
        </Drawer>
      </nav>

      <Container
        maxWidth="sm"
        component="main"
        sx={{
          mt: isCurrentPath("/home") ? 0 : `calc(${mobileAppBarHeight} + 1rem)`,
          minHeight: "100dvh",
          borderRadius: "1rem",
          backgroundColor: isCurrentPath("/home") ? "transparent" : "default",
        }}
      >
        <Outlet />
      </Container>
    </>
  )
}
