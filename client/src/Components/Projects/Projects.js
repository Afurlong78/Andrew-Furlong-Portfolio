import React, { useState } from "react";
import Styled from "../Global/Styles";
import { useProjectContext } from "../../Providers/ProjectProvider";
import { useThemeContext } from "../../Providers/ThemeProvider";
import { useInView } from "react-intersection-observer";
import {
  Container,
  ProjectHeader,
  ProjectContainer,
  BtnContainer,
  Project,
  BetterBudget,
  NearFall,
  WelcomeWeather,
  GUStakes,
  BBMedia,
  BBContent,
  NFContent,
  NFMedia,
  WWContent,
  WWMedia,
  GUContent,
  GUMedia,
  CardHeader,
  CardText,
  SkillsRow,
  Skill,
  IconContainer,
  SkillTextContainer,
  CardBtnRow,
  CardBtn,
  VisibleWrapper,
  BtnWrapper,
  HeaderRow,
  DarkBBBtn,
  DarkGUBtn,
  DarkNFBtn,
  DarkWWBtn,
} from "./Styles";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiStyledcomponents,
  SiBootstrap,
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { ImEye } from "react-icons/im";

function Projects() {
  const { theme } = useThemeContext();
  const { toggle, toggleHandler } = useProjectContext();

  const { ref: headerRef, inView: headerVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: btnRef, inView: btnVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: skillsRef, inView: skillsVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <Container id="projects">
      <Styled.VisibleWrapper ref={headerRef} visible={headerVisible}>
        <HeaderRow>
          <ProjectHeader status={theme}>
            My{" "}
            <strong style={theme ? { color: "white" } : { color: "#7e94ff" }}>
              Projects
            </strong>
          </ProjectHeader>
          {/* <ResumeDownload>Resume</ResumeDownload> */}
        </HeaderRow>
      </Styled.VisibleWrapper>
      <ProjectContainer>
        <VisibleWrapper ref={btnRef} visible={btnVisible}>
          <BtnContainer>
            <DarkBBBtn onClick={() => toggleHandler(1)} status={toggle}>
              BetterBudget
            </DarkBBBtn>
            <DarkNFBtn onClick={() => toggleHandler(2)} status={toggle}>
              NearFall
            </DarkNFBtn>
            <DarkWWBtn onClick={() => toggleHandler(3)} status={toggle}>
              WelcomeWeather
            </DarkWWBtn>
            <DarkGUBtn onClick={() => toggleHandler(4)} status={toggle}>
              GUStakes
            </DarkGUBtn>
          </BtnContainer>
        </VisibleWrapper>

        <Project ref={skillsRef} visible={skillsVisible}>
          <BetterBudget status={toggle}>
            <BBMedia />
            <BBContent status={theme}>
              <CardHeader>
                <strong>Better</strong>Budget
              </CardHeader>
              <BtnWrapper status={toggle}>
                <CardBtnRow>
                  <CardBtn tabIndex="-1">
                    <ImEye style={{ marginRight: "5px" }} />
                    View
                  </CardBtn>
                  <CardBtn tabIndex="-1">
                    <BiGitBranch style={{ marginRight: "5px" }} />
                    Git
                  </CardBtn>
                </CardBtnRow>
              </BtnWrapper>
              <CardText>
                BetterBudget is a full stack application made with MERN stack.
                This app features user creation, user validation, login and much
                more. Click below to check it out!
              </CardText>
              <SkillsRow>
                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiJavascript style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Javascript
                  </SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiStyledcomponents
                      style={{ height: "70%", width: "70%" }}
                    />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Styled Components
                  </SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiMongodb />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    MongoDB
                  </SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiExpress style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Express
                  </SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiReact style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>React</SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiNodedotjs style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Node JS
                  </SkillTextContainer>
                </Skill>
              </SkillsRow>
            </BBContent>
          </BetterBudget>

          <NearFall status={toggle}>
            <NFMedia />
            <NFContent status={theme}>
              <CardHeader>
                <strong>Nearfall Fishing Charter</strong>
              </CardHeader>
              <CardBtnRow>
                <BtnWrapper status={toggle}>
                  <CardBtnRow>
                    <CardBtn tabIndex="-1">
                      <ImEye style={{ marginRight: "5px" }} />
                      View
                    </CardBtn>
                    <CardBtn tabIndex="-1">
                      <BiGitBranch style={{ marginRight: "5px" }} />
                      Git
                    </CardBtn>
                  </CardBtnRow>
                </BtnWrapper>
              </CardBtnRow>
              <CardText>
                The NearFall Fishing is my first professional experience. I was
                brought onto this project to assist in developing the theme of
                the site and create the front end.
              </CardText>
              <SkillsRow>
                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiJavascript style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Javascript
                  </SkillTextContainer>
                </Skill>
                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiHtml5 />
                  </IconContainer>
                  <SkillTextContainer status={theme}>HTML</SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiCss3 style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>CSS</SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiStyledcomponents
                      style={{ height: "70%", width: "70%" }}
                    />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Styled Components
                  </SkillTextContainer>
                </Skill>
              </SkillsRow>
            </NFContent>
          </NearFall>

          <WelcomeWeather status={toggle} tabIndex="-1">
            <WWMedia />
            <WWContent status={theme}>
              <CardHeader>
                <strong>Welcome Weather</strong>
              </CardHeader>
              <CardBtnRow>
                <BtnWrapper status={toggle}>
                  <CardBtnRow>
                    <CardBtn tabIndex="-1">
                      <ImEye style={{ marginRight: "5px" }} />
                      View
                    </CardBtn>
                    <CardBtn tabIndex="-1">
                      <BiGitBranch style={{ marginRight: "5px" }} />
                      Git
                    </CardBtn>
                  </CardBtnRow>
                </BtnWrapper>
              </CardBtnRow>
              <CardText>
                Welcome Weather is a simple application that features api
                queries and local storage.
              </CardText>
              <SkillsRow>
                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiJavascript style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Javascript
                  </SkillTextContainer>
                </Skill>
                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiHtml5 />
                  </IconContainer>
                  <SkillTextContainer status={theme}>HTML</SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiCss3 style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>CSS</SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiStyledcomponents
                      style={{ height: "70%", width: "70%" }}
                    />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Styled Components
                  </SkillTextContainer>
                </Skill>
              </SkillsRow>
            </WWContent>
          </WelcomeWeather>

          <GUStakes status={toggle}>
            <GUMedia />
            <GUContent status={theme}>
              <CardHeader>
                <strong>GUStakes</strong>
              </CardHeader>
              <CardBtnRow>
                <BtnWrapper status={toggle}>
                  <CardBtnRow>
                    <CardBtn tabIndex="-1">
                      <ImEye style={{ marginRight: "5px" }} />
                      View
                    </CardBtn>
                    <CardBtn tabIndex="-1">
                      <BiGitBranch style={{ marginRight: "5px" }} />
                      Git
                    </CardBtn>
                  </CardBtnRow>
                </BtnWrapper>
              </CardBtnRow>
              <CardText>
                Welcome Weather is a simple application that features api
                queries and local storage.
              </CardText>
              <SkillsRow></SkillsRow>
            </GUContent>
          </GUStakes>
        </Project>
      </ProjectContainer>
    </Container>
  );
}

export default Projects;
