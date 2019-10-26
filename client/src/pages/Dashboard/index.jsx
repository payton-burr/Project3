import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return (
      <div className='section-features'>
        <div className='row'>
          <div className='col-1-of-4'>
            <div className='feature-box feature-box__1'>
              <a href='game/snake.html'>Snake Game</a>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='feature-box feature-box__2'>
              <a href='game/pong.html'>Pong</a>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='feature-box feature-box__4'>
              <a href='game/tetris.html'>Tetris</a>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='feature-box feature-box__4'>
              <a href='#'>PvP</a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>
            <div className='feature-box feature-box__4'>
              <a href='#'>Tower Defense</a>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='feature-box feature-box__5'>
              <a href='#'>Tic Tac Toe</a>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='feature-box feature-box__6'>
              <a href='#'>Square Game</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;