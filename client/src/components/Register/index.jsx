import React, { Component } from 'react';
import { register } from '../Functions/index';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name : '',
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
      name : this.state.name,
      email : this.state.email,
      password : this.state.password
    }

    register(user).then(res => {
      this.props.history.push('/login');
    })
  }

  render() {
    return (
      <div id="container">
      <div class="form-wrap">
        <h1>Login</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='Enter Name' value={this.state.name} onChange={this.onChange}/>
          </div>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter Email' value={this.state.email} onChange={this.onChange}/>
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Enter Password' value={this.state.password} onChange={this.onChange}/>
          </div>
          <button type="submit" class="btn-login">Register</button>
        </form>
      </div>
      <footer>
        <p>Already have an account? <a href="/users/login">Login Here</a></p>
      </footer>
    </div>
    )
  }
}


export default Register;