import styled from "styled-components";
import { StyledHoverBtsContainer } from "../Todo/styles";

const StyledTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  width: 100%;
  background-color: grey;
  padding: 10px;
  border-radius: 5px;
`;

const StyledListItem = styled.li`
  display: flex;
  // justify-content: space-between;
  gap: 10px;
  position: relative;
  background-color: yellow;
  padding: 8px;
  border-radius: 5px;
  line-height: 1.3;

  &:hover ${StyledHoverBtsContainer} {
    display: flex;
  }
`;

export { StyledTodoList, StyledListItem };
