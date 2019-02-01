export const addGoal = (goal) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('goals').add({
      ...goal,
      firstName: profile.firstName,
      lastName: profile.lastName,
      userId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_GOAL', goal });
    }).catch((err) => {
      dispatch({ type: 'ADD_GOAL_ERROR', err });
    })
  }
};

export const deleteGoal = (goal) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('goals').doc(goal).delete()
    .then(() => {
      dispatch({ type: 'DELETE_GOAL', goal });
      console.log(goal);
    }).catch((err) => {
      dispatch({ type: 'DELETE_GOAL_ERROR', err });
    })
  }
};