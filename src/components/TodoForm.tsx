import { useState } from "react";
import { appUseDispatch } from "../hook";
import { addTodo, editTodo } from "../redux/todoSlice";

interface ITodoForm {
  mode: "add" | "edit";
  todoItem?: string | undefined;
}

const TodoForm: React.FC<ITodoForm> = ({ mode, todoItem }) => {
  const dispatch = appUseDispatch();
  const isEdit = mode === "edit";
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState<string | undefined>(todoItem);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isEdit ? setEditValue(e.target.value) : setValue(e.target.value);
  };

  const onClick = () => {
    isEdit ? dispatch(editTodo(editValue)) : dispatch(addTodo(value));
    setValue("");
  };

  return (
    <div className="flex mt-7 gap-5">
      <input
        onChange={onChange}
        value={isEdit ? editValue : value}
        className=" rounded-xl w-full bg-g p-5 text-2xl "
        placeholder="Введите задачу"
        type="text"
        maxLength={35}
      />

      <button
        className={`${
          value || editValue ? "bg-blue-400" : "bg-blue-300 cursor-not-allowed"
        } w-full max-w-[140px] rounded-xl px-4 text-white text-2xl`}
        onClick={onClick}
        disabled={value || editValue ? false : true}
      >
        Добавить
      </button>
    </div>
  );
};

export default TodoForm;
