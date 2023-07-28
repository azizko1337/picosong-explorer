import styled from "styled-components";

const Input = styled.input`
  font-size: 1.2em;
  outline: none;
  border: none;
  padding: 0.2em;
  background-color: white;
  color: black;

  &:focus {
    border: none;
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

export default Input;
