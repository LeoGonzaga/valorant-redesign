import React from "react";
import * as SC from "./styles";
import { AgentsCardProps } from "src/@types/agentCard";
import Image from "next/image";

export const AgentCard = ({ name, avatar }: AgentsCardProps) => {
  return (
    <SC.Container>
      <SC.Content>
        <img src={avatar} alt={name} />
      </SC.Content>
      <h1>{name}</h1>
    </SC.Container>
  );
};
