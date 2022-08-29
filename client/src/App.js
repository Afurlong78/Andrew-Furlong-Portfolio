import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { useThemeContext } from "./Providers/ThemeProvider";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;

  transition: all 300ms ease-in;

  overflow: hidden;

  background: ${(props) => {
    if (props.status) {
      return `#575656`;
    } else {
      return `white`;
    }
  }};
`;

function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    const navHeight = document.querySelector("#nav").offsetHeight;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navHeight + "px"
    );
  }, []);

  return (
    <MainContainer status={theme}>
      <Nav status={theme} />
      <Home status={theme} />
      <About status={theme} />
      <Projects status={theme} />
      <Contact status={theme} />
    </MainContainer>
  );
}

export default App;
