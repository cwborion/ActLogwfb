export const addIncome = (income) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'ADD_INCOME', income });
  }
};