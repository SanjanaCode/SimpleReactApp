import React from "react";
import "./TodoForm.css";
const TodoForm = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [text, setText] = React.useState("");

  const handleOnClick = () => {
    onAdd(text);
    setText("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="todo-input-container">
      <input
        data-testid="todo-input"
        className="todo-input"
        value={text}
        onChange={handleOnChange}
        placeholder="Add a new todo"
        type="text"
      />
      <button
        data-testid="todo-add-button"
        className="todo-input-button"
        onClick={handleOnClick}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
