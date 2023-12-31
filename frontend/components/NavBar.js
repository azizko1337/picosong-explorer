import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #121212;
  border-top: 1px solid white;
  z-index: 1;
  & > *:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`;

export default NavBar;
