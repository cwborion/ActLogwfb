import React from 'react'
import TodoSummary from './TodoSummary'
import { Link } from 'react-router-dom'

const TodosList = ({ todos }) => {
  return (
    <div className="section">

      {todos && todos.map(todo => {
        return (
          <Link to={'/todo/' + todo.id} key={todo.id}>
            <TodoSummary todo={todo} key={todo.id} />
          </Link>
        )
      })}

    </div>
  )
}

export default TodosList