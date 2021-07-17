import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoPage from "./pages/TodoPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <TodoPage />
      <UserPage />
    </div>
  );
};

export default App;
