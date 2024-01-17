interface TodoProps {
  todo: { id: string; title: string; completed: boolean };
  onDelete: () => void;
  onEdit: () => void;
  onToggleComplete: () => void;
}

export type { TodoProps };
