type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

interface ITodoListProps {
  todos: Todo[];
}

export type { Todo, ITodoListProps };
