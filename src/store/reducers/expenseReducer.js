const initState = {
  expenses: [
    { id: '1', title: 'rent', amount: 500, dueDate: Date.now() },
    { id: '2', title: 'google fiber', amount: 72, dueDate: Date.now() },
    { id: '3', title: 'utilities', amount: 133, dueDate: Date.now() },
  ]
}

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log('added expense', action.expense);
      return state;
    case 'ADD_EXPENSE_ERROR':
      console.log('add expense error', action.err);
      return state;
    case 'UPDATE_EXPENSE':
      console.log('updated expense', action.expense);
      return state;
    case 'UPDATE_EXPENSE_ERROR':
      console.log('update expense error', action.err);
      return state;
    case 'DELETE_EXPENSE':
      console.log('deleted expense', action.expense);
      return state;
    case 'DELETE_EXPENSE_ERROR':
      console.log('expense todo error', action.err);
      return state;
    default:
      return state;
  }
}

export default expenseReducer