import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/expense-dashboard'>Expenses</NavLink></li>
      <li><NavLink to='/income-dashboard'>Income</NavLink></li>
      <li><NavLink to='/goal-dashboard'>Goals</NavLink></li>
      <li><NavLink to='/note-dashboard'>Notes</NavLink></li>
      <li><NavLink to='/todo-dashboard'>Todos</NavLink></li>
      <li><button className='nav-logout-btn' onClick={props.signOut}>Log Out</button></li>
      <li>
        <NavLink to='/' className='btn btn-floating blue darken-4'>
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)