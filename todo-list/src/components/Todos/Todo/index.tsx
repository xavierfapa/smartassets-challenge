import {
  StyledTitle,
  StyledHoverBtsContainer,
  StyledHoverBts,
  StyledCheckboxWrapper,
  StyledCheckbox,
} from "./styles";
import { StyledButton } from "../../Button/styles";
import { ITodoProps } from "./types";

function Todo({ todo, deleteTodo, onEdit, toggleCompleteTodo }: ITodoProps) {
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
}

export default Todo;
