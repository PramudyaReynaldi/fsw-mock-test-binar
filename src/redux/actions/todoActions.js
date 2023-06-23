import axios from "axios";

export const fetchTodos = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/api/todos")
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
    axios.post('https://localhost:3000/api/todos', todo)
      .then((response) => {
        dispatch({ type: 'ADD_TODO_SUCCESS', payload: response.data, });
      })
      .catch((error) => {
        dispatch({ type: 'ADD_TODO_ERROR', payload: error.message });
      });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://localhost:3000/api/todos/${id}`);
      dispatch({ type: "DELETE_TODO_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_TODO_ERROR", payload: error.message });
    }
  };
};