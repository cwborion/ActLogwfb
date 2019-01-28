import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const TodoDetails = (props) => {
  const { todo } = props;
  if (todo) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{todo.todo}</span>
            <p>**Make this into a Delete Todo button or something**</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>14th January, 5pm</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Todo...</p>
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const todos = state.firestore.data.todos;
  const todo = todos ? todos[id] : null;
  return {
    todo: todo
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'todos'}
  ])
)(TodoDetails)