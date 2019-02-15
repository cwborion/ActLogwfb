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

export const updateIncome = (income, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    console.log('expense id is ', id)
    console.log('expense is ', income)
    firestore.collection('income').doc(id).update({
      ...income,
      employment: income.employment,
      amount: income.amount,
      beginPayPeriod: income.beginPayPeriod,
      endPayPeriod: income.endPayPeriod
    })
      .then(() => {
        dispatch({ type: 'UPDATE_INCOME', income });
        console.log(income);
      }).catch((err) => {
        dispatch({ type: 'UPDATE_INCOME_ERROR', err });
      })
  }
};