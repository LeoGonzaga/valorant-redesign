import React from "react";
import * as SC from "./styles";
import Name from "../Name";
import Type from "../Type";
import Describe from "../Describe";

export const Details = (): JSX.Element => {
  return (
    <SC.Container>
      <Type />
      <Name />
      <Describe />
    </SC.Container>
  );
};
