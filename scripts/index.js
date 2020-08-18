window.addEventListener('DOMContentLoaded', (e) => {
  const width = window.innerWidth
  const height = window.innerHeight
  var canvas = document.getElementById('myCanvas')
  let ctx = canvas.getContext("2d")
  var x = canvas.width / 2
  var y = canvas.height / 2
  webkitRequestAnimationFrame
  let counter = 0

  const draw = () => {
    //do something
    x += 10
    y += 10
    counter += 1
    createSnake(canvas, ctx, x, y)

  }
  setInterval(draw, 1000)




  const main = () => {

    createSnake(ctx)
    createBoard()


  }

  const createBoard = (x = 100, y = 100) => {
    var app = document.getElementById('app')
    const board = document.createElement('div')
    console.log(width, height)
    //set the styling for the board
    board.style.width = '20rem'
    board.style.height = '20rem'
    board.style.margin = 'auto'
    board.style.alignContent = 'center'
    board.style.backgroundColor = 'black'

    board.appendChild(createSnake(0))


    app.appendChild(board)
  }

  const createSnake = (canvas, context, x, y) => {
    //create snake
    console.log(canvas)
    context.beginPath()
    context.rect(x, y, 16, 16)
    context.fillStyle = "#FF000"
    context.fill()
    context.closePath()


  }
})