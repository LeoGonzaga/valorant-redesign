import React from "react";

import * as SC from "./styles";
import AgentCard from "src/Components/AgentCard";
import BackgroundAgent from "src/Components/BackgroundAgent";

import astra from "../../../assets/astra.png";
import jett from "../../../assets/jett.png";
import neon from "../../../assets/neon.png";
import harbor from "../../../assets/harbor.png";
import yuru from "../../../assets/yoru.png";

const AGENTS = [
  {
    name: "Astra",
    avatar: astra,
  },
  {
    name: "Yoru",
    avatar: yuru,
  },
  {
    name: "Jett",
    avatar: jett,
  },
  {
    name: "Neon",
    avatar: neon,
  },
  {
    name: "Harbor",
    avatar: harbor,
  },
  {
    name: "Astra",
    avatar: astra,
  },
  {
    name: "Yoru",
    avatar: yuru,
  },
  {
    name: "Jett",
    avatar: jett,
  },
];

export const Client = (): JSX.Element => {
  return (
    <SC.Container>
      <BackgroundAgent />
      <SC.Footer>
        {AGENTS.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </SC.Footer>
    </SC.Container>
  );
};
