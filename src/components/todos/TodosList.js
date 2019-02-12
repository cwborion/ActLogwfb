import React from 'react'
import TodoSummary from './TodoSummary'
import { Link } from 'react-router-dom'

const TodosList = ({ todos, auth }) => {
  return (
    <div className="section">
      {todos && todos.map((todo, index) => {
        // console.log('todos is', todos);
        const filtered = todos.filter((todo, index) => {
          return todos[index].userId === auth.uid;
        });
        // console.log('filtered todos array is', filtered)
        if (todo.userId === auth.uid) {
          return (
            <Link to={'/todo/' + todo.id} key={todo.id}>
              <TodoSummary todo={todo} id={todo.id} />
            </Link>
          )
        } else if (filtered.length === 0) {
          todos.length = 0;
          // For some reason when the 'Todos' navlink is clicked in the navbar when the 'no todos' 
          // message is already rendering, it disappears. Try to fix this.
          return filtered.length === 0 ? 
            <p key={1} className='white-text'>
            Looks like you don't have any todos. Click the 'Add Todo' button to start!
            </p> :
            null;
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default TodosList
