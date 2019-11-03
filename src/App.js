import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Header } from "components/Header";

import { Home } from "pages/Home";

import { GlobalStyle, theme } from "./styles";
import { Route, HashRouter } from "react-router-dom";

export const App = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />

      <Header />
      <Route exact path="/" component={Home}></Route>
    </ThemeProvider>
  </HashRouter>
);
