export const addExpense = (expense) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('expenses').add({
      ...expense,
      firstName: profile.firstName,
      lastName: profile.lastName,
      userId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_EXPENSE', expense });
    }).catch((err) => {
      dispatch({ type: 'ADD_EXPENSE_ERROR', err});
    })
  }
};