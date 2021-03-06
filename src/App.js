import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

import ExpenseDashboard from './components/expenses/ExpenseDashboard'
import ExpenseDetails from './components/expenses/ExpenseDetails'
import AddExpense from './components/expenses/AddExpense'
import UpdateExpense from './components/expenses/UpdateExpense'

import IncomeDashboard from './components/income/IncomeDashboard'
import IncomeDetails from './components/income/IncomeDetails'
import AddIncome from './components/income/AddIncome'
import UpdateIncome from './components/income/UpdateIncome'

import GoalsDashboard from './components/goals/GoalsDashboard'
import GoalDetails from './components/goals/GoalDetails'
import AddGoal from './components/goals/AddGoal'
import UpdateGoal from './components/goals/UpdateGoal'

import TodosDashboard from './components/todos/TodosDashboard'
import TodoDetails from './components/todos/TodoDetails'
import AddTodo from './components/todos/AddTodo'

import NoteDashboard from './components/notes/NoteDashboard'
import NoteDetails from './components/notes/NoteDetails'
import AddNote from './components/notes/AddNote'
import UpdateNote from './components/notes/UpdateNote'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            
            <Route path='/expense-dashboard' component={ExpenseDashboard} />
            <Route path='/expense/:id' component={ExpenseDetails} />
            <Route path='/add-expense' component={AddExpense} />
            <Route path='/update-expense/:id' component={UpdateExpense} />

            <Route path='/income-dashboard' component={IncomeDashboard} />
            <Route path='/income/:id' component={IncomeDetails} />
            <Route path='/add-income' component={AddIncome} />
            <Route path='/update-income/:id' component={UpdateIncome} />

            <Route path='/goal-dashboard' component={GoalsDashboard} />
            <Route path='/goal/:id' component={GoalDetails} />
            <Route path='/add-goal' component={AddGoal} />
            <Route path='/update-goal/:id' component={UpdateGoal} />

            <Route path='/todo-dashboard' component={TodosDashboard} />
            <Route path='/todo/:id' component={TodoDetails} />
            <Route path='/add-todo' component={AddTodo} />

            <Route path='/note-dashboard' component={NoteDashboard} />
            <Route path='/note/:id' component={NoteDetails} />
            <Route path='/add-note' component={AddNote} />
            <Route path='/update-note/:id' component={UpdateNote} />

            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
