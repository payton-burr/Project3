import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-1-of-3'>
          <a href='game/snake.html'>Snake Game</a>
        </div>
        <div className='col-1-of-3'>
          <a href='game/pong.html'>Pong</a>
        </div>
        <div className='col-1-of-3'>
        <a href='game/tetris.html'>Tetris</a>
        </div>
      </div>
    )
  }
}

export default Dashboard;