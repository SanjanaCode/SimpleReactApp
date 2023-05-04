import React from "react";
import "./Todo.css";
const Todo = ({
  id,
  text,
  onRemove,
}: {
  id: number;
  text: string;
  onRemove: (id: number) => void;
}) => {
  const handleOnClickRemove = () => {
    onRemove(id);
  };

  return (
    <li className="todo" key={id}>
      {text}{" "}
      <button
        className="todo-button"
        data-testid="todo-remove-button"
        onClick={handleOnClickRemove}
      >
        ❌
      </button>
    </li>
  );
};

export default Todo;
