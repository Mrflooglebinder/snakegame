
let lasRenderTime = 0
const SNAKE_SPEED = 1

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLsdtRender = (currentTime - lasRenderTime) / 1000
    if (secondsSinceLsdtRender <1 / SNAKE_SPEED) return
    
    // console.log(currentTime)
    console.log('screen rendered after a delay of ' + secondsSinceLsdtRender + ' seconds')
    lasRenderTime = currentTime

}

window.requestAnimationFrame(main)
