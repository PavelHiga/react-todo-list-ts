interface IButton extends React.ComponentPropsWithRef<"button"> {
  color: "bg-blue-400" | "bg-red-400" | "bg-orange-300";
}

const Button: React.FC<IButton> = ({ children, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} rounded-xl px-4 py-1 text-white text-2xl w-full max-w-[140px]`}
    >
      {children}
    </button>
  );
};

export default Button;
