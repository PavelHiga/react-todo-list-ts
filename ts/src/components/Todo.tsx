import Button from "./Button";
import { ITodoProps } from "../interfaces/data";

const Todo: React.FC<ITodoProps> = ({
  todoItem,
  deleteTodo,
  todoComplete,
  editTodoId,
}) => {
  return (
    <div className="flex mt-10 w-full gap-5 mx-auto ">
      <div
        onClick={() => todoComplete(todoItem.id)}
        className={`${
          todoItem.completed ? "line-through" : ""
        } w-[80%] bg-gray-300 rounded-xl text-2xl justify-between p-7 text-gray-600`}
      >
        <p>{todoItem.name}</p>
      </div>
      <div className="w-[20%] space-y-2 ">
        <Button onClick={() => editTodoId(todoItem)} color={"bg-orange-300"}>
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
