export const addNote = (note) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'ADD_NOTE', note });
  }
};