import { FC } from "react";
import { ITodoListProps } from "./types";
import { StyledTodoList, StyledListItem } from "./styles";
import { useTodos } from "../../../context/todosContext";
import Todo from "../Todo";
import EditableTodo from "../EditableTodo";

const TodoList: FC<ITodoListProps> = ({ todos }) => {
  const {
    deleteTodo,
    toggleCompleteTodo,
    editTodo,
    selectedEditTodo,
    setSelectedEditTodo,
  } = useTodos();

  const onEdit = (id: string, title: string) => {
    setSelectedEditTodo({ id, title, completed: false });
  };

  return (
    <StyledTodoList>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <StyledListItem key={todo.id}>
            {selectedEditTodo && todo.id === selectedEditTodo.id ? (
              <EditableTodo
                selectedEditTodo={selectedEditTodo}
                onEditChange={(title) =>
                  setSelectedEditTodo({ ...selectedEditTodo, title })
                }
                editTodo={() => editTodo(todo.id)}
              />
            ) : (
              <Todo
                todo={todo}
                deleteTodo={() => deleteTodo(todo.id)}
                onEdit={() => onEdit(todo.id, todo.title)}
                toggleCompleteTodo={() => toggleCompleteTodo(todo.id)}
              />
            )}
          </StyledListItem>
        ))
      ) : (
        <p>No todos available.</p>
      )}
    </StyledTodoList>
  );
};

export default TodoList;
