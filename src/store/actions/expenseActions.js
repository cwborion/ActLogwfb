export const addExpense = (expense) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('expenses').add({
      ...expense,
      firstName: 'Caleb',
      lastName: 'Brenner',
      userId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_EXPENSE', expense });
    }).catch((err) => {
      dispatch({ type: 'ADD_EXPENSE_ERROR', err});
    })
  }
};