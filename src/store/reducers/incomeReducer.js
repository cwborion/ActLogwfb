const initState = {
  income: [
    { id: '1', employment: 'UnBarlievable', amount: 907, beginPayPeriod: Date.now(), endPayPeriod: Date.now() },
    { id: '2', employment: 'UnBarlievable', amount: 857, beginPayPeriod: Date.now(), endPayPeriod: Date.now() },
    { id: '3', employment: 'Placement App', amount: 500, beginPayPeriod: Date.now(), endPayPeriod: Date.now() }
  ]
}

const incomeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      console.log('added income', action.income);
      return state;
    case 'ADD_INCOME_ERROR':
      console.log('add income error', action.err);
      return state;
    case 'UPDATE_INCOME':
      console.log('updated income', action.income);
      return state;
    case 'UPDATE_INCOME_ERROR':
      console.log('update income error', action.err);
      return state;
    case 'DELETE_INCOME':
      console.log('deleted income', action.income);
      return state;
    case 'DELETE_INCOME_ERROR':
      console.log('delete income error', action.err);
      return state;
    default:
      return state;
  }
}

export default incomeReducer