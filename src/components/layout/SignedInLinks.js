import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li className='flow-text'>Go to your...</li>
      {/* Find a way to edit so that above <li> is larger and distinct */}
      <li><NavLink to='/expense-dashboard'>Expenses</NavLink></li>
      <li><NavLink to='/income-dashboard'>Income</NavLink></li>
      <li><NavLink to='/goals-dashboard'>Goals</NavLink></li>
      <li><NavLink to='/todos-dashboard'>Todos</NavLink></li>
      <li><NavLink to='/notes-dashboard'>Notes</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating blue darken-4'>CB</NavLink></li>
    </ul>
  )
}

export default SignedInLinks