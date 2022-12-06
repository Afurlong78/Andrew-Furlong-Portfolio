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
  Shopping,
  GUStakes,
  BBMedia,
  BBContent,
  NFContent,
  NFMedia,
  ShopContent,
  ShopMedia,
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
  DarkShopBtn,
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
  SiSass,
  SiFramer,
  SiTypescript,
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
            <DarkShopBtn onClick={() => toggleHandler(2)} status={toggle}>
              Shopping
            </DarkShopBtn>
            <DarkNFBtn onClick={() => toggleHandler(3)} status={toggle}>
              NearFall
            </DarkNFBtn>
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
                  <CardBtn
                    tabIndex="-1"
                    target="_blank"
                    href="https://betterbudget-1-0.vercel.app/"
                  >
                    <ImEye style={{ marginRight: "5px" }} />
                    View
                  </CardBtn>
                  <CardBtn
                    tabIndex="-1"
                    target="_blank"
                    href="https://github.com/Afurlong78/BetterBudget"
                  >
                    <BiGitBranch style={{ marginRight: "5px" }} />
                    Git
                  </CardBtn>
                </CardBtnRow>
              </BtnWrapper>
              <CardText>
                <div style={{ marginBottom: "5px" }}>
                  {" "}
                  <strong>Role:</strong> Creator
                </div>
                <strong style={{ paddingRight: "5px" }}>Description:</strong>
                BetterBudget is a full stack application made with MERN stack.
                This app features user creation, user validation, login and much
                more. Click view to check it out!
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

          <Shopping status={toggle} tabIndex="-1">
            <ShopMedia />
            <ShopContent status={theme}>
              <CardHeader>
                <strong>Shopping</strong>
              </CardHeader>
              <CardBtnRow>
                <BtnWrapper status={toggle}>
                  <CardBtnRow>
                    <CardBtn
                      tabIndex="-1"
                      target="_blank"
                      href="https://shop-lyart-five.vercel.app/"
                    >
                      <ImEye style={{ marginRight: "5px" }} />
                      View
                    </CardBtn>
                    <CardBtn
                      tabIndex="-1"
                      target="_blank"
                      href="https://github.com/Afurlong78/client"
                    >
                      <BiGitBranch style={{ marginRight: "5px" }} />
                      Git
                    </CardBtn>
                  </CardBtnRow>
                </BtnWrapper>
              </CardBtnRow>
              <CardText>
                <div style={{ marginBottom: "5px" }}>
                  {" "}
                  <strong>Role:</strong> Creator
                </div>
                <strong style={{ paddingRight: "5px" }}>Description:</strong>
                Shopping is an online store clone that is meant to mimic what a
                real online store would offer to users. Users can search for
                items and add them to their cart.
              </CardText>
              <SkillsRow>
                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiTypescript style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    TypeScript
                  </SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiBootstrap />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Bootstrap
                  </SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiSass style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>SCSS</SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiFramer style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Framer Motion
                  </SkillTextContainer>
                </Skill>
              </SkillsRow>
            </ShopContent>
          </Shopping>

          <NearFall status={toggle}>
            <NFMedia />
            <NFContent status={theme}>
              <CardHeader>
                <strong>Nearfall Fishing Charter</strong>
              </CardHeader>
              <CardBtnRow>
                <BtnWrapper status={toggle}>
                  <CardBtnRow>
                    <CardBtn
                      tabIndex="-1"
                      target="_blank"
                      href="https://nearfallfishingcharters.com/"
                    >
                      <ImEye style={{ marginRight: "5px" }} />
                      View
                    </CardBtn>
                    <CardBtn
                      tabIndex="-1"
                      target="_blank"
                      href="https://github.com/saltoriousSIG/nearFallFrontEnd"
                    >
                      <BiGitBranch style={{ marginRight: "5px" }} />
                      Git
                    </CardBtn>
                  </CardBtnRow>
                </BtnWrapper>
              </CardBtnRow>
              <CardText>
                <div style={{ marginBottom: "5px" }}>
                  {" "}
                  <strong>Role:</strong> Creator
                </div>
                <strong style={{ paddingRight: "5px" }}>Description:</strong>The
                NearFall Fishing Charter is my first professional free lance
                experience. I was brought onto this project to assist in
                developing the theme of the site and create the front end and
                paypal functionality.
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

          <GUStakes status={toggle}>
            <GUMedia />
            <GUContent status={theme}>
              <CardHeader>
                <strong>GUStakes</strong>
              </CardHeader>
              <CardBtnRow>
                <BtnWrapper status={toggle}>
                  <CardBtnRow>
                    <CardBtn
                      tabIndex="-1"
                      target="_blank"
                      href="https://gustakes.gg/"
                    >
                      <ImEye style={{ marginRight: "5px" }} />
                      View
                    </CardBtn>
                    {/* <CardBtn tabIndex="-1">
                      <BiGitBranch style={{ marginRight: "5px" }} />
                      Git
                    </CardBtn> */}
                  </CardBtnRow>
                </BtnWrapper>
              </CardBtnRow>
              <CardText>
                <div style={{ marginBottom: "5px" }}>
                  {" "}
                  <strong>Role:</strong> Jr front end engineer
                </div>
                <strong style={{ paddingRight: "5px" }}>Description:</strong>
                GUStakes is a fullstack MERN application based off of the game
                Gods Unchained. Gustakes utilizes blockchain technology,
                allowing players to create stakes on various match types.
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
            </GUContent>
          </GUStakes>
        </Project>
      </ProjectContainer>
    </Container>
  );
}

export default Projects;
