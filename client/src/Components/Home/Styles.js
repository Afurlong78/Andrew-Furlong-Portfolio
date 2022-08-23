import styled from "styled-components";
import { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  position: relative;

  @media all and (max-height: 790px) {
    height: 100%;
  }
`;

//-------------------------------------------------------//
//------------------Hero---------------------------------//
//-------------------------------------------------------//

export const HeroContainer = styled.div`
  height: 500px;
  width: 85%;

  margin-top: 190px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media all and (max-height: 790px) {
    /* margin-top: 190px; */
  }

  @media all and (max-width: 900px) {
    width: 85%;
  }
`;

const heroAnimation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const HeroTextContainer = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const HeroText = styled.h1`
  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
  font-size: 4rem;

  z-index: 2;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;

  transition: all 300ms;
  animation: 500ms ${heroAnimation} ease-in-out;

  @media all and (max-width: 900px) {
    font-size: 2rem;

    margin-left: 0px;
  }
`;

export const SubHeroText = styled.h3`
  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
  font-size: 2.5rem;

  z-index: 2;

  margin-top: -30px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 0.8px;

  transition: all 300ms;
  animation: 500ms ${heroAnimation} ease-in-out;

  @media all and (max-width: 900px) {
    font-size: 1.5rem;
    margin-top: -15px;
    margin-left: 0px;
  }
`;

export const SmallHeroText = styled.p`
  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
  font-size: 2rem;

  z-index: 2;

  margin-top: -30px;

  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: 0.8px;

  transition: all 300ms;
  animation: 500ms ${heroAnimation} ease-in-out;

  @media all and (max-width: 900px) {
    font-size: 1rem;
    margin-top: -15px;
    margin-left: 0px;
  }
`;

export const BtnRow = styled.div`
  color: #292929;

  display: flex;
  justify-content: center;
  align-items: start;

  transition: all 300ms;
  animation: 500ms ${heroAnimation} ease-in-out;

  @media all and (max-width: 900px) {
    margin-left: 0px;
  }
`;

export const HeroBtn = styled.a`
  height: 4rem;
  width: 12rem;

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

  transition: all 300ms;

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
        return `#575656`;
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

  @media all and (max-width: 900px) {
    font-size: 1rem;
    height: 3rem;
    width: 9rem;
  }
`;

//-------------------------------------------------------//
//------------------Spinner------------------------------//
//-------------------------------------------------------//

const spinnerAnimation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const SpinnerContainer = styled.div`
  height: 700px;
  width: 700px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;

  border-radius: 50%;

  overflow: hidden;

  position: absolute;
  left: 0;

  /* transition: all 300 ms; */
  animation: 800ms ${spinnerAnimation} ease-in-out;
`;

export const CoolSpinner = styled.div`
  /* position: absolute;

  width: 75%;
  height: 75%;
  border-radius: 50%;
  border: 80px solid transparent;

  border-left-color: #6985ff98;
  border-right-color: #6985ff98;
  border-top-color: #6985ff98; */
  /* border-bottom-color: #ff819693; */
`;

const redSpinnerAnimation = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const RedSpinner = styled.div`
  position: absolute;

  width: 95%;
  height: 95%;
  border-radius: 50%;
  border: 15px solid transparent;

  border-left-color: #ff819693;
  border-bottom-color: #ff819693;

  animation: ${redSpinnerAnimation} 3s ease-in-out infinite;
`;

const blueSpinnerAnimation = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const BlueSpinner = styled.div`
  position: absolute;

  width: 87%;
  height: 87%;
  border-radius: 50%;
  border: 15px solid transparent;

  border-top-color: #8fa9ff9a;
  border-left-color: #8fa9ff9a;

  animation: ${blueSpinnerAnimation} 2s ease-out infinite;
`;

const greenSpinnerAnimation = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(-360deg);
    }
`;

export const GreenSpinner = styled.div`
  position: absolute;

  width: 91%;
  height: 91%;
  border-radius: 50%;
  border: 15px solid transparent;

  border-right-color: rgba(255, 255, 96, 0.658);

  animation: ${greenSpinnerAnimation} 1.5s ease-in infinite;
`;

//-------------------------------------------------------//
//------------------btn experiment-----------------------//
//-------------------------------------------------------//

const edgeSize = `0.5em`;
const borderWidth = `0.5em`;

export const BtnExperiment = styled.a`
  margin-right: 20px;
  margin-left: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  position: relative;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;
  font-size: 1.2rem;

  height: 4rem;
  width: 12rem;

  display: inline-grid;
  padding: 0.5em, 1.5em;
  border: 0;

  clip-path: polygon(
    /* top left 1*/ 0% ${edgeSize},
    /* top left 2*/ ${edgeSize} 0%,
    /* top right */ 100% 0,
    /* bottom right 1*/ 100% calc(100% - ${edgeSize}),
    /* bottom right 2*/ calc(100% - ${edgeSize}) 100%,
    /* bottom left 1*/ 0 100%
  );

  transition: all 350ms ease-in-out;

  &:hover {
    color: ${(props) => {
      if (props.status) {
        return `#292929`;
      } else {
        return `white`;
      }
    }};

    transform: scale(1.1);
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;

    background: ${(props) => {
      if (props.status) {
        return `white`;
      } else {
        return `#292929`;
      }
    }};

    z-index: -2;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background: ${(props) => {
      if (props.status) {
        return `#575656`;
      } else {
        return `white`;
      }
    }};

    clip-path: polygon(
      /* top left 1*/ ${borderWidth} calc(${edgeSize} + ${borderWidth} * 0.5),
      /* top left 2*/ calc(${edgeSize} + ${borderWidth} * 0.5) ${edgeSize},
      /* top right */ calc(100% - ${borderWidth}) ${borderWidth},
      /* bottom right 1*/ calc(100% - ${borderWidth})
        calc(100% - calc(${edgeSize} + ${borderWidth} * 0.5)),
      /* bottom right 2*/ calc(100% - calc(${edgeSize} + ${borderWidth} * 0.5))
        calc(100% - ${borderWidth}),
      /* bottom left 1*/ ${borderWidth} calc(100% - ${borderWidth})
    );

    transition: clip-path 450ms;
  }

  &:hover:after {
    clip-path: polygon(
      /* top left 1*/ calc(100% - ${borderWidth})
        calc(100% - calc(${edgeSize} + ${borderWidth} * 0.5)),
      /* top left 2*/ calc(100% - ${borderWidth}) ${borderWidth},
      /* top right */ calc(100% - ${borderWidth}) ${borderWidth},
      /* bottom right 1*/ calc(100% - ${borderWidth})
        calc(100% - calc(${edgeSize} + ${borderWidth} * 0.5)),
      /* bottom right 2*/ calc(100% - calc(${edgeSize} + ${borderWidth} * 0.5))
        calc(100% - ${borderWidth}),
      /* bottom left 1*/ calc(100% - calc(${edgeSize} + ${borderWidth} * 0.5))
        calc(100% - ${borderWidth})
    );
  }

  @media all and (max-width: 900px) {
    font-size: 1rem;
    height: 3rem;
    width: 9rem;
  }
`;

//-------------------------------------------------------//
//------------------Shapes-------------------------------//
//-------------------------------------------------------//

const orangeOne = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Orange = styled.div`
  height: 75px;
  width: 75px;

  border-radius: 49% 51% 29% 71% / 57% 30% 70% 43%;

  background: orange;

  position: absolute;
  top: 105px;
  left: 20px;

  transition: 200ms ease-in-out;

  z-index: 2;

  animation: 800ms ${orangeOne} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const orangeTwo = keyframes`
  0%{
    transform: translateY(50%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Orange1 = styled.div`
  background: #faecba;

  height: 90px;
  width: 90px;

  border-radius: 44% 56% 68% 32% / 22% 66% 34% 78%;

  position: absolute;
  top: 750px;
  left: 640px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${orangeTwo} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const orangeThree = keyframes`
  0%{
    transform: translateX(100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const Orange2 = styled.div`
  background: rgb(255, 156, 80);

  height: 110px;
  width: 110px;

  border-radius: 44% 56% 43% 57% / 36% 40% 60% 64%;

  position: absolute;
  top: 510px;
  left: 910px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${orangeThree} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const greenAnimation = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Green = styled.div`
  height: 200px;
  width: 200px;

  border-radius: 49% 51% 68% 32% / 30% 47% 53% 70%;

  background: #89e5a4;

  position: absolute;
  top: 125px;
  left: 900px;

  transition: all 200ms ease-in-out;

  z-index: 2;

  animation: 800ms ${greenAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const greenOneAnimation = keyframes`
  0%{
    transform: translateX(100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const Green1 = styled.div`
  background: rgb(122, 255, 178);

  height: 110px;
  width: 110px;

  border-radius: 42% 58% 39% 61% / 66% 25% 75% 34%;

  position: absolute;
  top: 810px;
  left: 1510px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${greenOneAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const blueAnimation = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Blue = styled.div`
  height: 100px;
  width: 100px;

  border-radius: 64% 36% 58% 42% / 61% 70% 30% 39%;

  background: #7e94ff;

  position: absolute;
  top: 120px;
  left: 600px;

  transition: all 200ms ease-in-out;

  z-index: 2;

  animation: 800ms ${blueAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const blueOneAnimation = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Blue1 = styled.div`
  background: #9afffc;

  height: 60px;
  width: 60px;

  border-radius: 22% 78% 65% 35% / 34% 69% 31% 66%;

  position: absolute;
  top: 860px;
  left: 540px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${blueOneAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const redAnimation = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Red = styled.div`
  background: #ff6a6a;

  height: 50px;
  width: 50px;

  border-radius: 32% 68% 58% 42% / 61% 46% 54% 39%;

  position: absolute;
  top: 100px;
  left: 540px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${redAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
export const HomeId = styled.div`
  background: transparent;

  height: 50px;
  width: 50px;

  position: absolute;
  top: 0px;
  left: 0px;

  transition: all 150ms ease-in-out;

  z-index: -1;
`;

const redOneAnimation = keyframes`
  0%{
    transform: translateX(100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const Red1 = styled.div`
  background: #ff8585;

  height: 50px;
  width: 50px;

  border-radius: 56% 44% 59% 41% / 30% 62% 38% 70%;

  position: absolute;
  top: 350px;
  left: 1400px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${redOneAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const yellowAnimation = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Yellow = styled.div`
  background: #fbff87;

  height: 110px;
  width: 110px;

  border-radius: 45% 55% 33% 67% / 61% 46% 54% 39%;

  position: absolute;
  top: 840px;
  left: 40px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${yellowAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const prupleAnimation = keyframes`
  0%{
    transform: translateX(100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const Purple = styled.div`
  background: #e06cf6;

  height: 110px;
  width: 110px;

  border-radius: 45% 55% 65% 35% / 61% 69% 31% 39%;

  position: absolute;
  top: 640px;
  left: 740px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${prupleAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const pinkAnimation = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Pink = styled.div`
  background: #f9c1ff;

  height: 110px;
  width: 110px;

  border-radius: 71% 29% 65% 35% / 34% 69% 31% 66%;

  position: absolute;
  top: 810px;
  left: 810px;

  transition: all 150ms ease-in-out;

  z-index: 2;

  animation: 800ms ${pinkAnimation} ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
