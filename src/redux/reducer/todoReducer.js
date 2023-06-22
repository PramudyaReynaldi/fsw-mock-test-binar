const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_TODOS_ERROR":
      return {
        ...state,
        todos: [],
        loading: false,
        error: action.payload,
      };
    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_TODO_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
