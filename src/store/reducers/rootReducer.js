import authReducer from './authReducer'
import expensesReducer from './expensesReducer'
import goalsReducer from './goalsReducer'
import incomeReducer from './incomeReducer'
import notesReducer from './notesReducer'
import todosReducer from './todosReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expensesReducer,
  goals: goalsReducer,
  income: incomeReducer,
  notes: notesReducer,
  todos: todosReducer
});

export default rootReducer