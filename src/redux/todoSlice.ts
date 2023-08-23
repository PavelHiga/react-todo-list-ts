import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  name: string | undefined;
  completed: boolean;
};

type TodosState = {
  todos: Todo[];
  editTodoId: number | null;
};

const initialState: TodosState = {
  todos: [],
  editTodoId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id:
            state.todos.length === 0
              ? 1
              : state.todos[state.todos.length - 1].id + 1,
          name: action.payload,
          completed: false,
        },
      ];
    },
    editTodo: (state, action: PayloadAction<string | undefined>) => {
      state.todos.map((todo) => {
        if (todo.id === state.editTodoId) {
          todo.name = action.payload;
        }
        return todo;
      });
      state.editTodoId = null;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const completedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (completedTodo) {
        completedTodo.completed = !completedTodo.completed;
      }
    },
    setEditTodoId: (state, action: PayloadAction<number | null>) => {
      state.editTodoId = action.payload;
    },
  },
});
export const { addTodo, removeTodo, completeTodo, editTodo, setEditTodoId } =
  todoSlice.actions;
export default todoSlice.reducer;
