import {
  StyledTitle,
  StyledHoverBtsContainer,
  StyledHoverBts,
  StyledCheckboxWrapper,
  StyledCheckbox,
} from "./styles";
import { FC } from "react";
import { TodoProps } from "./types";
import { StyledButton } from "../../Button/styles";

const Todo: FC<TodoProps> = ({
  todo,
  deleteTodo,
  onEdit,
  toggleCompleteTodo,
}) => {
  return (
    <>
      <StyledCheckboxWrapper>
        <StyledCheckbox
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleteTodo}
        />
      </StyledCheckboxWrapper>
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledHoverBtsContainer>
        <StyledHoverBts>
          <StyledButton onClick={deleteTodo}>Delete</StyledButton>
          <StyledButton onClick={onEdit}>Edit</StyledButton>
        </StyledHoverBts>
      </StyledHoverBtsContainer>
    </>
  );
};

export default Todo;
