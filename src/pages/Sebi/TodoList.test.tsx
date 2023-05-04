/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList", () => {
  test("items can be added to Todo List", () => {
    render(<TodoList />);
    // get elements
    const listInput = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("todo-add-button");
    const todoList = screen.getByTestId("todo-list");

    // make sure they exist in the document
    expect(listInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();

    // check that items can be added to the list
    fireEvent.change(listInput, { target: { value: "test" } });
    fireEvent.click(addButton);
    expect(todoList.children).toHaveLength(1);
  });

  test("empty items should not be added to Todo List", () => {
    render(<TodoList />);
    // get elements
    const listInput = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("todo-add-button");
    const todoList = screen.getByTestId("todo-list");

    // make sure they exist in the document
    expect(listInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();

    // check that empty items are not added to the list
    fireEvent.change(listInput, { target: { value: "" } });
    fireEvent.click(addButton);
    expect(todoList.children).toHaveLength(0);
  });

  test("items can be removed from Todo List", () => {
    render(<TodoList />);
    // get elements
    const listInput = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("todo-add-button");
    const todoList = screen.getByTestId("todo-list");

    // make sure they exist in the document
    expect(listInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();

    // check that items can be removed from the list
    fireEvent.change(listInput, { target: { value: "test" } });
    fireEvent.click(addButton);
    expect(todoList.children).toHaveLength(1);

    const removeButton = screen.getByTestId("todo-remove-button");
    fireEvent.click(removeButton);
    expect(todoList.children).toHaveLength(0);
  });
});
