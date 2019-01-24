export const addTodo = (todo) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'ADD_TODO', todo });
  }
};