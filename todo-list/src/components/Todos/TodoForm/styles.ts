import styled from "styled-components";

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 550px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.taskItem};
  padding: 10px;
  border-radius: 5px;

  // adding the label but hiding if for accesibility
  & label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const StyledFormInput = styled.input`
  width: 100%;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid black;
    background-color: ${({ theme }) => theme.colors.taskContainer};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export { StyledTodoForm, StyledFormInput };
