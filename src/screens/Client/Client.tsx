import React from "react";
import AgentCard from "@components/AgentCard";

import * as SC from "./styles";
import BackgroundAgent from "@components/BackgroundAgent";

const AGENTS = [
  {
    name: "Astra",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/astra.png",
  },
  {
    name: "Breach",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/breach.png",
  },
  {
    name: "Brimstone",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/brimstone.png",
  },
  {
    name: "Chamber",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/chamber.png",
  },
  {
    name: "Cypher",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/cypher.png",
  },
  {
    name: "Fade",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/fade.png",
  },
  {
    name: "Gekko",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/gekko.png",
  },
  {
    name: "Raze",
    avatar:
      "https://cdn.mobalytics.gg/assets/valorant/images/agents/full-size-small/raze.png",
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
