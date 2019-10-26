import React, { Component } from 'react';
import { login } from '../Functions/index';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email : '',
      password : ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      email : this.state.email,
      password : this.state.password
    }

    login(user).then(res => {
      if(res) {
        this.props.history.push('/profile');
      }
    })
  }

  render() {
    return (
      <div className="container">
      <div className="form-wrap">
        <h1>Login</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter Email' value={this.state.email} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Enter Password' value={this.state.password} onChange={this.onChange}/>
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
      <footer>
        <p>No Account? <a href="/register">Register</a></p>
      </footer>
    </div>
    )
  }
}


export default Login;