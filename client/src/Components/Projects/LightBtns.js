import React from "react";
import styled from "styled-components";
import { useProjectContext } from "../Providers/ProjectProvider";
import { LightBBBtn, LightNFBtn, LightWWBtn, LightGUBtn } from "./Styles";

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
    height: auto;
    gap: 1em;
  }
`;

function LightBtns() {
  const { toggle, toggleHandler } = useProjectContext();

  return (
    <BtnContainer>
      <LightBBBtn onClick={() => toggleHandler(1)} status={toggle}>
        BetterBudget
      </LightBBBtn>
      <LightNFBtn onClick={() => toggleHandler(2)} status={toggle}>
        NearFall
      </LightNFBtn>
      <LightWWBtn onClick={() => toggleHandler(3)} status={toggle}>
        WelcomeWeather
      </LightWWBtn>
      <LightGUBtn onClick={() => toggleHandler(4)} status={toggle}>
        GUStakes
      </LightGUBtn>
    </BtnContainer>
  );
}

export default LightBtns;
