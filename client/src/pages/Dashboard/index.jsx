import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-1-of-4'>
          <a href='game/snake.html'>Snake Game</a>
        </div>
        <div className='col-1-of-4'>
          Test
        </div>
        <div className='col-1-of-4'>
          Test
        </div>
        <div className='col-1-of-4'>
          Test
        </div>
      </div>
    )
  }
}

export default Dashboard;