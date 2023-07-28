import styled from "styled-components";

const ListElementMenu = styled.div`
  width: 100%;
  max-width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;

  & > * :hover {
    cursor: pointer;
    filter: brightness(0.6);
  }
`;

export default ListElementMenu;
