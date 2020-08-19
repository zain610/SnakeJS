const directions = {
  UP_ARROW: [0, -1],
  DOWN_ARROW: [0, 1],
  RIGHT_ARROW: [1, 0],
  LEFT_ARROW: [-1, 0],
}


window.addEventListener('DOMContentLoaded', (e) => {
  const width = window.innerWidth
  const height = window.innerHeight
  var canvas = document.getElementById('myCanvas')
  let ctx = canvas.getContext("2d")
  //starting position of snake
  var x = canvas.width / 2
  var y = canvas.height / 2
  // direction of snake
  let xSpeed = 1
  let ySpeed = 0

  //body of snake -- keep track of all components of the snake's body
  let body = [{ x, y }, { x: x - 15, y: y }]

  const updateDir = (x, y) => {
    xSpeed = x
    ySpeed = y
  }


  const draw = () => {
    //do something
    x += 16
    for (let pos of body) {
      let { x, y } = pos
      drawSnake(ctx, x, y)
    }
  }
  setInterval(draw, 1000)



  /**
   * 
   * @param {*} canvas canvas element from DOM
   * @param {*} context context provides api to render sprites and other visualisations
   * @param {*} x x coordinate of the snake
   * @param {*} y y coordinate of the snake
   */
  const drawSnake = (context, x, y) => {
    context.clearRect(0, 0, width, height)
    context.rect(x, y, 16, 16)
    context.fillStyle = "#FF000"
    context.fill()
  }


  window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
        console.log('ArrowUp')
      case 'ArrowDown':
        console.log('ArrowDown')
      case 'ArrowRight':
        console.log('ArrowRight')
      case 'ArrowLeft':
        console.log('ArrowLeft')
    }
  })

})