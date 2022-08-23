import React from "react";
import styled from "styled-components";
import { useProjectContext } from "../Providers/ProjectProvider";
import { DarkBBBtn, DarkNFBtn, DarkWWBtn, DarkGUBtn } from "./Styles";

export const BtnContainer = styled.div`
  height: 100%;
  width: auto;

  padding-right: 30px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;

  @media all and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    flex-wrap: wrap;

    width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    height: auto;
    gap: 1em;
  }
`;

function DarkBtns() {
  const { toggle, toggleHandler } = useProjectContext();
  return (
    <BtnContainer tabIndex="-1" id="maybe this one">
      <DarkBBBtn onClick={() => toggleHandler(1)} status={toggle}>
        BetterBudget
      </DarkBBBtn>
      <DarkNFBtn onClick={() => toggleHandler(2)} status={toggle}>
        NearFall
      </DarkNFBtn>
      <DarkWWBtn onClick={() => toggleHandler(3)} status={toggle}>
        WelcomeWeather
      </DarkWWBtn>
      <DarkGUBtn onClick={() => toggleHandler(4)} status={toggle}>
        GUStakes
      </DarkGUBtn>
    </BtnContainer>
  );
}

export default DarkBtns;
