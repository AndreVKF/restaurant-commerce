import React from "react"
import ReactDOM from "react-dom/client"

import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"

import { AuthProvider } from "./hooks/authentication"
import Routes from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
