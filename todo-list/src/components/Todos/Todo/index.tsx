import { StyledTitle, StyledHoverBtsContainer, StyledHoverBts } from "./styles";
import { FC } from "react";
import { TodoProps } from "./types";

const Todo: FC<TodoProps> = ({
  todo,
  deleteTodo,
  onEdit,
  toggleCompleteTodo,
}) => {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleteTodo}
      />
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledHoverBtsContainer>
        <StyledHoverBts>
          <button onClick={deleteTodo}>X</button>
          <button onClick={onEdit}>Edit</button>
        </StyledHoverBts>
      </StyledHoverBtsContainer>
    </>
  );
};

export default Todo;
