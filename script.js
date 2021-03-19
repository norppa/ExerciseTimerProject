const tick = () => {
    time = time - 1
    if (time === 0) {
        changeState()
        if (state === 'finished') {
            return
        }
    }
    update('time')
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
    update('state')
}

const finishExecution = () => {
    state = 'finished'
    clearInterval(timer)
    update('time')
    update('state')
}

const timeFormatter = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    const minuteStr = (minutes < 10 ? '0' : '') + minutes
    const secondStr = (seconds < 10 ? '0' : '') + seconds
    return minuteStr + ':' + secondStr
}

const update = (element) => {
    if (element === 'time') {
        document.getElementById('timeDisplay').innerHTML = timeFormatter(time)
    } else if (element === 'state') {
        document.getElementById('stateDisplay').innerHTML = state
    }
}

var state = 'work'
var index = 0
var time = times[index].work

update('time')
update('state')
const timer = setInterval(tick, 1000)
