import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2em;
  padding: 0.2em;
  border: none;
  cursor: pointer;
  transition: background-image 0.2s;
  width: 100px;
  background-color: white;
  color: black;

  &:hover {
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
    color: white;
  }
`;

export default Button;
