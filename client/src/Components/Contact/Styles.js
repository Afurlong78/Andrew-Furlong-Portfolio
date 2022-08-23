import styled from "styled-components";
const edgeSize = `1em`;

export const MainContact = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

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

  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.form`
  height: 100%;
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

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

  @media all and (max-width: 1024px) {
    width: 100%;
  }
`;

//---------------------------------------------------------------------------//
//------------------------------goodbye--------------------------------------//
//---------------------------------------------------------------------------//

export const GoodbyeTextContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

  @media all and (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const GoodbyeText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;
  line-height: 1.5rem;

  text-indent: 15px;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};
`;

//---------------------------------------------------------------------------//
//------------------------------success--------------------------------------//
//---------------------------------------------------------------------------//

export const SuccessfulRegistryContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: ${(props) => {
    if (props.status) {
      return `10`;
    } else {
      return `-1`;
    }
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);

  transition: all 300ms;

  opacity: ${(props) => {
    if (props.status) {
      return `1`;
    } else {
      return `0`;
    }
  }};
`;

export const SuccessTextContainer = styled.div`
  height: 20rem;
  width: 50%;

  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  color: #292929;
  letter-spacing: 0.8px;

  background: white;
  border-radius: 8px;

  font-size: 1rem;

  font-family: "Montserrat", sans-serif;

  border: 2px solid #292929;
`;

export const SuccessHeaderText = styled.h3`
  color: #292929;
  letter-spacing: 0.8px;

  font-size: 2rem;

  font-family: "Montserrat", sans-serif;

  margin-bottom: 30px;
`;

export const CloseSuccessfulRegistry = styled.button`
  position: absolute;

  border: none;

  background: transparent;
  cursor: pointer;

  top: 100px;
  right: 10px;

  height: 3rem;
  width: 3rem;

  color: white;

  transition: transform 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

//---------------------------------------------------------------------------//
//------------------------------Inputs and Btn-------------------------------//
//---------------------------------------------------------------------------//

export const FormMain = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;
`;

export const FormRow = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
`;
export const FormBtnRow = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBtn = styled.button`
  height: 3rem;
  width: 10rem;

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
  }
`;

export const Input = styled.input`
  border-radius: 6px;
  width: 75%;
  height: 2.5rem;
  background: #fcfcfc;
  color: #292929;

  border: ${(props) => {
    if (props.status) {
      return `2px solid white`;
    } else {
      return `2px solid #292929`;
    }
  }};

  font-size: 1rem;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;
  padding: 5px;
`;

export const InputRow = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px;

  color: #373737;

  font-family: "Montserrat", sans-serif;
`;

export const FormTextContainer = styled.div`
  height: 3rem;
  width: 6rem;

  display: flex;
  justify-content: start;
  align-items: center;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.8px;

  color: ${(props) => {
    if (props.status) {
      return `white`;
    } else {
      return `#292929`;
    }
  }};

  @media all and (max-width: 1024px) {
    font-size: 0.9rem;
    width: 5rem;
  }
`;

export const TextContainer = styled.textarea`
  border-radius: 6px;
  width: 75%;
  height: 10rem;
  background: #fcfcfc;
  color: #292929;

  resize: none;

  font-size: 1rem;

  border: ${(props) => {
    if (props.status) {
      return `2px solid white`;
    } else {
      return `2px solid #292929`;
    }
  }};

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.8px;
  padding: 5px;

  overflow-y: scroll;
`;

export const IconContainer = styled.div`
  height: 200px;
  width: 200px;
  color: #292929;

  margin-top: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;
