import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import { appUseSelector } from "./hook";

const App = () => {
  const { todos, editTodoId } = appUseSelector((state) => state.todo);

  return (
    <div className="w-[700px] mx-auto mt-20">
      <Header todoCount={todos.length} />
      <TodoForm mode="add" />
      {todos.map((todoItem) =>
        todoItem.id === editTodoId ? (
          <TodoForm mode="edit" todoItem={todoItem.name} key={todoItem.id} />
        ) : (
          <TodoItem todoItem={todoItem} key={todoItem.id} />
        )
      )}
    </div>
  );
};

export default App;
