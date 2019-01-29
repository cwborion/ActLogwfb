export const addTodo = (todo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('todos').add({
      ...todo,
      firstName: profile.firstName,
      lastName: profile.lastName,
      userId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_TODO', todo });
    }).catch((err) => {
      dispatch({ type: 'ADD_TODO_ERROR', err });
    })
  }
};