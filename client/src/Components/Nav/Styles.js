import styled from "styled-components";

const edgeSize = `0.25em`;
const borderWidth = `0.25em`;

export const NavContainer = styled.div`
  width: 100%;
  height: 90px;

  position: fixed;

  background: #292929;
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

  background: white;
  color: #292929;

  border-radius: 30% 70% 70% 30% / 38% 30% 70% 62%;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;

  position: relative;

  transition: all 100ms ease-in-out;
  &:hover {
    transform: rotate(-20deg);
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

  @media all and (max-width: 800px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  height: 2rem;
  width: auto;

  border-radius: 8px;

  background: none;
  border: none;

  padding: 9px;

  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 0.8px;

  color: white;

  border: none;

  margin-left: 20px;

  transition: 200ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
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

  margin-left: 50px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 0.8px;
`;

export const ThemeingPill = styled.button`
  height: 3rem;
  width: 6rem;

  cursor: pointer;

  margin-left: 15px;

  background: transparent;
  color: ${(props) => {
    if (props.status) {
      return `#292929`;
    } else {
      return `white`;
    }
  }};
  text-decoration: none;

  z-index: 2;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 8px;

  margin-right: 20px;

  transition: all 300ms;

  background-image: ${(props) => {
    if (props.status) {
      return `linear-gradient(to right, white 50%, #575656 50%)`;
    } else {
      return `linear-gradient(to right, #575656 50%, white 50%)`;
    }
  }};
  background-size: 200%;
  background-position: 0%;

  &:hover {
    background-position: 100%;
    color: ${(props) => {
      if (props.status) {
        return `white`;
      } else {
        return `#575656`;
      }
    }};
  }
`;

//----------------------------MOBILE----------------------//
//----------------------------MOBILE----------------------//
//----------------------------MOBILE----------------------//

export const MobileNavIcon = styled.button`
  display: none;
  border: none;
  color: white;
  font-size: 2.5rem;

  background: transparent;

  height: 50px;
  width: 50px;

  cursor: pointer;

  margin-right: 30px;

  z-index: 100;

  @media all and (max-width: 800px) {
    display: block;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
  }

  @media all and (max-width: 460px) {
    font-size: 1.5rem;
  }
`;

export const MobileNav = styled.div`
  height: 100%;
  width: 60%;

  background: #292929;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 90px;

  position: fixed;

  top: 0;
  right: 0;

  padding: 15px;

  box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);

  transition: transform 500ms ease-in-out;
  transform: ${(props) => {
    if (props.status) {
      return `translateX(0%)`;
    } else {
      return `translateX(110%)`;
    }
  }};

  @media (min-width: 800px) {
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

  margin-bottom: 90px;
`;

export const MobileNavBtn = styled.a`
  height: 3rem;
  width: 10rem;

  border-radius: 8px;
  border: 2px solid #292929;

  text-decoration: none;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: white;
  color: #292929;

  margin-bottom: 15px;

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const ResumeDownload = styled.button`
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
  font-weight: 500;
  letter-spacing: 0.8px;

  color: white;

  border: none;

  margin-left: 20px;

  transition: 200ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;
