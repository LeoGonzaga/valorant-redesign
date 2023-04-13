import React from "react";
import { Styles } from "./styles";
import Image from "next/image";

export const AgentCard = () => {
  return (
    <Styles.Container>
      <img
        src="https://www.riotgames.com/darkroom/1370/9b3da9b650454646cf2a52a1635d5fe2:6b4b78e7e770762b2113996b48489449/beta-key-art-valorant.jpg"
        alt=""
      />
      <span>agente</span>
    </Styles.Container>
  );
};
