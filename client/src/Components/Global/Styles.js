import styled from "styled-components";

export const HeaderText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: 0.8px;

  margin-top: 20px;
  margin-bottom: 0px;

  transition: all 300ms ease-in-out;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;

  margin-bottom: 10px;

  transition: all 300ms ease-in-out;

  text-indent: 15px;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  @media all and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 85%;

  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  position: relative;
`;

export const Row = styled.div`
  width: 90%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;
`;

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
      return `translateX(20px)`;
    }
  }};
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;

  transition: all 300ms ease-in-out;

  background: ${(props) => {
    if (props.status) {
      return `#727272`;
    } else {
      return `#F9FBFF`;
    }
  }};
  padding-top: 75px;
  padding-bottom: 75px;
`;

export const Error = styled.p`
  transition: all 300ms ease-in-out;

  width: 90%;

  display: flex;
  justify-content: end;
  align-items: center;

  color: ${(props) => {
    if (props.status) {
      return `#ff7373`;
    } else {
      return `red`;
    }
  }};
  height: 0.8rem;
  font-size: 0.8rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

const Styled = {
  HeaderText,
  Text,
  Container,
  VisibleWrapper,
  SectionWrapper,
  Row,
  Error,
  Column,
};

export default Styled;
