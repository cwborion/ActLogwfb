const initState = {
  notes: [
    {id: '1', title: 'favorite search engine', note: 'google is the best search engine in my opinion'},
    {id: '2', title: 'ingredients for spicy green beans', note: 'garlic, chili paste, rice vinegar'},
    {id: '3', title: 'neil gaiman quote', note: '"pain shared is not pain doubled, but haved my brother."'}
  ]
}

const notesReducer = (state = initState, action) => {
  return state
}

export default notesReducer