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
  const width = window.innerWidth
  const height = window.innerHeight
  var canvas = document.getElementById('myCanvas')
  let ctx = canvas.getContext("2d")
  //starting position of snake
  var x = canvas.width / 2
  var y = canvas.height / 2
  // direction of snake
  let xSpeed = 18
  let ySpeed = 18

  //body of snake -- keep track of all components of the snake's body
  //keep snake parts 18pts apart 
  let body = [{ x, y }]

  let dir = directions.RIGHT_ARROW //by default move right

  const updateDir = (x, y) => {
    xSpeed = x
    ySpeed = y
  }


  const draw = () => {
    //do something
    clear_board(canvas, ctx)
    for (let pos of body) {
      let { x, y } = pos
      drawSnake(ctx, x, y)
    }
    validateSnakeMovement()


  }
  setInterval(() => {
    draw()
  }, 100)
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
    let dx = xSpeed * dirX
    let dy = ySpeed * dirY
    const head = { x: body[0].x + dx, y: body[0].y + dy }
    body.unshift(head)
    body.pop()
    console.log(body)
  }
  // draw a border around the canvas
  function clear_board(canvas, context) {
    console.log('clear')
    context.clearRect(0, 0, canvas.width, canvas.height);
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
      body[0].x = canvas.width
    } else if (body[0].x > canvas.width) {
      body[0].x = 0
    } else if (body[0].y < 0) {
      body[0].y = canvas.height
    } else if (body[0].y > canvas.height) {
      body[0].y = 0
    } else {
      moveSnake(dir[0], dir[1])
    }
  }

})