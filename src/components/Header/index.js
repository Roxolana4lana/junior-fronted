import React from "react";

import { Root, Wrapper, Logo } from "./styles";
import Navigation from "./Navigation/Navigation";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  </Root>
);
