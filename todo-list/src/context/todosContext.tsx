import { createContext, useState, useContext, ReactNode } from "react";
import { Todo } from "../components/Todos/TodoList/types";
import { defaultTodos } from "../utils/defaultTodos";

export const TodosContext = createContext(
  {} as {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }
);

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within an TodosProvider");
  }
  return context;
};

const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
