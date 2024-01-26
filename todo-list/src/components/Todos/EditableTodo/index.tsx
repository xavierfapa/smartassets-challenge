import { StyledInput } from "./styles";
import { StyledButton } from "../../Button/styles";
import { IEditableTodoProps } from "./types";

function EditableTodo({
  selectedEditTodo,
  onEditChange,
  editTodo,
}: IEditableTodoProps) {
  return (
    <>
      <StyledInput
        id="editTodo"
        type="text"
        value={selectedEditTodo.title}
        onChange={(e) => onEditChange(e.target.value)}
      />
      <StyledButton onClick={editTodo}>Save</StyledButton>
    </>
  );
}

export default EditableTodo;
