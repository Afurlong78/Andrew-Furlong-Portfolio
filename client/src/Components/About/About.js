import React, { useEffect, useRef, useState } from "react";
import Styled from "../Global/Styles";
import { useThemeContext } from "../../Providers/ThemeProvider";
import { useInView } from "react-intersection-observer";
import {
  HeaderText,
  AboutTextContainer,
  SkillsContainer,
  TopLeft,
  BottomRight,
  Skill,
  IconContainer,
  SkillTextContainer,
  SkillsWrapper,
  SkillsHeader,
  ContentContainer,
  BottomLeft,
  SectionWrapper,
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
  SiFramer,
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

function About() {
  const { theme } = useThemeContext();

  const { ref: headerRef, inView: headerVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: textRef, inView: textVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: textRef1, inView: textVisible1 } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: textRef2, inView: textVisible2 } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: skillsRef, inView: skillsVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <Styled.SectionWrapper status={theme}>
      <Styled.Container id="about">
        <Styled.VisibleWrapper visible={headerVisible}>
          <HeaderText status={theme} ref={headerRef} id="header">
            <strong style={theme ? { color: "white" } : { color: "#6D97FF" }}>
              About
            </strong>{" "}
            Me
          </HeaderText>
        </Styled.VisibleWrapper>
        <AboutTextContainer>
          {/* <TopLeft status={theme} />
        <BottomRight status={theme} />
        <BottomLeft /> */}
          <ContentContainer id="about-text">
            <Styled.VisibleWrapper visible={textVisible} ref={textRef}>
              <Styled.Text status={theme}>
                My name is Andrew Furlong and I've always been fascinated by
                technology and passionate about learning how to use it - for fun
                and to find ways to make work easier and life better. These
                interests have drawn me to the field of web development. I love
                to solve problems and create amazing applications and user
                experiences!
              </Styled.Text>
            </Styled.VisibleWrapper>

            <Styled.VisibleWrapper ref={textRef1} visible={textVisible1}>
              <Styled.Text status={theme}>
                Following graduation from Ithaca College I initially began work
                in the field of finance. While that experience gave me useful
                insight into the business world, I found the work I was doing
                was not a good match with my creative interests. Web development
                draws on a different set of skills, with problem solving,
                creativity and imagination as the key. This pairs well with the
                strong work ethic and a vast network of resources that I have
                built as I taught myself the skills to become a web developer. I
                bring all of these resources and experience to the task in
                working with local businesses to create or expand their online
                presence for their clients.
              </Styled.Text>
            </Styled.VisibleWrapper>

            <Styled.VisibleWrapper visible={textVisible2} ref={textRef2}>
              <Styled.Text status={theme}>
                When I am not developing websites and applications you can find
                me watching a sports game or on a walk with my dog, Woodie.
              </Styled.Text>
            </Styled.VisibleWrapper>

            <SkillsWrapper ref={skillsRef} visible={skillsVisible}>
              <SkillsHeader status={theme}>
                <strong>Skills</strong>
              </SkillsHeader>

              <SkillsContainer status={theme}>
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
                    <SiHtml5 style={{ height: "70%", width: "70%" }} />
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
                    <BiGitBranch style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>Git</SkillTextContainer>
                </Skill>

                <Skill status={theme}>
                  <IconContainer status={theme}>
                    <SiMongodb style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Mongo DB
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
                    <SiBootstrap style={{ height: "70%", width: "70%" }} />
                  </IconContainer>
                  <SkillTextContainer status={theme}>
                    Bootstrap
                  </SkillTextContainer>
                </Skill>
              </SkillsContainer>
            </SkillsWrapper>
          </ContentContainer>
        </AboutTextContainer>
      </Styled.Container>
    </Styled.SectionWrapper>
  );
}

export default About;
