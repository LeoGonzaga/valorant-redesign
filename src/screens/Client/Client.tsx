import React from "react";

import * as SC from "./styles";

import astra from "../../../assets/astra.png";
import jett from "../../../assets/jett.png";
import neon from "../../../assets/neon.png";
import harbor from "../../../assets/harbor.png";
import yuru from "../../../assets/yoru.png";
import raze from "../../../assets/raze.png";
import kill from "../../../assets/kill.png";
import Map from "@components/Map";
import Details from "@components/Details";
import AgentCard from "@components/AgentCard";
import BackgroundAgent from "@components/BackgroundAgent";
import SelectedAgents from "@components/SelectedAgents";
import Powers from "@components/Powers";

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
    name: "Raze",
    avatar: raze,
  },
  {
    name: "KillJoy",
    avatar: kill,
  },
  {
    name: "Jett",
    avatar: jett,
  },
  {
    name: "Astra",
    avatar: astra,
  },
  {
    name: "Yoru",
    avatar: yuru,
  },
];

export const Client = (): JSX.Element => {
  return (
    <SC.Container>
      <SC.LeftItems>
        <Map />
        <SelectedAgents />
      </SC.LeftItems>
      <Details />

      <SC.Footer>
        {AGENTS.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </SC.Footer>
      <BackgroundAgent />
    </SC.Container>
  );
};
