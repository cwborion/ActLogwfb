import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteTodo } from '../../store/actions/todoActions'

const TodoDetails = (props) => {
  const { todo, auth } = props;

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteTodo(props.match.params.id);
    props.history.push('/todo-dashboard');
  }

  if (!auth.uid) return <Redirect to='/signin' />

  if (todo) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{todo.todo}</span>
            <button onClick={handleDelete}>Delete todo</button>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted on {moment(todo.createdAt.toDate()).format(`LL`)}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p className='white-text'>Loading Todo...</p>
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
    todo: todo,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'todos'}
  ])
)(TodoDetails)