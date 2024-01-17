import styled from "styled-components";

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  width: 100%;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const StyledFormInput = styled.input`
  width: 100%;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
`;

const StyledFormButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export { StyledTodoForm, StyledFormInput, StyledFormButton };
