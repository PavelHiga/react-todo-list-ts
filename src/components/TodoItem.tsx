import Button from "./TodoButton";
import { ITodoItem } from "../App";

interface ITodoProps {
  todoItem: ITodoItem;
  deleteTodo: (id: number) => void;
  todoComplete: (id: number) => void;
  editTodoId: (id: number) => void;
}

const Todo: React.FC<ITodoProps> = ({
  todoItem,
  deleteTodo,
  todoComplete,
  editTodoId,
}) => {
  return (
    <div className="flex my-7 w-full gap-5 mx-auto ">
      <div
        onClick={() => todoComplete(todoItem.id)}
        className={`${
          todoItem.completed ? "line-through" : ""
        } w-[80%] bg-gray-300 rounded-xl center p-5 text-2xl text-gray-600 cursor-pointer`}
      >
        <p>{todoItem.name}</p>
      </div>
      <div className="w-[20%] space-y-2 ">
        <Button onClick={() => editTodoId(todoItem.id)} color={"bg-orange-300"}>
          Изменить
        </Button>
        <Button onClick={() => deleteTodo(todoItem.id)} color={"bg-red-400"}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default Todo;
