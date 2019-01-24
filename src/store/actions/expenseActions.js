export const addExpense = (expense) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'ADD_EXPENSE', expense });
  }
};