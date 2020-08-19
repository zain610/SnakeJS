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
  let ySpeed = 0

  //body of snake -- keep track of all components of the snake's body
  //keep snake parts 18pts apart 
  let body = [{ x, y }, { x: x - 18, y: y }]

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

    moveSnake()

  }
  setInterval(() => {
    draw()
  }, 1000)
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
  //move snake
  const moveSnake = () => {
    const head = { x: body[0].x + xSpeed, y: body[0].y + ySpeed }
    body.unshift(head)
    body.pop()
    console.log(body)
  }
  // draw a border around the canvas
  function clear_board(canvas, context) {
    console.log('clear')
    context.clearRect(0, 0, canvas.width, canvas.height);
  }


  window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
        console.log('ArrowUp')
        break
      case 'ArrowDown':
        console.log('ArrowDown')
        break
      case 'ArrowRight':
        console.log('ArrowRight')
        break
      case 'ArrowLeft':
        console.log('ArrowLeft')
        break
    }
  })

})