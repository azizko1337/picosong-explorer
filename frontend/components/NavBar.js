import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > *:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`;

export default NavBar;
