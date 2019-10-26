import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div id="container">
      <div class="form-wrap">
        <h1>Login</h1>
        <form action='/users/login' method='POST'>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter Email'/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Create a password'/>
          </div>
          <button type="submit" class="btn">Login</button>
        </form>
      </div>
      <footer>
        <p>No Account? <a href="/users/register">Register</a></p>
      </footer>
    </div>
    )
  }
}

export default Login;