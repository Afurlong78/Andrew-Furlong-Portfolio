import styled, { keyframes } from "styled-components";
import betterBudget from "../../Assets/BetterBudget.jpg";
import nearFall from "../../Assets/NearFall.jpg";
import weather from "../../Assets/weather.jpg";
import guStakes from "../../Assets/GUStakes1.PNG";

export const VisibleWrapper = styled.div`
  height: 100%;
  width: auto;

  transition: all 500ms ease-in-out;

  opacity: ${(props) => {
    if (props.visible) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  transform: ${(props) => {
    if (props.visible) {
      return `translateX(0px)`;
    } else {
      return `translateX(-20px)`;
    }
  }};

  @media all and (max-width: 1024px) {
    height: auto;
    width: 100%;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 85%;

  margin: 75px auto 75px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  background: transparent;
`;

export const HeaderRow = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`;

export const ProjectHeader = styled.div`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: 0.8px;

  transition: all 300ms ease-in-out;

  margin-top: 20px;
  margin-bottom: 20px;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
`;

export const ResumeDownload = styled.button`
  height: 3rem;
  width: 10rem;

  border: none;
  border-radius: 8px;

  background: #292929;
  color: white;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;

  cursor: pointer;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media all and (max-width: 500px) {
    font-size: 0.8rem;
    width: auto;
    margin-left: 15px;
  }
`;

//-------------------------------------------------------------------//
//---------------------projects containers---------------------------//
//-------------------------------------------------------------------//

export const ProjectContainer = styled.div`
  height: 35rem;
  width: 100%;

  margin-bottom: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const BtnContainer = styled.div`
  height: 100%;
  width: auto;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media all and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 0.5rem;

    flex-wrap: wrap;

    width: 100%;
    margin-right: 0px;
    height: auto;
  }
`;

export const Project = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  transition: all 500ms ease-in-out;

  opacity: ${(props) => {
    if (props.visible) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  transform: ${(props) => {
    if (props.visible) {
      return `translateX(0px)`;
    } else {
      return `translateX(20px)`;
    }
  }};
`;

//-------------------------------------------------------------------//
//---------------------LIGHT project Btns----------------------------//
//-------------------------------------------------------------------//

export const LightBBBtn = styled.button`
  height: 3rem;
  width: 12rem;

  border-radius: 8px;
  border: 2px solid #7e94ff;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  cursor: pointer;

  background: ${(props) => {
    if (props.status === 1) {
      return `white`;
    } else {
      return `#7e94ff`;
    }
  }};
  color: ${(props) => {
    if (props.status === 1) {
      return `#7e94ff`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const LightNFBtn = styled.button`
  height: 3rem;
  width: 12rem;
  border: 2px solid #7e94ff;

  border-radius: 8px;

  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  background: ${(props) => {
    if (props.status === 2) {
      return `white`;
    } else {
      return `#7e94ff`;
    }
  }};
  color: ${(props) => {
    if (props.status === 2) {
      return `#7e94ff`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const LightWWBtn = styled.button`
  height: 3rem;
  width: 12rem;
  border: 2px solid #7e94ff;

  border-radius: 8px;

  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  background: ${(props) => {
    if (props.status === 3) {
      return `white`;
    } else {
      return `#7e94ff`;
    }
  }};
  color: ${(props) => {
    if (props.status === 3) {
      return `#7e94ff`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const LightGUBtn = styled.button`
  height: 3rem;
  width: 12rem;
  border: 2px solid #7e94ff;

  border-radius: 8px;

  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  background: ${(props) => {
    if (props.status === 4) {
      return `white`;
    } else {
      return `#7e94ff`;
    }
  }};
  color: ${(props) => {
    if (props.status === 4) {
      return `#7e94ff`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;

//-------------------------------------------------------------------//
//---------------------dark project Btns----------------------------//
//-------------------------------------------------------------------//

export const DarkBBBtn = styled.button`
  height: 3rem;
  width: 12rem;

  border-radius: 8px;
  border: 2px solid #292929;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  cursor: pointer;

  background: ${(props) => {
    if (props.status === 1) {
      return `#575656`;
    } else {
      return `#292929`;
    }
  }};

  color: ${(props) => {
    if (props.status === 1) {
      return `white`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
    background: #575656;
  }

  @media all and (max-width: 500px) {
    font-size: 0.7rem;
    width: 9rem;
  }
`;

export const DarkNFBtn = styled.button`
  height: 3rem;
  width: 12rem;

  border-radius: 8px;
  border: 2px solid #292929;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  cursor: pointer;

  background: ${(props) => {
    if (props.status === 2) {
      return `#575656`;
    } else {
      return `#292929`;
    }
  }};
  color: ${(props) => {
    if (props.status === 2) {
      return `white`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
    background: #575656;
  }

  @media all and (max-width: 500px) {
    font-size: 0.7rem;
    width: 9rem;
  }
`;

export const DarkWWBtn = styled.button`
  height: 3rem;
  width: 12rem;

  border-radius: 8px;
  border: 2px solid #292929;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  cursor: pointer;

  background: ${(props) => {
    if (props.status === 3) {
      return `#575656`;
    } else {
      return `#292929`;
    }
  }};
  color: ${(props) => {
    if (props.status === 3) {
      return `white`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
    background: #575656;
  }

  @media all and (max-width: 500px) {
    font-size: 0.7rem;
    width: 9rem;
  }
`;

export const DarkGUBtn = styled.button`
  height: 3rem;
  width: 12rem;

  border-radius: 8px;
  border: 2px solid #292929;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  cursor: pointer;

  background: ${(props) => {
    if (props.status === 4) {
      return `#575656`;
    } else {
      return `#292929`;
    }
  }};
  color: ${(props) => {
    if (props.status === 4) {
      return `white`;
    } else {
      return `white`;
    }
  }};

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.2);
    background: #575656;
  }

  @media all and (max-width: 500px) {
    font-size: 0.7rem;
    width: 9rem;
  }
`;

//-------------------------------------------------------------------//
//---------------------projects--------------------------------------//
//-------------------------------------------------------------------//

export const BetterBudget = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: -4px 10px 10px 0px rgba(0, 0, 0, 0.2);

  transition: ${(props) => {
    if (props.status === 1) {
      return `all 800ms ease-in-out`;
    } else {
      return `all 350ms ease-in-out`;
    }
  }};
  transform: ${(props) => {
    if (props.status === 1) {
      return `translateX(0%)`;
    } else {
      return `translateX(101%)`;
    }
  }};
`;

export const BBMedia = styled.div`
  height: 100%;
  width: 30%;

  border-radius: 8px 0px 0px 8px;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.25)),
    url(${betterBudget});
  background-size: cover;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;

export const BBContent = styled.div`
  height: 100%;
  width: 70%;

  border-radius: 0px 8px 8px 0px;
  border: 4px solid #292929;

  transition: all 200ms ease-in-out;
  background: ${(props) => {
    if (props.status) {
      return "lightgrey";
    } else {
      return `white`;
    }
  }};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  color: #292929;

  box-sizing: border-box;

  padding: 20px;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media all and (max-width: 1024px) {
    width: 100%;
    border-radius: 8px;
    background-image: linear-gradient(
        hsla(0, 0%, 0%, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${betterBudget});
    background-size: cover;
    color: white;
    border: none;
  }
`;

export const NearFall = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: -4px 10px 10px 0px rgba(0, 0, 0, 0.2);

  transition: ${(props) => {
    if (props.status === 2) {
      return `all 800ms ease-in-out`;
    } else {
      return `all 350ms ease-in-out`;
    }
  }};
  transform: ${(props) => {
    if (props.status === 2) {
      return `translateX(0%)`;
    } else {
      return `translateX(101%)`;
    }
  }};
`;

export const NFMedia = styled.div`
  height: 100%;
  width: 30%;

  border-radius: 8px 0px 0px 8px;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.25)),
    url(${nearFall});
  background-size: cover;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;

export const NFContent = styled.div`
  height: 100%;
  width: 70%;

  border-radius: 0px 8px 8px 0px;
  border: 4px solid #292929;

  transition: all 200ms ease-in-out;
  background: ${(props) => {
    if (props.status) {
      return "lightgrey";
    } else {
      return `white`;
    }
  }};
  color: #292929;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  box-sizing: border-box;

  padding: 20px;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media all and (max-width: 1024px) {
    width: 100%;
    border-radius: 8px;
    background-image: linear-gradient(
        hsla(0, 0%, 0%, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${nearFall});
    background-size: cover;
    color: white;
    border: none;
  }
`;

export const WelcomeWeather = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: -4px 10px 10px 0px rgba(0, 0, 0, 0.2);

  transition: ${(props) => {
    if (props.status === 3) {
      return `all 800ms ease-in-out`;
    } else {
      return `all 350ms ease-in-out`;
    }
  }};
  transform: ${(props) => {
    if (props.status === 3) {
      return `translateX(0%)`;
    } else {
      return `translateX(101%)`;
    }
  }};
`;

export const WWMedia = styled.div`
  height: 100%;
  width: 30%;

  border-radius: 8px 0px 0px 8px;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.25)),
    url(${weather});
  background-size: cover;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;

export const WWContent = styled.div`
  height: 100%;
  width: 70%;

  transition: all 200ms ease-in-out;
  background: ${(props) => {
    if (props.status) {
      return "lightgrey";
    } else {
      return `white`;
    }
  }};
  color: #292929;

  border: 4px solid #292929;

  border-radius: 0px 8px 8px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  box-sizing: border-box;

  padding: 20px;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media all and (max-width: 1024px) {
    width: 100%;
    border-radius: 8px;
    background-image: linear-gradient(
        hsla(0, 0%, 0%, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${weather});
    background-size: cover;
    color: white;
    border: none;
  }
`;

export const GUStakes = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: -4px 10px 10px 0px rgba(0, 0, 0, 0.2);

  transition: ${(props) => {
    if (props.status === 4) {
      return `all 800ms ease-in-out`;
    } else {
      return `all 350ms ease-in-out`;
    }
  }};
  transform: ${(props) => {
    if (props.status === 4) {
      return `translateX(0%)`;
    } else {
      return `translateX(101%)`;
    }
  }};
`;

export const GUMedia = styled.div`
  height: 100%;
  width: 30%;

  border-radius: 8px 0px 0px 8px;

  background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.25)),
    url(${guStakes});
  background-size: cover;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;

export const GUContent = styled.div`
  height: 100%;
  width: 70%;

  transition: all 200ms ease-in-out;
  background: ${(props) => {
    if (props.status) {
      return "lightgrey";
    } else {
      return `white`;
    }
  }};
  color: #292929;

  border: 4px solid #292929;
  border-radius: 0px 8px 8px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  box-sizing: border-box;

  padding: 20px;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media all and (max-width: 1024px) {
    width: 100%;
    border-radius: 8px;
    background-image: linear-gradient(
        hsla(0, 0%, 0%, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(${guStakes});
    background-size: cover;
    color: white;
    border: none;
  }
`;

//-------------------------------------------------------------------//
//---------------------card text-------------------------------------//
//-------------------------------------------------------------------//

export const CardHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  letter-spacing: 0.8px;

  margin-bottom: 10px;

  color: #292929;

  @media all and (max-width: 1024px) {
    color: white;
  }

  @media all and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;

  color: #292929;

  @media all and (max-width: 1024px) {
    color: white;
  }

  @media all and (max-width: 900px) {
    font-size: 0.9rem;
  }

  @media all and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const SkillsRow = styled.div`
  width: 100%;
  height: auto;

  transition: all 100ms ease-in-out;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  justify-content: center;
  align-items: center;

  gap: 1em;

  @media all and (max-width: 1140px) {
    gap: 0.5em;
  }

  @media all and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    justify-content: center;
    align-items: center;
  }
`;

export const Skill = styled.div`
  width: 230px;
  height: 2rem;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 300ms ease-in-out;

  background: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#7e94ff`;
    }
  }};

  @media all and (max-width: 1024px) {
    background: white;
  }

  @media all and (max-width: 900px) {
    width: 180px;
    height: 1.5rem;
    font-size: 0.8rem;
  }
`;

export const IconContainer = styled.div`
  height: 100%;

  width: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => {
    if (props.status) {
      return `#292929`;
    } else {
      return `white`;
    }
  }};

  @media all and (max-width: 1024px) {
    color: #292929;
  }
`;

export const SkillTextContainer = styled.div`
  height: 100%;

  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => {
    if (props.status) {
      return `#292929`;
    } else {
      return `white`;
    }
  }};

  @media all and (max-width: 1024px) {
    color: #292929;
  }
`;

//-------------------------------------------------------------------//
//---------------------card text-------------------------------------//
//-------------------------------------------------------------------//

export const CardBtnRow = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  display: ${(props) => {
    if (props.status) {
      return `block`;
    } else {
      return `none`;
    }
  }};
`;

export const CardBtn = styled.a`
  height: 3rem;
  width: 10rem;

  cursor: pointer;

  background: transparent;
  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
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

  border: ${(props) => {
    if (props.status) {
      return `2px solid white`;
    } else {
      return `2px solid #292929`;
    }
  }};
  border-radius: 8px;

  margin-right: 20px;

  transition: all 200ms;

  background-image: ${(props) => {
    if (props.status) {
      return `linear-gradient(to right, transparent 50%, white 50%)`;
    } else {
      return `  linear-gradient(to right, transparent 50%, #292929 50%)`;
    }
  }};
  background-size: 200%;
  background-position: 0%;

  &:hover {
    background-position: 100%;
    color: ${(props) => {
      if (props.status) {
        return `#292929`;
      } else {
        return `white`;
      }
    }};
    border: ${(props) => {
      if (props.status) {
        return `2px solid white`;
      } else {
        return `2px solid #292929`;
      }
    }};
  }

  @media all and (max-width: 1024px) {
    color: white;
    border: 2px solid white;

    &:hover {
      background-image: linear-gradient(to right, transparent 50%, white 50%);
      border: 2px solid white;
      color: #292929;
    }
  }

  @media all and (max-width: 900px) {
    font-size: 1rem;
    height: 3rem;
    width: 9rem;
  }

  @media all and (max-width: 700px) {
    font-size: 0.8rem;
    height: 2rem;
    width: 7rem;
  }
`;
