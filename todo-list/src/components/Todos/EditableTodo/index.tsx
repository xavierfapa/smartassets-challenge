import { FC } from "react";
import { EditableTodoProps } from "./types";
import { StyledButton } from "../../Button/styles";
import { StyledInput } from "./styles";

const EditableTodo: FC<EditableTodoProps> = ({
  selectedEditTodo,
  onEditChange,
  editTodo,
}) => (
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

export default EditableTodo;
