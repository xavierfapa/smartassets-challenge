import { StyledTodoForm, StyledFormInput, StyledFormButton } from "./styles";
import { useTodos } from "../../../context/todosContext";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm() {
  const { setTodos } = useTodos();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const id = uuidv4();
    const newTodo = { id, title, completed: false };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <StyledFormInput
        required
        name="title"
        type="text"
        placeholder="Write your todo"
      />
      <StyledFormButton>Add Todo</StyledFormButton>
    </StyledTodoForm>
  );
}
