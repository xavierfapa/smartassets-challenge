import { StyledTitle, StyledHoverBtsContainer, StyledHoverBts } from "./styles";
import { FC } from "react";
import { TodoProps } from "./types";

const Todo: FC<TodoProps> = ({ todo, onDelete, onEdit, onToggleComplete }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleComplete}
      />
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledHoverBtsContainer>
        <StyledHoverBts>
          <button onClick={onDelete}>X</button>
          <button onClick={onEdit}>Edit</button>
        </StyledHoverBts>
      </StyledHoverBtsContainer>
    </>
  );
};

export default Todo;
