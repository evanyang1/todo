import { useState } from "react";
import uniqid from "uniqid";
import useTodoStore from "../store/todoStore";

export default function TodoInput() {
  const [todoValue, setTodoValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          // () =>  is important otherwise infinite generate
          addTodo({ id: uniqid(), todo: todoValue });
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
