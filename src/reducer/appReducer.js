export function appReducer(state, action) {
  if (action.type === "DELETE") {
    return {
      ...state,
      todos: state.todos.filter((item) => item.id != action.id),
    };
  }
  if (action.type === "FINISH") {
    return {
      ...state,
      todos: state.todos.map((item) => {
        if (item.id !== action.id) {
          return item;
        }
        return {
          ...item,
          done: true,
        };
      }),
    };
  }
  if (action.type === "ADD") {
    return {
      isFormShown: false,
      todos: [
        ...state.todos,
        {
          name: action.newTodoName,
          done: false,
          id: Math.random(),
        },
      ],
    };
  }
  if (action.type === "OPEN_FORM") {
    return { ...state, isFormShown: true };
  }
  return state;
}
