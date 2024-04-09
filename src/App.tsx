import StickyFooter from "./StickyFooter";
import { isCurrentPath } from "./Router";
import { Box, CssBaseline } from "@mui/material";
import WhatsAppBtn from "./components/WhatsAppBtn";
import MobileLayout from "./components/MobileLayout";
import DesktopLayout from "./components/DesktopLayout";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const homeBg = {
    backgroundImage:
      "url('https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/bg-header.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  // OPTION FOR GRAD BCKGND
  // const gradBg = {
  //   background:
  //     "linear-gradient(90deg, rgba(164,216,217,1) 26%, rgba(128,205,198,1) 26%, rgba(128,205,198,1) 74%, rgba(164,216,217,1) 74%)",
  // };

  function Layout() {
    return isDesktop ? <DesktopLayout /> : <MobileLayout />;
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
  );
}
