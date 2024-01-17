import { StyledTodoForm, StyledFormInput, StyledFormButton } from "./styles";
import { useTodos } from "../../../context/todosContext";

export default function TodoForm() {
  const { addTodo } = useTodos();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    addTodo(title);
    e.target.reset();
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
