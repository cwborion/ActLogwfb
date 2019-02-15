const initState = {
  notes: [
    { id: '1', title: 'favorite search engine', note: 'google is the best search engine in my opinion' },
    { id: '2', title: 'ingredients for spicy green beans', note: 'garlic, chili paste, rice vinegar' },
    { id: '3', title: 'neil gaiman quote', note: '"pain shared is not pain doubled, but haved my brother."' }
  ]
}

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      console.log('added note', action.note);
      return state;
    case 'ADD_NOTE_ERROR':
      console.log('add note error', action.err);
      return state;
    case 'UPDATE_NOTE':
      console.log('updated note', action.note);
      return state;
    case 'UPDATE_NOTE_ERROR':
      console.log('update note error', action.err);
      return state;
    case 'DELETE_NOTE':
      console.log('deleted note', action.note);
      return state;
    case 'DELETE_NOTE_ERROR':
      console.log('delete note error', action.err);
      return state;
    default:
      return state;
  }
}

export default noteReducer