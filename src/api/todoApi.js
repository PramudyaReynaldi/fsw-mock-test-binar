import axios from 'axios';

const BASE_URL = 'http://localhost:5173/api';

export const fetchTodos = () => {
  return axios.get(`${BASE_URL}/todos`);
};

export const addTodo = (todo) => {
  return axios.post(`${BASE_URL}/todos`, todo);
};

