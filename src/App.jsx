import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoList from "./pages/TodoListPage";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<TodoList />} path="/todos" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
