import React from 'react'
import TodoSummary from './TodoSummary'
import { Link } from 'react-router-dom'

const TodosList = ({ todos, auth }) => {
  return (
    <div className="section">
      {todos && todos.map(todo => {
        // console.log('todos is', todo.userId);
        // console.log('auth is', auth.uid);
        if (todo.userId === auth.uid) {
          return (
            <Link to={'/todo/' + todo.id} key={todo.id}>
              <TodoSummary todo={todo} id={todo.id} />
            </Link>
          )
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default TodosList