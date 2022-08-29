import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;

  transition: all 300ms ease-in-out;

  background: ${(props) => {
    if (props.status) {
      return `#424242`;
    } else {
      return `#f9f9f9`;
    }
  }};
  padding-top: 75px;
  padding-bottom: 75px;
`;

export const HeaderText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: 0.8px;

  margin-bottom: 0px;
  margin-top: 20px;

  transition: all 300ms ease-in-out;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
`;

export const AboutTextContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  position: relative;

  /* background: ${(props) => {
    if (props.status) {
      return `#575656`;
    } else {
      return `white`;
    }
  }}; */

  line-height: 25px;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;

  transition: all 100ms ease-in-out;

  /* margin: 0.25rem auto 0.25rem; */

  overflow: hidden;

  z-index: 1;
  background: transparent;

  transition: all 500ms ease-in-out;
`;

//skils section

export const SkillsWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* 
  display: flex;
  justify-content: center;
  align-items: center; */

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

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100%;

  z-index: 1;

  transition: all 100ms ease-in-out;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  justify-content: center;
  align-items: center;

  padding-bottom: 10px;

  background: transparent;

  @media all and (max-width: 690px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const SkillsHeader = styled.div`
  height: 2rem;
  width: auto;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.8px;

  margin-top: 2rem;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  @media all and (max-width: 690px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SkillsColumn = styled.div`
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  padding-bottom: 15px;
`;

export const Skill = styled.div`
  width: 250px;
  height: 2rem;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;

  margin-top: 0.3rem;
  margin-bottom: 0.3rem;

  transition: all 300ms ease-in-out;

  background: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#6D97FF`;
    }
  }};

  @media all and (max-width: 690px) {
    width: 90%;
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
`;

export const SkillText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;

  transition: all 300ms ease-in-out;

  color: ${(props) => {
    if (props.status) {
      return `#292929`;
    } else {
      return `white`;
    }
  }};
`;

//container and apperance

export const Row = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 0.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;

  height: 35%;
  width: 35%;

  border-radius: 8px;

  background: ${(props) => {
    if (props.status) {
      return `rgba(255, 255, 255, 0.7)`;
    } else {
      return `#292929b2`;
    }
  }};
`;

export const BottomLeft = styled.div`
  box-shadow: -2px 7px 7px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 0;

  height: 99%;
  width: 98.5%;
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  height: 50%;
  width: 35%;

  background: ${(props) => {
    if (props.status) {
      return `rgba(255, 255, 255, 0.7)`;
    } else {
      return `#292929b2`;
    }
  }};
`;
