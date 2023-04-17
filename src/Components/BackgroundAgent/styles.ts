import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("heaven.png");
  background-repeat: no-repeat;
  background-size: cover;

  img {
    max-width: 30%;
    z-index: 2;
  }
`;

export const Overlay = styled.div`
  background-color: black;
  position: absolute;
  height: 100vh;
  width: 100%;
  opacity: 0.7;
`;
