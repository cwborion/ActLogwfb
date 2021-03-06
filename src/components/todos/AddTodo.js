import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/todoActions'
import { Redirect } from 'react-router-dom'

class AddTodo extends Component {
  state = {
    todo: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitEnabled() {
    const { todo } = this.state;
    return (
      todo.length > 0
    );
  }

  handleSubmit = (e) => {
    if (!this.submitEnabled()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    this.props.addTodo(this.state);
    this.props.history.push('/todo-dashboard');
  }

  render() {
    const { auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container row'>
        <div className='col s12 m10'>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add to your todo list</h5>
            <div className="input-field">
              <label htmlFor='todo'>Todo</label>
              <input type='text' id='todo' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
