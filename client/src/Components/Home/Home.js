import React from "react";
import Styled from "../Global/Styles";
import Spinner from "./Spinner";
import { useThemeContext } from "../../Providers/ThemeProvider";
import {
  HomeContainer,
  HeroContainer,
  HeroText,
  BtnRow,
  HeroBtn,
  SubHeroText,
  SmallHeroText,
  Orange,
  Orange1,
  Orange2,
  Green,
  Green1,
  Blue,
  Blue1,
  Red,
  Red1,
  Yellow,
  Purple,
  Pink,
  HomeId,
} from "./Styles";

function Home() {
  const { theme } = useThemeContext();

  return (
    <HomeContainer>
      <HomeId id="home" />
      <Orange />
      <Orange1 />
      <Orange2 />
      <Green />
      <Green1 />
      <Blue />
      <Blue1 />
      <Red />
      <Red1 />
      <Yellow />
      <Purple />
      <Pink />
      <HeroContainer>
        <Spinner />
        <HeroText status={theme}>Hello my name is Andrew Furlong,</HeroText>
        <SubHeroText status={theme} style={{}}>
          Your full stack web developer.
        </SubHeroText>
        <SmallHeroText status={theme}>
          Lets make something amazing!
        </SmallHeroText>
        <BtnRow>
          {/* <BtnExperiment status={theme} href="#projects">
            Projects
          </BtnExperiment>
          <BtnExperiment status={theme} href="#contact">
            Contact
          </BtnExperiment> */}
          <HeroBtn href="#projects" status={theme}>
            Projects
          </HeroBtn>
          <HeroBtn href="#contact" status={theme}>
            Contact
          </HeroBtn>
        </BtnRow>
      </HeroContainer>
    </HomeContainer>
  );
}

export default Home;
