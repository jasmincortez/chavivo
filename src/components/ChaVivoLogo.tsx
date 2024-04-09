import { isCurrentPath } from "@/Router"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export interface ChaVivoLogoProps {
  height?: number | string
  isDesktop?: boolean
}

export default function ChaVivoLogo(props: ChaVivoLogoProps) {
  const { height, width } = useWindowDimensions()

  function getLogoWidth() {
    // The grid in DesktopLayout leaves 3/12 of the page width for this component.
    const gridSectionWidth = Math.floor(width * (3 / 12))
    const rem = 16
    // The logo should therefore be that ^ width, - 3rem of padding on either side.
    return gridSectionWidth - 6 * rem
  }

  return (
    <Box
      sx={{
        mt: props.isDesktop ? 6 : 0,
        display: "flex",
        position: props.isDesktop ? "fixed" : "inherit",
      }}
    >
      <Link to="home">
        <img
          src="https://www.chavivo.com.br/site/wp-content/themes/chavivo/assets/img/logo-cha-vivo.png"
          style={{
            visibility: isCurrentPath("/home") ? "hidden" : "visible",
            height: props.height || "auto",
            width: props.isDesktop ? getLogoWidth() : "auto",
          }}
        />
      </Link>
    </Box>
  )
}