export const addGoal = (goal) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('goals').add({
      ...goal,
      firstName: 'Caleb',
      lastName: 'Brenner',
      userId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_GOAL', goal });
    }).catch((err) => {
      dispatch({ type: 'ADD_GOAL_ERROR', err });
    })
  }
};