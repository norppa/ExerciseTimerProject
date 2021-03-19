const tick = () => {
    time = time - 1
    if (time === 0) {
        changeState()
        if (state === 'finished') {
            return
        }
    }
    console.log(time)
}

const changeState = () => {
    if (state === 'work') {
        state = 'rest'
    } else {
        state = 'work'
        index = index + 1
        if (index === times.length) {
            return finishExecution()
        }
    }
    time = times[index][state]
    console.log(state)
}

const finishExecution = () => {
    state = 'finished'
    clearInterval(timer)
    console.log('Finished!')
}

var state = 'work'
var index = 0
var time = times[index].work

console.log(state)
console.log(time)
const timer = setInterval(tick, 1000)
