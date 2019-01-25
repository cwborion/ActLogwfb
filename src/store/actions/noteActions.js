export const addNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('notes').add({
      ...note,
      firstName: 'Caleb',
      lastName: 'Brenner',
      userId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_NOTE', note });
    }).catch((err) => {
      dispatch({ type: 'ADD_NOTE_ERROR', err });
    })
  }
};