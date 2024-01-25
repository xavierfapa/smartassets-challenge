type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

// type EditableTodoType = Omit<Todo, "completed">;

interface ITodoListProps {
  todos: Todo[];
}

export type { Todo, ITodoListProps };
