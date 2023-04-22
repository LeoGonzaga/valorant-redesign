import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 210px;
  align-self: flex-end;
  position: absolute;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 3;
`;

export const LeftItems = styled.div`
  position: absolute;
  left: 0px;
  height: 70%;
  z-index: 10;
  padding-left: 20px;
`;
