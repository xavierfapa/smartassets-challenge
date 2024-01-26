interface ITodoProps {
  todo: { id: string; title: string; completed: boolean };
  deleteTodo: () => void;
  onEdit: () => void;
  toggleCompleteTodo: () => void;
}

export type { ITodoProps };
