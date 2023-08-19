export interface ITodoList {
  id: number;
  name: string ;
  completed: boolean;
}

export interface IHeaderProps {
  todoCount: number;
}

export interface ITodoProps {
  todoItem: ITodoList;
  deleteTodo: (id: ITodoList["id"]) => void;
  todoComplete: (id: ITodoList["id"]) => void;
  editTodoId: (todoItem: Omit<ITodoList, 'completed'>) => void;
}


export interface IEditTodoProps {
  todoItem: ITodoList;
  editTodo: (editTodoValue: string) => void
  editTodoValue: string
  setEditTodoValue: (value: string) => void
}
