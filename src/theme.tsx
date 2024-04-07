import { PaletteColor, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const tools = createTheme();
const primary = tools.palette.augmentColor({ color: { main: "#80CDC6" } });
const secondary = tools.palette.augmentColor({ color: { main: "#a4d8d9" } });
const containerBg = tools.palette.augmentColor({ color: { main: "#ffffff" } });
const highlight = tools.palette.augmentColor({ color: { main: "#624cab" } });
const font = tools.palette.augmentColor({ color: { main: "#000000" } });

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary,
    secondary,
    highlight,
    font,
    error: {
      main: red.A400,
    },
    background: {
      default: primary.light,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: containerBg.main,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Playfair Display",
          textTransform: "lowercase",
        },
      },
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    highlight: PaletteColor;
    font: PaletteColor;
  }
  interface PaletteOptions {
    highlight: PaletteColor;
    font: PaletteColor;
  }
}
