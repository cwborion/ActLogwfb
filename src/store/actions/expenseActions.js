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
      dispatch({ type: 'ADD_EXPENSE_ERROR', err });
    })
  }
};

export const deleteExpense = (expense) => {
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

export const updateExpense = (expense, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    console.log('expense id is ', id)
    console.log('expense is ', expense)
    firestore.collection('expenses').doc(id).update({
      ...expense,
      title: expense.title,
      amount: expense.amount,
      dueDate: expense.dueDate
    })
      .then(() => {
        dispatch({ type: 'UPDATE_EXPENSE', expense });
        console.log(expense);
      }).catch((err) => {
        dispatch({ type: 'UPDATE_EXPENSE_ERROR', err });
      })
  }
};