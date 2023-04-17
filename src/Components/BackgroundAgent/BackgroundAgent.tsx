import React from "react";
import * as SC from "./styles";
import raze from "../../../assets/omen.png";

export const BackgroundAgent = (): JSX.Element => {
  return (
    <SC.Container>
      <SC.Overlay></SC.Overlay>
      <img src={"http://localhost:3000/" + raze.src} />
    </SC.Container>
  );
};
