import Button from "./TodoButton";
import { completeTodo, setEditTodoId, removeTodo } from "../redux/todoSlice";
import { appUseDispatch } from "../hook";

interface ITodoProps {
  todoItem: {
    id: number;
    name: string | undefined;
    completed: boolean;
  };
}

const Todo: React.FC<ITodoProps> = ({ todoItem }) => {
  const dispatch = appUseDispatch();

  return (
    <div className="flex my-7 w-full gap-5 mx-auto ">
      <div
        onClick={() => dispatch(completeTodo(todoItem.id))}
        className={`${
          todoItem.completed ? "line-through" : ""
        } w-[80%] bg-gray-300 rounded-xl center p-5 text-2xl text-gray-600 cursor-pointer`}
      >
        <p>{todoItem.name}</p>
      </div>
      <div className="w-[20%] space-y-2 ">
        <Button
          onClick={() => dispatch(setEditTodoId(todoItem.id))}
          color={"bg-orange-300"}
        >
          Изменить
        </Button>
        <Button
          onClick={() => dispatch(removeTodo(todoItem.id))}
          color={"bg-red-400"}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default Todo;
