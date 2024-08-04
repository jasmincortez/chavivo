import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import { Provider } from "react-redux"
import { store } from "./store/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
