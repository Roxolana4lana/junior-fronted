import styled, { keyframes } from "styled-components";

const myAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-1000px);
  }
`;

export const Sliders = styled.div`
  background-color: ${({ theme }) => theme.color.linkWater};
  height: 260px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  ::before {
    left: 0;
    top: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 260px;
    position: absolute;
    width: 100px;
    z-index: 10;
  }
  ::after {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 260px;
    position: absolute;
    width: 100px;
    z-index: 10;
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`;
export const SliderWrapper = styled.div`
  height: 200px;
  width: 250px;
`;

export const Slider = styled.div`
  animation: ${myAnimation} 50s linear infinite;
  display: flex;
`;
