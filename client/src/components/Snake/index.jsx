import React, { Component } from 'react';

class Snake extends Component {
  render() {
    return(
      <div>
        <canvas id='snake' width='608' height='608'></canvas>
        <script src='./snake.js'/>
      </div>
    )
  }
}

export default Snake;