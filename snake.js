import { getInputDirection } from "./input.js"
let newSegments = 0

export const SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11 }]
let newSegment = 0

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length -2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    
}

export function draw(gameBoard) {
    //console.log('Draw Snake')
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
}

export function expandSnake(amount) {
    newSegment += amount
}

export function onSnake(position){
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        // snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] }     // THIS IS BASICALLY THE SAME AS THE NEXT LINE OF CODE 
        //                                                                          ONLY THE NEXT LINE IS NEATER...
        snakeBody.PUSH({ ...snakeBody[snakeBody.length - 1] })
    }
}