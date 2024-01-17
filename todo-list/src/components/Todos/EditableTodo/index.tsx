import { FC } from "react";
import { EditableTodoProps } from "./types";

const EditableTodo: FC<EditableTodoProps> = ({
  selectedEditTodo,
  onEditChange,
  editTodo,
}) => (
  <>
    <input
      type="text"
      value={selectedEditTodo.title}
      onChange={(e) => onEditChange(e.target.value)}
    />
    <button onClick={editTodo}>Save</button>
  </>
);

export default EditableTodo;
