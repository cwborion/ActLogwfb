const initState = {
  income: [
    {id: '1', employment: 'UnBarlievable', amount: 907, beginPayPeriod: Date.now(), endPayPeriod: Date.now()},
    {id: '2', employment: 'UnBarlievable', amount: 857, beginPayPeriod: Date.now(), endPayPeriod: Date.now()},
    {id: '3', employment: 'Placement App', amount: 500, beginPayPeriod: Date.now(), endPayPeriod: Date.now()}
  ]
}

const incomeReducer = (state = initState, action) => {
  return state
}

export default incomeReducer