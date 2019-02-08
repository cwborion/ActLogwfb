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

export const deleteIncome = (income) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('income').doc(income).delete()
    .then(() => {
      dispatch({ type: 'DELETE_INCOME', income });
      console.log(income);
    }).catch((err) => {
      dispatch({ type: 'DELETE_INCOME_ERROR', err });
    })
  }
};

// BELOW CODE STILL NEEDS MODIFIED AND CHANGED
export const updateIncome = (expense) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('expenses').doc(expense).delete()
    .then(() => {
      dispatch({ type: 'DELETE_EXPENSE', expense });
      console.log(expense);
    }).catch((err) => {
      dispatch({ type: 'DELETE_EXPENSE_ERROR', err });
    })
  }
};