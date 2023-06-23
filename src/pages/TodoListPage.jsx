import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const user = localStorage.getItem("name");
  const navigate = useNavigate()

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: Math.random().toString(),
        title: newTodo.trim(),
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Terimakasih sudah berkunjung ke halaman kami!")
    navigate("/");
  };

  return (
    <section className="pt-10 bg-gray-800 h-screen">
      <div className="flex flex-col justify-center">
        <div className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <div className="flex items-center justify-center text-3xl font-bold text-gray-400 text-center">
            <h1>Welcome {user}!</h1>
          </div>
          <div className="text-3xl font-bold text-white text-center pt-10">
            <h1>Todo List</h1>
          </div>
          <div className="flex items-center justify-center pt-5">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="bg-gray-800 mt-2 my-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-gray-400"
            />
            <button
              onClick={handleAddTodo}
              className="w-full my-5 py-3 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold"
            >
              Add Todo
            </button>
          </div>
          <div className="flex items-center justify-center pt-5">
            <ul>
              {todos.map((todo) => (
                <li key={todo.id} className="text-gray-400">
                  {todo.title}
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="rounded-lg py-1 px-3 ms-40 my-4 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            type="submit"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoListPage;
