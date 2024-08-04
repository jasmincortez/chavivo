import StickyFooter from "./StickyFooter";
import { isCurrentPath } from "./Router";
import { Box, CssBaseline } from "@mui/material";
import MobileLayout from "./components/MobileLayout";
import DesktopLayout from "./components/DesktopLayout";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Flavour } from "./Sabores";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectFlavour, setFlavour } from "./features/flavours/flavourSlice";
import { getFlavourBgCss } from "./hooks/useFlavour";

interface Bg {
  background?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
}

const homeBg: Bg = {
  backgroundImage:
    "url('https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/bg-header.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const location = useLocation();
  const dispatch = useAppDispatch();

  const flavour = useAppSelector(selectFlavour);

  const [bg, setBg] = useState<Bg | null>(homeBg);

  useEffect(() => {
    console.log("[ App.tsx ] route changed to:", location.pathname);

    if (location.pathname !== "/sabores") {
      // Reset the selected flavour
      dispatch(setFlavour(null));
      if (location.pathname === "/home") {
        setBg(homeBg);
      } else {
        setBg(null);
      }
    } else {
      // Set the baground to match the flavour
      if (flavour) {
        setBg(getFlavourBgCss(flavour));
      }
    }
  }, [location, flavour]);

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
        ...bg,
      }}
    >
      <CssBaseline />
      <Layout />
      <StickyFooter />
    </Box>
  );
}
