export const addTodo = (todo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('todos').add({
      ...todo,
      firstName: 'Caleb',
      lastName: 'Brenner',
      userId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_TODO', todo });
    }).catch((err) => {
      dispatch({ type: 'ADD_TODO_ERROR', err });
    })
  }
};