import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Border = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 184, 123, 1);
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: 10px;

  rotate: 45deg;
  img {
    width: 50px;
    rotate: -45deg;
  }

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(0, 184, 123, 1) 35%,
      rgba(66, 236, 180, 1) 100%
    );
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  span {
    padding-left: 20px;
  }
`;

export const Name = styled.p``;

export const Agent = styled.h2``;
