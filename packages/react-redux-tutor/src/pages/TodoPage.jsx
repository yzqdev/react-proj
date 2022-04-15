import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import TotalCompleteItems from "../components/TotalCompleteItems";
import React from "react";
export default function TodoPage() {
  return (
    <>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </>
  );
}
