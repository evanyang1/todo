import useTodoStore from "../store/todoStore";

export default function TodoCard(props) {
  const { children, id } = props;
  const handleDeleteTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(id);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
