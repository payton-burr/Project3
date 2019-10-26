import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div id="container">
      <div class="form-wrap">
        <h1>Register</h1>
        <form action='/users/register' method='POST'>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="name" name="name" id="name" placeholder='Enter Name'/>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter Email'/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Create a password'/>
          </div>
          <div class="form-group">
            <label for="password2">Confirm Password</label>
            <input type="password" name="pasword2" id="password2" placeholder="Confirm Password"/>
          </div>
          <button type="submit" class="btn">Register</button>
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