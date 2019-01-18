const initState = {
  goals: [
    {id: '1', title: 'trip to Norway', description: 'save $3,000', completeDate: Date.now()},
    {id: '2', title: 'new used car', description: 'find fuel efficient small suv', completeDate: Date.now()},
    {id: '3', title: 'pay off student loans', description: 'pay $300 each month if possible', completeDate: Date.now()}
  ]
}

const goalsReducer = (state = initState, action) => {
  return state
}

export default goalsReducer