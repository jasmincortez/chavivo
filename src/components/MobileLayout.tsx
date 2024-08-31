import { useState } from "react";
import { Outlet } from "react-router-dom";
import { routes, ListRouterLink, isCurrentPath } from "@/Router";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "@/theme";
import ChaVivoLogo from "./ChaVivoLogo";
import InstagramIcon from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";

const drawerWidth = 240;

export default function MobileLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const mobileAppBarHeight = "100px";

  const drawerContent = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        height: "100dvh",
        paddingTop: 3,
      }}
    >
      <Container
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <ChaVivoLogo height={`calc(${mobileAppBarHeight} - 2rem)`} />
      </Container>
      <List>
        {routes
          .filter((route) => route.render)
          .map((route) => (
            <ListRouterLink
              to={route.to}
              label={route.label}
              key={route.label}
            />
          ))}
      </List>
      <Button
        target="_blank"
        component="a"
        href="https://wa.me/5521984278801"
        sx={{ color: theme.palette.font.main }}
      >
        <WhatsApp />
      </Button>
      <Button
        target="_blank"
        component="a"
        href="https://www.instagram.com/cha.vivo/"
        sx={{ color: theme.palette.font.main }}
      >
        <InstagramIcon />
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        position="relative"
        sx={{ backgroundColor: "transparent" }}
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
              backgroundColor: "#000000",
              color: theme.palette.primary.main,
              boxShadow: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
        maxWidth="lg"
        component="main"
        sx={{
          mt: 2,
          minHeight: "100dvh",
          borderRadius: "1rem",
          backgroundColor:
            isCurrentPath("/home") || isCurrentPath("/sabores")
              ? "transparent"
              : "default",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}
