import { useEffect, useState } from "react";
import { Todo } from "../components/Todos/TodoList/types";

export type FilterType = "all" | "completed" | "uncompleted";

function useFilteredTodos(allTodos: Todo[], filterType: FilterType) {
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
}

export default useFilteredTodos;
