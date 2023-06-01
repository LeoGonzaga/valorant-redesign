import React from "react";
import * as SC from "./styles";
import raze from "../../../assets/omen.png";
import Image from "next/image";

export const BackgroundAgent = (): JSX.Element => {
  return (
    <SC.Container>
      <SC.Overlay></SC.Overlay>
      <Image src={"http://localhost:3000/" + raze.src} alt="" />
    </SC.Container>
  );
};
