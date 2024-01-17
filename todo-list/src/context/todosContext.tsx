import { createContext, useState, useContext, ReactNode } from "react";
import { Todo } from "../components/TodoList/types";

export const TodosContext = createContext({});

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within an TodosProvider");
  }
  return context;
};

const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
