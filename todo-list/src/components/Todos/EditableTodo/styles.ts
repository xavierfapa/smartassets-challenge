import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid black;
  padding-left: 10px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 2px solid black;
  }
`;

export { StyledInput };
