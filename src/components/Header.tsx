interface IHeaderProps {
  todoCount: number;
}

const Header: React.FC<IHeaderProps> = ({ todoCount }) => {
  return (
    <h1 className="mb-16 text-5xl font-bold text-center text-gray-600">
      Список дел ({todoCount})
    </h1>
  );
};

export default Header;
