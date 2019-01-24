const initState = {
  todos: [
    {id: '1', todo: 'change brake light'},
    {id: '2', todo: 'walk dogs'},
    {id: '3', todo: 'buy dinner groceries'}
  ]
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log('added todo', action.todo)
  }
  return state
}

export default todoReducer