import StickyFooter from "./StickyFooter";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import { routes, RouterLink, ListRouterLink, isCurrentPath } from "./Router";
import { Container, CssBaseline, Stack } from "@mui/material";
import theme from "./theme";

const drawerWidth = 240;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        height: "100dvh",
      }}
    >
      <Typography variant="h6" color="secondary" sx={{ my: 2 }}>
        {import.meta.env.VITE_USER_NAME}
      </Typography>
      <Divider sx={{ backgroundColor: theme.palette.highlight.main }} />
      <List>
        {routes.map((route) => (
          <ListRouterLink to={route.to} label={route.label} key={route.label} />
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage:
          "url('https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/bg-header.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {routes.map((route) => (
              <RouterLink to={route.to} label={route.label} key={route.label} />
            ))}
          </Box>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{display: { xs: "none", sm: "block" } }}
          >
            {import.meta.env.VITE_USER_NAME}
          </Typography> */}
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
            display: { xs: "block", sm: "none" },
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
            mt: 10,
            minHeight: "100dvh",
            borderRadius: "1rem",
            backgroundColor: isCurrentPath("/home") ? "transparent" : "default",
          }}
        >
          <Outlet />
        </Container>
        <StickyFooter />
      </Stack>
    </Box>
  );
}