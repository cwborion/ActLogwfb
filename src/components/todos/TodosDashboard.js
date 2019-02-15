import React, { Component } from 'react'
import TodosList from './TodosList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class TodosDashboard extends Component {
  render() {
    // console.log(this.props);
    const { todos, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    
    return (
      <div className="dashboard container">
      <h3 className='white-text'>Manage your todos here!</h3>
        <Link className="white-text blue darken-4 small-add-buttons" to='/add-todo'>Add Todo</Link>

        <TodosList todos={todos} auth={auth} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    todos: state.firestore.ordered.todos,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'todos', orderBy: ['createdAt', 'desc'] }
  ])
)(TodosDashboard)