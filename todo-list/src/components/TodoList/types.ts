type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

interface ITodoListProps {
  todos: Todo[];
}

export type { Todo, ITodoListProps };
