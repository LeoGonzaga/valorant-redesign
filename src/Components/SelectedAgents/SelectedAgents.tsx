import React from "react";
import * as SC from "./styles";
import astra from "../../../assets/astra.png";
import jett from "../../../assets/jett.png";
import kill from "../../../assets/kill.png";
import neon from "../../../assets/neon.png";
import raze from "../../../assets/raze.png";

const AGENTS = [
  {
    username: "Touluabere",
    agent: {
      name: "Astra",
      avatar: astra.src,
    },
  },
  {
    username: "Rugzaiga",
    agent: {
      name: "Astra",
      avatar: jett.src,
    },
  },
  {
    username: "Soel",
    agent: {
      name: "Astra",
      avatar: kill.src,
    },
  },
  {
    username: "Luiwidua",
    agent: {
      name: "Astra",
      avatar: neon.src,
    },
  },
  {
    username: "Uszayrod",
    agent: {
      name: "Astra",
      avatar: raze.src,
    },
  },
];

export const SelectedAgents = (): JSX.Element => {
  return (
    <SC.Container>
      {AGENTS.map((elem) => (
        <SC.Content key={elem.username}>
          <SC.Border>
            <img src={`http://localhost:3000` + elem.agent.avatar} alt="" />
          </SC.Border>
          <span>
            <SC.Agent>{elem.username}</SC.Agent>
            <SC.Name>{elem.agent.name}</SC.Name>
          </span>
        </SC.Content>
      ))}
    </SC.Container>
  );
};
