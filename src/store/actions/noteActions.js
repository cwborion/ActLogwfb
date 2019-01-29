export const addNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore.collection('notes').add({
      ...note,
      firstName: profile.firstName,
      lastName: profile.lastName,
      userId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_NOTE', note });
    }).catch((err) => {
      dispatch({ type: 'ADD_NOTE_ERROR', err });
    })
  }
};