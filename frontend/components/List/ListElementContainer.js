import styled from "styled-components";

const ListElementContainer = styled.li`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: stretch;

  ${({ hidden }) => hidden && `filter: brightness(0.3);`}
`;

export default ListElementContainer;
