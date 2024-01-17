import { FC } from "react";
import { ITodoListProps } from "./types";
import { StyledTodoList } from "./styles";

const TodoList: FC<ITodoListProps> = ({ todos }) => {
  return <StyledTodoList>Render Todos</StyledTodoList>;
};

export default TodoList;
