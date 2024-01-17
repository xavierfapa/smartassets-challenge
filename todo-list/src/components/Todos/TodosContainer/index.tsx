import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import { useTodos } from "../../../context/todosContext";

export default function TodosContainer() {
  const { todos } = useTodos();

  return (
    <>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}
