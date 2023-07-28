import styled from "styled-components";

const Paragraph = styled.p`
  ${({ italic }) => (italic ? `font-style:italic;` : null)}
  color:lightgray
`;

export default Paragraph;
