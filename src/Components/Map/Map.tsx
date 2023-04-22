import React from "react";
import * as SC from "./styles";

import haven from "../../../public/heaven.png";
import Image from "next/image";

export const Map = (): JSX.Element => {
  return (
    <SC.Container>
      <Image src={haven} alt="" width={300} />
    </SC.Container>
  );
};
