import { Outlet } from "react-router-dom";
import { routes, isCurrentPath, RouterLink } from "@/Router";
import { Box, Container, Stack } from "@mui/material";

export default function DesktopLayout() {
  return (
    <Box
      sx={{
        pt: isCurrentPath("/home") || isCurrentPath("/sabores") ? 0 : "5rem",
        px: "3rem",
      }}
    >
      <Stack
        component="nav"
        sx={{
          position: "fixed",
          pt: isCurrentPath("/home") || isCurrentPath("/sabores") ? "5rem" : 0,
        }}
      >
        {routes
          .filter((route) => route.render)
          .map((route) => (
            <RouterLink to={route.to} label={route.label} key={route.label} />
          ))}
      </Stack>

      <Container
        maxWidth="md"
        component="main"
        sx={{
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
    </Box>
  );
}
