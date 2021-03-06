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

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('notes').doc(note).delete()
      .then(() => {
        dispatch({ type: 'DELETE_NOTE', note });
        console.log(note);
      }).catch((err) => {
        dispatch({ type: 'DELETE_NOTE_ERROR', err });
      })
  }
};

export const updateNote = (note, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    console.log('note id is ', id)
    console.log('note is ', note)
    firestore.collection('notes').doc(id).update({
      ...note,
      title: note.title,
      note: note.note
    })
      .then(() => {
        dispatch({ type: 'UPDATE_NOTE', note });
        console.log(note);
      }).catch((err) => {
        dispatch({ type: 'UPDATE_NOTE_ERROR', err });
      })
  }
};