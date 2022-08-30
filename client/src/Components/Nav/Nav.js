import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useThemeContext } from "../../Providers/ThemeProvider";
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
          {!theme ? "Dark" : "Light"}
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
        <GiHamburgerMenu style={{ height: "50px", width: "50px", fontSize:"50px" }} />
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
