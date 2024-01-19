import styled from "styled-components";
import { StyledHoverBtsContainer } from "../Todo/styles";

const StyledTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 550px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.taskContainer};
  padding: 10px;
  border-radius: 5px;
`;

const StyledListItem = styled.li`
  display: flex;
  gap: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.taskItem};
  padding: 12px 8px;
  border-radius: 5px;
  line-height: 1.3;
  font-weight: 400;
  &:hover ${StyledHoverBtsContainer} {
    display: flex;
  }
`;

export { StyledTodoList, StyledListItem };
