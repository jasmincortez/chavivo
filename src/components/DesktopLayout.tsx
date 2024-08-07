import { Outlet } from "react-router-dom";
import { routes, isCurrentPath, RouterLink } from "@/Router";
import { Box, Container, Grid, Stack } from "@mui/material";
import ChaVivoLogo from "./ChaVivoLogo";
import useFlavour, { getFlavourBgCss } from "@/hooks/useFlavour";
import { useEffect, useState } from "react";

export default function DesktopLayout() {
  const { flavour, setFlavour } = useFlavour();
  const [flavourCss, setFlavourCss] = useState(getFlavourBgCss(flavour));

  useEffect(() => {
    setFlavourCss(getFlavourBgCss(flavour));
  }, [flavour]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        pt: isCurrentPath("/home") ? 0 : "5rem",
        px: "3rem",
      }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            component="nav"
            sx={{
              position: "fixed",
              pt: isCurrentPath("/home") ? "5rem" : 0,
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
            maxWidth="md"
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
          {/* <ChaVivoLogo isDesktop /> */}
        </Grid>
      </Grid>
    </Box>
  );
}
