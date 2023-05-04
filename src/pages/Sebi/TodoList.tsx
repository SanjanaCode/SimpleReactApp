import React from "react";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import "./TodoList.css";
import { ITodo } from "./TodoList.types";

const TodoList = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const handleOnAddTodo = (text: string) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 0;
    const newTodo: ITodo = {
      id: id,
      text,
    };
    if (text.length > 0) setTodos([...todos, newTodo]);
  };

  const handleOnRemoveTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <TodoForm onAdd={handleOnAddTodo} />
      <ul className={todos.length ? "todo-list" : ""} data-testid="todo-list">
        {todos.map((todo, index) => (
          <Todo id={todo.id} text={todo.text} onRemove={handleOnRemoveTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
