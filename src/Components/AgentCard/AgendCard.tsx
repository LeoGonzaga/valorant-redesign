/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as SC from "./styles";
import { AgentsCardProps } from "src/@types/agentCard";

export const AgentCard = ({ name, avatar }: AgentsCardProps) => {
  return (
    <SC.Container>
      <SC.Overlay></SC.Overlay>
      <SC.Content>
        <h1>{name}</h1>

        <img src={`http://localhost:3000${avatar.src}`} alt={name} />
        <SC.Blur />
      </SC.Content>
    </SC.Container>
  );
};
