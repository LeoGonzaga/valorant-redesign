import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  min-width: 180px;
  border: 1px solid #2b274f;
  box-shadow: 0 2px 10px rgba(21, 11, 37, 0.5);
  border-radius: 6px;
  overflow: hidden;
  background-color: #000;
  background-image: linear-gradient(
    0deg,
    #2b274f 24.11%,
    rgba(43, 39, 79, 0) 67.19%
  );

  margin: 0px 3px;
  &:hover {
    img {
      /* background-color: green; */
    }
  }
`;

export const Content = styled.div`
  img {
    height: 550px;
    position: relative;
    left: -180px;
  }
`;
