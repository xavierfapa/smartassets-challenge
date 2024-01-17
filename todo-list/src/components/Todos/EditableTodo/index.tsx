import { FC } from "react";
import { EditableTodoProps } from "./types";

const EditableTodo: FC<EditableTodoProps> = ({
  editedTodo,
  onEditChange,
  onSaveEdit,
}) => (
  <>
    <input
      type="text"
      value={editedTodo.title}
      onChange={(e) => onEditChange(e.target.value)}
    />
    <button onClick={onSaveEdit}>Save</button>
  </>
);

export default EditableTodo;
