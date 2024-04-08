import { PaletteColor, createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

const tools = createTheme()
// dark chavivo
const primary = tools.palette.augmentColor({ color: { main: "#80CDC6" } })
// light chavivo
const secondary = tools.palette.augmentColor({ color: { main: "#a4d8d9" } })
// white
const highlight = tools.palette.augmentColor({ color: { main: "#FFFFFF" } })
// black
const font = tools.palette.augmentColor({ color: { main: "#000000" } })

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
      default: primary.main,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: primary.main,
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
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: primary.dark,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Playfair Display",
          textTransform: "lowercase",
          fontWeight: "bold",
          "&:hover": {
            color: "#FFFFFF",
          },
        },
      },
    },
  },
})

export default theme

declare module "@mui/material/styles" {
  interface Palette {
    highlight: PaletteColor
    font: PaletteColor
  }
  interface PaletteOptions {
    highlight: PaletteColor
    font: PaletteColor
  }
}
