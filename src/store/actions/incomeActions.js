export const addIncome = (income) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('income').add({
      ...income,
      firstName: profile.firstName,
      lastName: profile.lastName,
      userId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_INCOME', income });
    }).catch((err) => {
      dispatch({ type: 'ADD_INCOME_ERROR', err });
    })
  }
};