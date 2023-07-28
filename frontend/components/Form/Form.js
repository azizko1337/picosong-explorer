import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1px;
    align-items: flex-end;
  }
`;

export default Form;
