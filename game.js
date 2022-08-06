import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

import{ update as updateFood, draw as drawFood } from './food.js'

let lasRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLsdtRender = (currentTime - lasRenderTime) / 1000
    if (secondsSinceLsdtRender <1 / SNAKE_SPEED) return
    
    lasRenderTime = currentTime
    // console.log(currentTime)
    //console.log('screen rendered after a delay of ' + secondsSinceLsdtRender + ' seconds')

    update()
    draw()

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}