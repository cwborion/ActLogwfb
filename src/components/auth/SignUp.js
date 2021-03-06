import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitEnabled() {
    const { firstName, lastName } = this.state;
    return (
      firstName.length > 0 &&
      lastName.length > 0
    );
  }

  handleSubmit = (e) => {
    if (!this.submitEnabled()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    const isEnabled = this.submitEnabled();
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className='container list-opac'>
        <form onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-2">Sign Up</h5>
          <div className="input-field">
            <label htmlFor='email' className="grey-text text-darken-2">Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='password' className="grey-text text-darken-2">Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='firstName' className="grey-text text-darken-2">First Name</label>
            <input type='text' id='firstName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='lastName' className="grey-text text-darken-2">Last Name</label>
            <input type='text' id='lastName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0 auth-btn" disabled={!isEnabled}>Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)