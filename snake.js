export const SNAKE_SPEED = 1
const snakeBody = [{ x: 11, y: 11 }]

export function update() {
    console.log('Update Snake')
    
}

export function draw(gameBoard) {
    console.log('Draw Snake')
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
        
    })
}