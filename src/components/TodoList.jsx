import TodoCard from "./TodoCard";
import useTodoStore from "../store/todoStore";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <li className="todoItem" key={todoIndex}>
            <TodoCard key={todoIndex} id={todo.id} index={todoIndex}>
              <p>{todo.todo}</p>
            </TodoCard>
          </li>
        );
      })}
    </ul>
  );
}
