import { useEffect, useState } from "react";
import { Todo } from "../components/Todos/TodoList/types";

export const useFilteredTodos = (allTodos: Todo[], filterType: string) => {
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(allTodos);

  useEffect(() => {
    switch (filterType) {
      case "all":
        setFilteredTodos(allTodos);
        break;
      case "completed":
        setFilteredTodos(allTodos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(allTodos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(allTodos);
    }
  }, [allTodos, filterType]);

  return filteredTodos;
};
