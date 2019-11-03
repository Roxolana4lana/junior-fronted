import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Header } from "components/Header";

import { Home } from "pages/Home";

import { GlobalStyle, theme } from "./styles";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MyProfile from "components/MyProfile/MyProfile";

export const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route path="/my-profile" component={MyProfile}></Route>
    </ThemeProvider>
  </Router>
);
