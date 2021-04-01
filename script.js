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
        audio.restBell.play()
    } else {
        state = 'work'
        index = index + 1
        update('exercise')
        if (index === exercises.length - 1) {
            audio.applause.play()
            return stopTimer()
        }
        audio.workBell.play()
    }
    time = exercises[index][state]
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
    } else if (element === 'exercise') {
        document.getElementById('exerciseDisplay').innerHTML = exercises[index].name
    }
}

const handleStartStopClick = () => isRunning ? stopTimer() : startTimer()

const handlePauseResumeClick = () => isPaused ? resumeTimer() : pauseTimer()

const startTimer = () => {
    index = 0
    time = exercises[index].work
    state = 'work'
    update('time')
    update('state')
    update('exercise')
    timer = setInterval(tick, 1000)
    isRunning = true
    startStopBtn.innerHTML = 'STOP'
    pauseResumeBtn.disabled = false
    audio.workBell.play()
}

const stopTimer = () => {
    console.log('timer stopped')
    clearInterval(timer)
    isRunning = false
    isPaused = false
    state = 'finished'
    startStopBtn.innerHTML = 'RESTART'
    pauseResumeBtn.disabled = true
    update('time')
    update('state')
}

const pauseTimer = () => {
    clearInterval(timer)
    isPaused = true
    pauseResumeBtn.innerHTML = 'RESUME'
}

const resumeTimer = () => {
    timer = setInterval(tick, 1000)
    isPaused = false
    pauseResumeBtn.innerHTML = 'PAUSE'
}

const initialize = () => {
    state = 'ready'
    time = 0
    isRunning = false
    isPaused = false
    update('time')
    update('state')
}



const startStopBtn = document.getElementById('startStopBtn')
const pauseResumeBtn = document.getElementById('pauseResumeBtn')
startStopBtn.onclick = handleStartStopClick
pauseResumeBtn.onclick = handlePauseResumeClick

var state, index, time, timer, isRunning, isPaused
initialize()


