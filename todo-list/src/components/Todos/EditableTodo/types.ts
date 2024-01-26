interface IEditableTodoProps {
  selectedEditTodo: { id: string; title: string };
  onEditChange: (title: string) => void;
  editTodo: () => void;
}

export type { IEditableTodoProps };
