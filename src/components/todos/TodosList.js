import React from 'react'
import TodoSummary from './TodoSummary'

const TodosList = ({ todos }) => {
  return (
    <div className="project-list section">

     { todos && todos.map(todo => {
       return (
         <TodoSummary todo={todo} key={todo.id} />
       )
     })}

    </div>
  )
}

export default TodosList