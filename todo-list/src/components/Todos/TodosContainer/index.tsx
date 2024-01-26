import { useEffect } from "react";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import FilterTodosBtns from "../FilterTodosBtns";
import { useTodos } from "../../../context/todosContext";
import useFilteredTodos from "../../../hooks/useTodoFilter";

function TodosContainer() {
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

export default TodosContainer;
