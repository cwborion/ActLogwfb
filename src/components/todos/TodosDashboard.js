import React, { Component } from 'react'
import TodosList from './TodosList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'

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
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps)(TodosDashboard)