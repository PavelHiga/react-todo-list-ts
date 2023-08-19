import { IEditTodoProps } from "../interfaces/data";
import Button from "./Button";

const EditTodo = ({ todoItem, editTodo, setEditTodoValue, editTodoValue }: IEditTodoProps) => {
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodoValue(e.target.value);
  };

  return (
    <div key={todoItem.id} className="flex mt-10 w-full gap-5 mx-auto ">
      <input
        onChange={onChange}
        value={editTodoValue}
        className=" rounded-xl w-full bg-g p-5 text-2xl "
        placeholder="Введите задачу"
        type="text"
      />
      <Button onClick={() => editTodo(editTodoValue)} color={"bg-blue-400"}>
        Добавить
      </Button>
    </div>
  );
};

export default EditTodo;
