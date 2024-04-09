import {
  Link,
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom"
import NotFound from "./NotFound"
import Home from "./Home"
import SobreNos from "./SobreNos"
import Sabores from "./Sabores"
import Map from "./Map"
import Duvidas from "./Duvidas"
import InfoKbc from "./InfoKbc"
import App from "./App"
import theme from "./theme"
import { Button, ListItem } from "@mui/material"

export interface RouteDefinition {
  label: string
  aria: string
  to: string
  element: JSX.Element
  render: boolean
}

export const BASE_URL = "/chavivo/"

export const routes: RouteDefinition[] = [
  {
    label: "home",
    aria: "Navigate to home",
    to: "home",
    element: <Home />,
    render: false,
  },
  {
    label: "sabores",
    aria: "Navigate to sabores",
    to: "sabores",
    element: <Sabores />,
    render: true,
  },
  {
    label: "sobre nós",
    aria: "Navigate to about us",
    to: "sobre-nos",
    element: <SobreNos />,
    render: true,
  },
  {
    label: "onde encontrar?",
    aria: "Navigate to map",
    to: "onde-encontrar",
    element: <Map />,
    render: true,
  },
  {
    label: "o que é kombucha?",
    aria: "Navigate to infokbc",
    to: "o-que-e-kombucha",
    element: <InfoKbc />,
    render: true,
  },

  {
    label: "dúvidas",
    aria: "Navigate to duvidas",
    to: "duvidas",
    element: <Duvidas />,
    render: true,
  },
]

export const isCurrentPath = (path: string) => {
  const location = useLocation()
  return location.pathname === path
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        ...routes.map(route => {
          return {
            path: route.to,
            element: route.element,
          }
        }),
      ],
    },
  ],
  {
    basename: BASE_URL,
  }
)

export type RouterLinkProps = {
  to: string
  label: string
}

export function RouterLink(props: RouterLinkProps) {
  return (
    <Link to={props.to}>
      <Button
        sx={{
          color: isCurrentPath(`/${props.to}`)
            ? theme.palette.highlight.main
            : theme.palette.font.main,
        }}
      >
        {props.label}
      </Button>
    </Link>
  )
}

export function ListRouterLink(props: RouterLinkProps) {
  return (
    <ListItem disablePadding sx={{ justifyContent: "center" }}>
      <Link
        to={props.to}
        style={{ width: "100%", textDecoration: "none", padding: "0 1rem" }}
      >
        <Button
          fullWidth
          sx={{
            color: isCurrentPath(`/${props.to}`)
              ? theme.palette.highlight.main
              : theme.palette.font.main,
            my: 1,
          }}
        >
          {props.label}
        </Button>
      </Link>
    </ListItem>
  )
}
