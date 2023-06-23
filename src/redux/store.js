import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducer/todoReducer";
import { fetchTodos, addTodo, deleteTodo } from "./actions/todoActions";

const store = createStore(
  todoReducer,
  applyMiddleware(thunk)
);

export default store;
