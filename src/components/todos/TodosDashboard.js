import React, { Component } from 'react'
import TodosList from './TodosList'
// may be able to make this component stateless fucntional

class TodosDashboard extends Component {
  render() {

    return (
      <div className="dashboard container">

        <TodosList />

      </div>
    )
  }
}

export default TodosDashboard