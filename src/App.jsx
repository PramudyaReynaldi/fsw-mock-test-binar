import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoList from "./pages/TodoListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
