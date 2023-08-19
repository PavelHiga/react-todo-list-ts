import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { ITodoList } from "./interfaces/data";
import EditTodo from "./components/EditTodo";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodoList[]>([
    { id: 1, name: "Приготовить завтрак", completed: true },
  ]);

  const [editId, setEditId] = useState<number | null>(null);
  const [editTodoValue, setEditTodoValue] = useState("");

  const editTodoId = ({ id, name }: Omit<ITodoList, 'completed'>) => {
    setEditId(id);
    setEditTodoValue(name);
  };

  const addTodo = (name: string) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        name,
        completed: false,
      },
    ]);
  };
  
  const todoComplete = (id: ITodoList["id"]) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id == id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteTodo = (id: ITodoList["id"]) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (name: ITodoList["name"]) => {
    setTodoList(
      todoList.map((todo) => {
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
      <Header todoCount={todoList.length} />
      <Input addTodo={addTodo} />
      {todoList.map((todoItem) => {
        if (todoItem.id == editId) {
          return (
            <EditTodo
              todoItem={todoItem}
              key={todoItem.id}
              editTodo={editTodo}
              setEditTodoValue={setEditTodoValue}
              editTodoValue={editTodoValue}
            />
          );
        } else {
          return (
            <Todo
              todoComplete={todoComplete}
              deleteTodo={deleteTodo}
              todoItem={todoItem}
              key={todoItem.id}
              editTodoId={editTodoId}
            />
          );
        }
      })}
    </div>
  );
};

export default App;
