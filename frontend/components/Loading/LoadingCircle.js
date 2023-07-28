import styled from "styled-components";

const LoadingCircle = styled.div`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  border: 6px solid white;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 26px);
    left: calc(50% - 10px);
    height: 52px;
    width: 20px;
    background-color: #121212;
    animation: rotation 1.5s infinite linear;
  }
`;

export default LoadingCircle;
