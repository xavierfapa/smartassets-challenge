import { createContext, useState, useContext, ReactNode } from "react";
import { Todo } from "../components/Todos/TodoList/types";
import { defaultTodos } from "../utils/defaultTodos";
import { v4 as uuidv4 } from "uuid";

export const TodosContext = createContext(
  {} as {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    addTodo: (title: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string) => void;
    toggleCompleteTodo: (id: string) => void;
    selectedEditTodo: Todo;
    setSelectedEditTodo: React.Dispatch<React.SetStateAction<Todo>>;
    filterType: string;
    setFilterType: (filterType: string) => void;
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
  const emptyTodo = { id: "", title: "", completed: false };
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const [selectedEditTodo, setSelectedEditTodo] = useState(emptyTodo);
  const [filterType, setFilterType] = useState("all");

  const addTodo = (title: string) => {
    const id = uuidv4();
    const newTodo = { id, title, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: selectedEditTodo.title } : todo
      );
    });

    setSelectedEditTodo(emptyTodo);
  };

  const toggleCompleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        editTodo,
        toggleCompleteTodo,
        selectedEditTodo,
        setSelectedEditTodo,
        filterType,
        setFilterType,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
