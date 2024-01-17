interface EditableTodoProps {
  editedTodo: { id: string; title: string };
  onEditChange: (title: string) => void;
  onSaveEdit: () => void;
}

export type { EditableTodoProps };
