const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

const box = 32;

const ground = new Image();
ground.src = 'img/groundImg.png';

const foodImg = new Image();
foodImg.src = 'img/food.png';

let snake = [];

let score = 0;

let d;

let game = setInterval(draw, 120);

snake[0] = {
  x : 9 * box,
  y : 10 * box
}

let food = {
  x : Math.floor(Math.random()*17+1) * box,
  y : Math.floor(Math.random()*15+3) * box
}


document.addEventListener('keydown', direction);

function direction(e) {
  if(e.keyCode == 37 && d != 'RIGHT') {
    d = 'LEFT';
  } else if(e.keyCode == 38 && d != 'DOWN') {
    d = 'UP';
  } else if(e.keyCode == 39 && d != 'LEFT') {
    d = 'RIGHT';
  } else if(e.keyCode == 40 && d != 'UP') {
    d = 'DOWN';
  }
}

function collision(head, array) {
  for(let i = 0; i < array.length; i++) {
    if(head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}

function draw() {
  ctx.drawImage(ground, 0, 0);

  for(let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i == 0) ? '#94aa2a' : '#a2ba2d';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = '#788a21';
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.drawImage(foodImg, food.x, food.y);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if( d == "LEFT") snakeX -= box;
  if( d == "UP") snakeY -= box;
  if( d == "RIGHT") snakeX += box;
  if( d == "DOWN") snakeY += box;

  if(snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x : Math.floor(Math.random()*17+1) * box,
      y : Math.floor(Math.random()*15+3) * box
    }
  } else {
      snake.pop();
  }

  let newHead = {
    x : snakeX,
    y : snakeY
  }

  if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
    clearInterval(game);
  }


  snake.unshift(newHead)

  ctx.fillStyle = 'white';
  ctx.font = '45px sans-serif'
  ctx.fillText(score, 2*box, 1.6*box);
}