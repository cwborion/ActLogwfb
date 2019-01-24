export const addGoal = (goal) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'ADD_GOAL', goal });
  }
};