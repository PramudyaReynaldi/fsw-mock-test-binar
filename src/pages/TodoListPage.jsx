import React, { useState } from "react";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

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

  return (
    <section className="pt-10 bg-gray-800 h-screen">
      <div className="flex flex-col justify-center">
        <div className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <div className="flex items-center justify-center ">
            <h1 className="text-3xl font-bold text-white">Todo List</h1>
          </div>
          <div className="flex items-center justify-center pt-5">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="bg-gray-800 mt-2 my-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none rounded-lg text-gray-400"
            />
            <button
              onClick={handleAddTodo}
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
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
        </div>
      </div>
    </section>
  );
};

export default TodoListPage;
