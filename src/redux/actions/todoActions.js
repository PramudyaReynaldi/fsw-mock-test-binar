import axios from "axios";

export const fetchTodos = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((response) => {
        dispatch({ type: "FETCH_TODOS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_TODOS_ERROR", payload: error.message });
      });
  };
};

export const addTodo = (todo) => {
  return (dispatch) => {
    axios.post('http://localhost:8000/api/todos', todo)
      .then((response) => {
        dispatch({ type: 'ADD_TODO_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'ADD_TODO_ERROR', payload: error.message });
      });
  };
};