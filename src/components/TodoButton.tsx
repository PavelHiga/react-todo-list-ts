interface IButton extends React.ComponentPropsWithRef<"button"> {
  color: "bg-red-400" | "bg-orange-300";
}

const Button: React.FC<IButton> = ({ children, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color}  w-full max-w-[140px] rounded-xl px-4 text-white text-2xl`}
    >
      {children}
    </button>
  );
};

export default Button;
