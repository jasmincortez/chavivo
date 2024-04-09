import { Outlet } from "react-router-dom";
import { routes, isCurrentPath, RouterLink } from "@/Router";
import { Box, Container, Grid, Stack } from "@mui/material";
import ChaVivoLogo from "./ChaVivoLogo";

export default function DesktopLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Stack
            component="nav"
            sx={{
              position: "fixed",
            }}
          >
            {routes
              .filter((route) => route.render)
              .map((route) => (
                <RouterLink
                  to={route.to}
                  label={route.label}
                  key={route.label}
                />
              ))}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Container
            maxWidth="sm"
            component="main"
            sx={{
              minHeight: "100dvh",
              borderRadius: "1rem",
              backgroundColor: isCurrentPath("/home")
                ? "transparent"
                : "default",
            }}
          >
            <Outlet />
          </Container>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
          <ChaVivoLogo isDesktop />
        </Grid>
      </Grid>
    </Box>
  );
}
