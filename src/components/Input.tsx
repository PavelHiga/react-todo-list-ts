import Button from "./Button";
import { useState } from "react";

interface IInput {
  addTodo: (name: string) => void;
}

const Input: React.FC<IInput> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    value !== "" ? addTodo(value) : "";
    setValue("");
  };

  return (
    <div className="flex mt-16 gap-5">
      <input
        onChange={onChange}
        value={value}
        className=" rounded-xl w-full bg-g p-5 text-2xl "
        placeholder="Введите задачу"
        type="text"
      />
      <Button onClick={onClick} color={"bg-blue-400"}>
        Добавить
      </Button>
    </div>
  );
};

export default Input;
