const directions = {
  UP_ARROW: [0, -1],
  DOWN_ARROW: [0, 1],
  RIGHT_ARROW: [1, 0],
  LEFT_ARROW: [-1, 0],
}
const boardColor = '#eee'
const snakeColor = 'lightblue'
const snakeBorder = '#333'
window.addEventListener('DOMContentLoaded', (e) => {
  var canvas = document.getElementById('myCanvas')
  let ctx = canvas.getContext("2d")
  //Canvas Height and Width
  const canvasHeight = canvas.height
  const canvasWidth = canvas.width
  // direction of snake
  let xSpeed;
  let ySpeed;

  //body of snake -- keep track of all components of the snake's body
  //keep snake parts -18pts apart 
  let body;
  let dir;
  let counter;
  let cherryLocation;

  /**
   * Setup method is run at the start of each game adn after the snake is dead. 
   * We need to reset the score, snakes position, speed and canvas. 
   */
  const setup = () => {
    clearBoard(ctx, canvasWidth, canvasHeight)
    counter = 0
    body = [{ x: 200, y: 200 }]
    dir = directions.RIGHT_ARROW
    xSpeed = 18
    ySpeed = 18
    cherryLocation = generateRandomCoordinate()

  }
  const updateScore = () => {
    counter += 1
    let score = document.getElementById('score')
    //update text on html
    score.innerHTML = `Score: ${counter}`
  }

  const draw = () => {
    //do something
    clearBoard(ctx, canvasWidth, canvasHeight)
    displayCherry(ctx, cherryLocation[0], cherryLocation[1])
    validateSnakeMovement()
    for (let pos of body) {
      let { x, y } = pos
      drawSnake(ctx, x, y)
    }
    //check for collision


  }

  /**
   * 
   * @param {*} canvas canvas element from DOM
   * @param {*} context context provides api to render sprites and other visualisations
   * @param {*} x x coordinate of the snake
   * @param {*} y y coordinate of the snake
   */
  const drawSnake = (context, x, y) => {

    context.fillStyle = snakeColor
    context.strokeStyle = snakeBorder
    context.fillRect(x, y, 16, 16)
    context.strokeRect(x, y, 16, 16)
  }
  //move snake -- most important method 
  const moveSnake = (dirX = 0, dirY = -1) => {
    //determine next pos based on speed x and y
    let dx = xSpeed * dirX
    let dy = ySpeed * dirY
    const head = { x: body[0].x + dx, y: body[0].y + dy }
    //check if next move is part of snake body => snake bites itself  =>  game over
    if (snakeCollision(head)) {
      window.alert('Game Over!')
      setup()
    }
    if (snakeEats(head)) {
      // add the current cherry to the body of the snake
      updateScore()
      body.push(cherryLocation)
      cherryLocation = generateRandomCoordinate()
    }
    body.unshift(head)
    body.pop()
  }
  // draw a border around the canvas
  function clearBoard(context, width, height) {
    context.clearRect(0, 0, width, height);
  }

  //add keyboard controls
  window.addEventListener('keydown', e => {
    //convert this into an if else statement and check if the snake is currently going in the same direction. 
    switch (e.key) {
      case 'ArrowUp':
        console.log('ArrowUp')
        dir = directions.UP_ARROW
        break
      case 'ArrowDown':
        console.log('ArrowDown')
        dir = directions.DOWN_ARROW
        break
      case 'ArrowRight':
        console.log('ArrowRight')
        dir = directions.RIGHT_ARROW
        break
      case 'ArrowLeft':
        console.log('ArrowLeft')
        dir = directions.LEFT_ARROW
        break
    }
  })
  const validateSnakeMovement = () => {
    if (body[0].x < -1) {
      body[0].x = canvasWidth
    } else if (body[0].x > canvasWidth) {
      body[0].x = 0
    } else if (body[0].y < -1) {
      body[0].y = canvasHeight
    } else if (body[0].y > canvasHeight) {
      body[0].y = 0
    } else {
      moveSnake(dir[0], dir[1])
    }
  }
  const snakeCollision = (pos) => {
    for (let head of body) {
      if (pos.x == head.x && pos.y == head.y) {
        return true
      }
    }
    return false
  }

  /* Methods for cherry */

  const displayCherry = (context, x = 0, y = 0) => {
    const cherryImage = document.getElementById('myImage')
    context.drawImage(cherryImage, x, y, 24, 24)
  }

  const generateRandomCoordinate = () => {
    let randomX = Math.random() * (canvasWidth - 20)
    let randomY = Math.random() * (canvasHeight - 20)
    if (!snakeCollision({ x: randomX, y: randomY })) {
      return [randomX, randomY]
    }
    generateRandomCoordinate()

  }
  const snakeEats = (pos) => {
    let diffX = Math.abs(pos.x - cherryLocation[0])
    let diffY = Math.abs(pos.y - cherryLocation[1])
    if (diffY < 18 && diffX < 18) {
      return true
    }
    return false
  }




  //initialise gmae
  setup()
  setInterval(() => {
    draw()
  }, 100);

})