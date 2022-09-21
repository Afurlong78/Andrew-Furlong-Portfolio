import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useThemeContext } from "../../Providers/ThemeProvider";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import {
  NavContainer,
  NavLogo,
  NavLinkContainer,
  NavLink,
  LogoThemeContainer,
  ThemeingPill,
  MobileNavIcon,
  MobileNav,
  MobileNavContainer,
  MobileNavBtn,
  ResumeDownload,
} from "./Styles";

function Nav() {
  const { theme, themeHandler } = useThemeContext();

  const [mobile, setMobile] = useState(false);

  const mobileHandler = (e) => {
    e.preventDefault();

    setMobile(!mobile);
  };

  return (
    <NavContainer id="nav">
      <LogoThemeContainer>
        <NavLogo href="#home">
          <strong>A</strong>f
        </NavLogo>
        <ThemeingPill status={theme} onClick={themeHandler}>
          {!theme ? (
            <BsFillMoonStarsFill style={{ fontSize: "3rem", color: "white" }} />
          ) : (
            <FaSun style={{ fontSize: "3rem", color: "white" }} />
          )}
        </ThemeingPill>
      </LogoThemeContainer>

      <NavLinkContainer>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <ResumeDownload href="resume.pdf" download>
          Download Resume
        </ResumeDownload>
      </NavLinkContainer>

      <MobileNavIcon onClick={mobileHandler}>
        <GiHamburgerMenu style={{fontSize:"3rem"}}/>
      </MobileNavIcon>

      <MobileNav status={mobile}>
        <MobileNavContainer>
          <MobileNavBtn href="#home">Home</MobileNavBtn>
          <MobileNavBtn href="#about">About</MobileNavBtn>
          <MobileNavBtn href="#projects">Projects</MobileNavBtn>
          <MobileNavBtn href="#contact">Contact</MobileNavBtn>
          <MobileNavBtn href="resume.pdf" download>
            Resume
          </MobileNavBtn>
        </MobileNavContainer>
      </MobileNav>
    </NavContainer>
  );
}

export default Nav;
