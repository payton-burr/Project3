import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>Profile</h1>
        <div className='col-1-of-2'>
          <h3>Name: {this.state.name}</h3>
        </div>
        <div className='col-1-of-2'>
          <h3>Email: {this.state.email}</h3>
        </div>
      </div>
    )
  }
}

export default Profile;