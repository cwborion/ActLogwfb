import React from 'react'
import TodoSummary from './TodoSummary'
import { Link } from 'react-router-dom'

const TodosList = ({ todos, auth }) => {
  return (
    <div className="section">
      {todos && todos.map((todo, index) => {
        console.log('todos is', index);
        // console.log('auth is', auth.uid);
        const item = todos[index].userId === auth.uid;
        if (todos[index].userId === auth.uid) {
          // todos.splice(todos.indexOf(item), 1);
          return (
            <Link to={'/todo/' + todo.id} key={todo.id}>
              <TodoSummary todo={todo} id={todo.id} />
            </Link>
          )
        } 
        else if (todos[index].userId === !auth.uid) {
          todos.splice(todos.indexOf(item), 1)
          return (
            <p className='white-text'>Looks like you have no todos</p>
          )
        } 
        else {
          return null;
        }
      })}
    </div>
  )
}

export default TodosList