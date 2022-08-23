import React from "react";
import {
  SpinnerContainer,
  RedSpinner,
  BlueSpinner,
  GreenSpinner,
  CoolSpinner,
} from "./Styles";

function Spinner() {
  return (
    <SpinnerContainer>
      <CoolSpinner />
      <RedSpinner />
      <BlueSpinner />
      <GreenSpinner />
    </SpinnerContainer>
  );
}

export default Spinner;
