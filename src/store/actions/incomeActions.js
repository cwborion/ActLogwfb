export const addIncome = (income) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('income').add({
      ...income,
      firstName: 'Caleb',
      lastName: 'Brenner',
      userId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_INCOME', income });
    }).catch((err) => {
      dispatch({ type: 'ADD_INCOME_ERROR', err });
    })
  }
};