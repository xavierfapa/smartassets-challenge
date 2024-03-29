import { StyledTodoForm, StyledFormInput } from "./styles";
import { StyledButton } from "../../Button/styles";
import { useTodos } from "../../../context/todosContext";

function TodoForm() {
  const { addTodo } = useTodos();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    addTodo(title);
    e.target.reset();
  };

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Enter a new Task</label>
      <StyledFormInput
        required
        id="todoInput"
        name="title"
        type="text"
        placeholder="Enter a new task"
      />
      <StyledButton>Add Todo</StyledButton>
    </StyledTodoForm>
  );
}

export default TodoForm;
