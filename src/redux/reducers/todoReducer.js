const initialState = {
  todos: [],
  lastId: 0,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: state.lastId + 1,
            todo: action.payload,
            completed: false,
            time: Date.now(),
          },
        ],
        lastId: state.lastId + 1,
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        lastId: state.lastId,
      };

    case "COMPLETE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        lastId: state.lastId,
      };
    case "DELETE_ALL_COMPLETED_TODO":
      return {
        todos: state.todos.filter((todo) => !todo.completed),
        lastId: state.lastId,
      };

    default:
      return {
        todos: state.todos,
        lastId: state.lastId,
      };
  }
};
