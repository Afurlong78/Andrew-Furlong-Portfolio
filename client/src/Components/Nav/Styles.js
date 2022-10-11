import { BsDisplay } from "react-icons/bs";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 90px;

  position: fixed;

  background: ${(props) => {
    if (props.status) {
      return `#292929`;
    } else {
      return `rgb(249, 251, 255, 0.99)`;
    }
  }};
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 100;

  box-shadow: -2px 7px 7px 0px rgba(0, 0, 0, 0.2);
`;

//----------------------------NAV BTNS----------------------//
//----------------------------NAV BTNS----------------------//
//----------------------------NAV BTNS----------------------//
export const NavLogo = styled.a`
  height: 60px;
  width: 60px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  background: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
  color: ${(props) => {
    if (props.status) {
      return `#292929`;
    } else {
      return `white`;
    }
  }};

  border-radius: 30% 70% 70% 30% / 38% 30% 70% 62%;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;

  position: relative;

  transition: all 100ms ease-in-out;
  &:hover {
    transform: rotate(-20deg);
    color: ${(props) => {
      if (props.status) {
        return `#292929`;
      } else {
        return `white`;
      }
    }};
  }
`;

export const NavLogoText = styled.h3`
  color: white;

  z-index: 100;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const NavLinkContainer = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 50px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 0.8px;

  @media all and (max-width: 950px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  height: 3rem;
  width: auto;

  border-radius: 8px;

  background: none;
  border: none;

  padding: 9px;

  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  letter-spacing: 0.8px;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  border: none;

  margin-left: 20px;

  transition: 200ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  &:hover {
    background: ${(props) => {
      if (props.status) {
        return `rgba(255, 255, 255, 0.2)`;
      } else {
        return `rgba(41, 41, 41, 0.5) `;
      }
    }};
    transform: scale(1.1);
    color: white;
  }
`;

//----------------------------THEME BTNS----------------------//
//----------------------------THEME BTNS----------------------//
//----------------------------THEME BTNS----------------------//

export const LogoThemeContainer = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 30px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const ThemeingPill = styled.button`
  height: 3rem;
  width: 3rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  margin-left: 15px;

  z-index: 2;

  transition: all 300ms ease-in-out;

  background: none;
  border: 2px solid transparent;
  border-radius: 4px;

  &:hover {
    border: 2px solid transparent;

    background: ${(props) => {
      if (props.status) {
        return `rgba(255, 255, 255, 0.2)`;
      } else {
        return `rgba(41, 41, 41, 0.5) `;
      }
    }};

    color: white;
  }
`;

//----------------------------MOBILE----------------------//
//----------------------------MOBILE----------------------//
//----------------------------MOBILE----------------------//

export const MobileNavIcon = styled.button`
  display: none;
  border: none;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  height: 3rem;
  width: 3rem;

  padding: 0px;

  background: transparent;

  font-size: 3rem;

  cursor: pointer;

  margin-right: 30px;

  z-index: 100;

  @media all and (max-width: 950px) {
    display: flex;
  }

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const OffCanvasIcon = styled.button`
  display: flex;
  border: none;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  height: 3rem;
  width: 3rem;

  padding: 0px;

  background: transparent;

  font-size: 3rem;

  cursor: pointer;

  margin-right: 30px;

  z-index: 100;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const MobileNav = styled.div`
  height: 100%;
  width: 60%;

  background: #292929;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  margin-top: 90px;

  position: fixed;

  top: 0;
  right: 0;

  padding: 15px;

  box-shadow: -4px 10px 10px 0px rgba(0, 0, 0, 0.2);

  transition: all 500ms ease-in-out;
  transform: ${(props) => {
    if (props.status) {
      return `translateX(0%)`;
    } else {
      return `translateX(110%)`;
    }
  }};

  @media (min-width: 950px) {
    display: none;
  }
`;

export const MobileNavContainer = styled.div`
  height: auto;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 90px;
  margin-bottom: 90px;

  @media all and (max-height: 525px) {
    margin-top: 0px;
  }
`;

export const MobileNavBtn = styled.a`
  height: 3rem;
  max-width: 12rem;
  width: 90%;

  border-radius: 8px;
  border: 2px solid transparent;

  text-decoration: none;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  color: ${(props) => {
    if (props.status) {
      return `#292929`;
    } else {
      return `white`;
    }
  }};

  margin-bottom: 15px;

  transition: all 200ms ease-in-out;
  &:hover {
    border: ${(props) => {
      if (props.status) {
        return `2px solid white`;
      } else {
        return `2px solid #292929`;
      }
    }};
    background: transparent;
    color: ${(props) => {
      if (props.status) {
        return `white`;
      } else {
        return `#292929`;
      }
    }};
  }
`;

export const ResumeDownload = styled.a`
  height: 3rem;
  width: auto;

  cursor: pointer;

  border-radius: 8px;

  text-decoration: none;

  background: none;
  border: none;

  padding: 9px;

  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  letter-spacing: 0.8px;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  border: none;

  margin-left: 20px;

  transition: 200ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  &:hover {
    background: ${(props) => {
      if (props.status) {
        return `rgba(255, 255, 255, 0.2)`;
      } else {
        return `rgba(41, 41, 41, 0.5) `;
      }
    }};
    transform: scale(1.1);
    color: white;
  }
`;

//--------------------CANVAS WRAPPER----------------------//
//--------------------CANVAS WRAPPER----------------------//
//--------------------CANVAS WRAPPER----------------------//
