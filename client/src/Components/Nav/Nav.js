import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useThemeContext } from "../../Providers/ThemeProvider";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
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
  OffCanvasIcon,
} from "./Styles";

function Nav() {
  const { theme, themeHandler } = useThemeContext();

  const [mobile, setMobile] = useState(false);

  function closeMobile() {
    setMobile(false);
  }

  return (
    <NavContainer id="nav" status={theme}>
      <LogoThemeContainer>
        <NavLogo href="#home" status={theme}>
          <strong>A</strong>f
        </NavLogo>
        <ThemeingPill status={theme} onClick={themeHandler}>
          {!theme ? (
            <BsFillMoonStarsFill style={{ fontSize: "3rem" }} />
          ) : (
            <FaSun style={{ fontSize: "3rem" }} />
          )}
        </ThemeingPill>
      </LogoThemeContainer>

      {!mobile && (
        <NavLinkContainer>
          <NavLink href="#home" status={theme}>
            Home
          </NavLink>
          <NavLink href="#about" status={theme}>
            About
          </NavLink>
          <NavLink href="#projects" status={theme}>
            Projects
          </NavLink>
          <NavLink href="#contact" status={theme}>
            Contact
          </NavLink>
          <ResumeDownload href="resume.pdf" download status={theme}>
            Download Resume
          </ResumeDownload>
        </NavLinkContainer>
      )}

      {/* <MobileNav status={mobile} id="mobile-nav">
        <MobileNavContainer>
          <MobileNavBtn href="#home">Home</MobileNavBtn>
          <MobileNavBtn href="#about">About</MobileNavBtn>
          <MobileNavBtn href="#projects">Projects</MobileNavBtn>
          <MobileNavBtn href="#contact">Contact</MobileNavBtn>
          <MobileNavBtn href="resume.pdf" download>
            Resume
          </MobileNavBtn>
        </MobileNavContainer>
      </MobileNav> */}

      <Offcanvas
        show={mobile}
        onHide={closeMobile}
        style={
          theme
            ? { background: "#292929", width: "50%" }
            : { background: "rgb(249, 251, 255, 0.99)", width: "50%" }
        }
        placement="end"
      >
        <OffCanvasIcon
          onClick={closeMobile}
          status={theme}
          style={{
            marginTop: "20px",
            marginLeft: "20px",
          }}
        >
          <FaRegWindowClose />
        </OffCanvasIcon>
        <MobileNavContainer class="offcanvas-body">
          <MobileNavBtn href="#home" status={theme}>
            Home
          </MobileNavBtn>
          <MobileNavBtn href="#about" status={theme}>
            About
          </MobileNavBtn>
          <MobileNavBtn href="#projects" status={theme}>
            Projects
          </MobileNavBtn>
          <MobileNavBtn href="#contact" status={theme}>
            Contact
          </MobileNavBtn>
          <MobileNavBtn href="resume.pdf" download status={theme}>
            Resume
          </MobileNavBtn>
        </MobileNavContainer>
      </Offcanvas>

      <MobileNavIcon onClick={() => setMobile(!mobile)} status={theme}>
        <GiHamburgerMenu />
      </MobileNavIcon>
    </NavContainer>
  );
}

export default Nav;
