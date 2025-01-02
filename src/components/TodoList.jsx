import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <li className="todoItem" key={todoIndex} index={todoIndex}>
            <TodoCard {...props} key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          </li>
        );
      })}
    </ul>
  );
}
