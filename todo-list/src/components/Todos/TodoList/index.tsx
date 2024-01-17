import { FC, useState } from "react";
import { ITodoListProps } from "./types";
import { StyledTodoList, StyledListItem } from "./styles";
import { useTodos } from "../../../context/todosContext";
import Todo from "../Todo";
import EditableTodo from "../EditableTodo";

const TodoList: FC<ITodoListProps> = ({ todos }) => {
  const emptyTodo = { id: "", title: "" };
  const { setTodos } = useTodos();
  const [editedTodo, setEditedTodo] = useState(emptyTodo);

  const handleDelete = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleEdit = (id: string, title: string) => {
    setEditedTodo({ id, title });
  };

  const handleSaveEdit = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: editedTodo.title } : todo
      );
    });

    setEditedTodo(emptyTodo);
  };

  const handleToggleComplete = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  return (
    <StyledTodoList>
      {todos &&
        todos.map((todo) => (
          <StyledListItem key={todo.id}>
            {editedTodo && todo.id === editedTodo.id ? (
              // <>
              //   <input
              //     type="text"
              //     value={editedTodo.title}
              //     onChange={(e) =>
              //       setEditedTodo({ ...editedTodo, title: e.target.value })
              //     }
              //   />
              //   <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              // </>
              <EditableTodo
                editedTodo={editedTodo}
                onEditChange={(title) =>
                  setEditedTodo({ ...editedTodo, title })
                }
                onSaveEdit={() => handleSaveEdit(todo.id)}
              />
            ) : (
              // <>
              //   <input
              //     type="checkbox"
              //     checked={todo.completed}
              //     onChange={() => handleToggleComplete(todo.id)}
              //   />
              //   <StyledTitle>{todo.title}</StyledTitle>
              //   <StyledHoverBtsContainer>
              //     <StyledHoverBts>
              //       <button onClick={() => handleDelete(todo.id)}>X</button>
              //       <button onClick={() => handleEdit(todo.id, todo.title)}>
              //         Ed
              //       </button>
              //     </StyledHoverBts>
              //   </StyledHoverBtsContainer>
              // </>
              <Todo
                todo={todo}
                onDelete={() => handleDelete(todo.id)}
                onEdit={() => handleEdit(todo.id, todo.title)}
                onToggleComplete={() => handleToggleComplete(todo.id)}
              />
            )}
          </StyledListItem>
        ))}
    </StyledTodoList>
  );
};

export default TodoList;
