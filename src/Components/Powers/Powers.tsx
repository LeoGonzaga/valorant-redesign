/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as SC from "./styles";

export const Powers = (): JSX.Element => {
  return (
    <SC.Container>
      <div>
        <SC.Squard>
          <img
            src="https://static1-br.millenium.gg/articles/2/34/62/@/81549-valorant-omen-habilidade-1-64x64-2.jpg"
            alt=""
          />
        </SC.Squard>

        <SC.Squard>
          <img
            src="https://static1-br.millenium.gg/articles/2/34/62/@/81552-valorant-omen-habilidade-2-64x64-2.jpg"
            alt=""
          />
        </SC.Squard>

        <SC.Squard>
          <img
            src="https://static1-br.millenium.gg/articles/2/34/62/@/81555-valorant-omen-habilidade-3-64x64-2.jpg"
            alt=""
          />
        </SC.Squard>

        <SC.Squard>
          <img
            src="https://static1-br.millenium.gg/articles/2/34/62/@/81558-valorant-omen-habilidade-4-64x64-2.jpg"
            alt=""
          />
        </SC.Squard>
      </div>

      <SC.Content>
        Com esta habilidade, Omen pode se teletransportar para qualquer local no
        mapa. No final da ação, ele aparece como uma sombra e, se for morto,
        retorna à sua posição inicial. Ele fica imune à ataques no final de seu
        teletransporte por um tempo limitado.
      </SC.Content>
    </SC.Container>
  );
};
