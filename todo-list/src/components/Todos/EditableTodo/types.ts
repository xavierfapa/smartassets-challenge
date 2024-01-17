interface EditableTodoProps {
  selectedEditTodo: { id: string; title: string };
  onEditChange: (title: string) => void;
  editTodo: () => void;
}

export type { EditableTodoProps };
