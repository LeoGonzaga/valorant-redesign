import React from "react";
import * as SC from "./styles";
import raze from "../../../assets/raze.png";

export const BackgroundAgent = (): JSX.Element => {
  return (
    <SC.Container>
      <SC.Overlay></SC.Overlay>
      <img
        src={
          "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png"
        }
      />
    </SC.Container>
  );
};
