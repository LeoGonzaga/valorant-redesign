import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  width: 150px;
  border: 1px solid #2b274f;
  box-shadow: 0 2px 10px rgba(21, 11, 37, 0.5);
  border-radius: 6px;
  overflow: hidden;
  background-color: #000;
  background: linear-gradient(
    180deg,
    rgba(9, 2, 9, 1) 35%,
    rgba(52, 67, 70, 1) 100%
  );
  margin: 4px 3px;
  &:hover {
    img {
      background: linear-gradient(
        180deg,
        rgba(9, 2, 9, 1) 35%,
        rgba(17, 198, 235, 1) 100%
      );
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  object-fit: contain;
  img {
    position: relative;
    top: -30px;
  }

  h1 {
    color: #fff;
    position: relative;
    bottom: -160px;
    z-index: 99;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 26px;
  }
`;

export const Blur = styled.div`
  position: fixed;
  height: 50px;
  width: 150px;
  bottom: 7px;
  z-index: 99;
  background-image: linear-gradient(
    0deg,
    rgba(9, 2, 9, 1) 24.11%,
    rgba(9, 2, 9, 0.1) 67.19%
  );
`;
