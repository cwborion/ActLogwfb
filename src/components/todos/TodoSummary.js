import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteTodo } from '../../store/actions/todoActions'

class TodoSummary extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    // console.log(this.props.id);
    this.props.deleteTodo(this.props.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className="card z-depth-0 projet-summary">
        <div className="card-content grey-text-darken-3">
          <span className='card-title'>{todo.todo}</span>
          <p className='grey-text'>Posted on {moment(todo.createdAt.toDate()).format(`LL`)}</p>
          <button onClick={this.handleDelete}>Delete Todo</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoSummary)
