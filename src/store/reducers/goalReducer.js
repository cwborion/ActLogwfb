const initState = {
  goals: [
    { id: '1', title: 'trip to Norway', description: 'save $3,000', completeDate: Date.now() },
    { id: '2', title: 'new used car', description: 'find fuel efficient small suv', completeDate: Date.now() },
    { id: '3', title: 'pay off student loans', description: 'pay $300 each month if possible', completeDate: Date.now() }
  ]
}

const goalReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      console.log('added goal', action.goal);
      return state;
    case 'ADD_GOAL_ERROR':
      console.log('add goal error', action.err);
      return state;
    case 'UPDATE_GOAL':
      console.log('updated goal', action.goal);
      return state;
    case 'UPDATE_GOAL_ERROR':
      console.log('update goal error', action.err);
      return state;
    case 'DELETE_GOAL':
      console.log('deleted todo', action.goal);
      return state;
    case 'DELETE_GOAL_ERROR':
      console.log('delete todo error', action.err);
      return state;
    default:
      return state;
  }
}

export default goalReducer