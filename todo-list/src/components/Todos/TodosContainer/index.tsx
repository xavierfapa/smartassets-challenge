import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import FilterTodosBtns from "../FilterTodosBtns";
import { useTodos } from "../../../context/todosContext";
import { useEffect } from "react";
import { useFilteredTodos } from "../../../hooks/useTodoFilter";

export default function TodosContainer() {
  const { todos, filterType, setFilterType } = useTodos();

  const filteredTodos = useFilteredTodos(todos, filterType);

  useEffect(() => {
    setFilterType(filterType);
  }, [setFilterType, filterType]);

  return (
    <>
      <FilterTodosBtns />
      <TodoForm />
      <TodoList todos={filteredTodos} />
    </>
  );
}
