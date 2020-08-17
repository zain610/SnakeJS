const width = window.innerWidth
const height = window.innerHeight
const main = () => {

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
  board.appendChild(createSnake(0.05))
  board.appendChild(createSnake(1.0))


  app.appendChild(board)
}

const createSnake = (counter) => {
  const snake = document.createElement('div')
  snake.style.width = '1rem'
  snake.style.height = '1rem'
  snake.style.backgroundColor = 'green'
  snake.style.position = 'relative'
  snake.style.top = `${counter}rem`
  snake.style.left = '10rem'
  return snake

}