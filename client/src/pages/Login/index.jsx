import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }


  render() {
    const { email, password } = this.state;
    return (
      <div id="container">
      <div class="form-wrap">
        <h1>Login</h1>
        <form action='/users/login' method='POST'>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter Email' value={email}/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Create a password' value={password}/>
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