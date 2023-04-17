import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  width: 98%;
  height: 210px;
  align-self: flex-end;
  position: absolute;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  z-index: 3;
`;
