import authReducer from './authReducer'
import expenseReducer from './expenseReducer'
import goalReducer from './goalReducer'
import incomeReducer from './incomeReducer'
import noteReducer from './noteReducer'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expenseReducer,
  goals: goalReducer,
  income: incomeReducer,
  notes: noteReducer,
  todos: todoReducer
});

export default rootReducer