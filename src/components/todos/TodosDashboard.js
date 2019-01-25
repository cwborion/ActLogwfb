import React, { Component } from 'react'
import TodosList from './TodosList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class TodosDashboard extends Component {
  render() {
    console.log(this.props);
    const { todos } =this.props;

    return (
      <div className="dashboard container">

        <TodosList todos={todos} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.firestore.ordered.todos
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'todos' }
  ])
)(TodosDashboard)