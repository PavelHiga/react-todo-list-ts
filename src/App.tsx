import { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

export interface ITodoItem {
  id: number;
  name: string | undefined;
  completed: boolean;
}

const App = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([
    { id: 1, name: "Приготовить завтрак", completed: true },
  ]);

  const [editId, setEditId] = useState<number | null>(null);

  const editTodoId = (id: number) => {
    setEditId(id);
  };

  const addTodo = (name: string) => {
    setTodoItems([
      ...todoItems,
      {
        id: todoItems.length === 0 ? 1 : todoItems[todoItems.length - 1].id + 1,
        name,
        completed: false,
      },
    ]);
  };

  const todoComplete = (id: number) => {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id == id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
  };

  const editTodo = (name: string | undefined) => {
    setTodoItems(
      todoItems.map((todo) => {
        if (todo.id === editId) {
          return { ...todo, name };
        }
        return todo;
      })
    );
    setEditId(null);
  };

  return (
    <div className="w-[700px] mx-auto mt-20">
      <Header todoCount={todoItems.length} />
      <TodoForm addTodo={addTodo} mode="add" editTodo={editTodo} />
      {todoItems.map((todoItem) =>
        todoItem.id === editId ? (
          <TodoForm
            addTodo={addTodo}
            mode="edit"
            editTodo={editTodo}
            todoItem={todoItem.name}
            key={todoItem.id}
          />
        ) : (
          <TodoItem
            todoComplete={todoComplete}
            deleteTodo={deleteTodo}
            todoItem={todoItem}
            editTodoId={editTodoId}
            key={todoItem.id}
          />
        )
      )}
    </div>
  );
};

export default App;
