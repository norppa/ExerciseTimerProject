const tick = () => {
    time = time - 1
    if (time === 0) {
        changeState()
        if (state === 'finished') {
            return
        }
    } else if (time < 5) {
        audio.tick.play()
    }
    update('time')
}

const disableHeader = (disabled) => document.getElementsByTagName('h1')[0].innerHTML = disabled ? '' : 'Exercise Timer'

const changeState = () => {
    switch (state) {
        case states.ready:
            state = states.work
            index = 0
            time = exercises[index].work
            audio.workBell.play()
            break
        case states.work:
            if (index === exercises.length - 1) {
                audio.applause.play()
                stopTimer()
            } else {
                state = states.rest
                time = exercises[index].rest
                audio.restBell.play()
            }
            break
        case states.rest:
            state = states.work
            index = index + 1
            time = exercises[index].work
            audio.workBell.play()
            break
        default:
            console.error('state change error')
    }
    update('state')
    update('exercise')
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
        if (state === states.work) {
            document.getElementById('timeDisplay').classList.remove('light')
        } else if (state === states.rest || state === states.ready) {
            document.getElementById('timeDisplay').classList.add('light')
        }

    } else if (element === 'exercise') {
        if (state === states.ready) {
            document.getElementById('exerciseDisplay').innerHTML = 'First: ' + exercises[0].name
        } else if (state === states.work) {
            document.getElementById('exerciseDisplay').innerHTML = exercises[index].name
        } else if (state === states.rest) {
            document.getElementById('exerciseDisplay').innerHTML = 'Next: ' + (exercises[index + 1] ? exercises[index + 1].name : 'Finished')
        } else if (state === states.done) {
            document.getElementById('exerciseDisplay').innerHTML = ''
        }
    }
}

const handleStartStopClick = () => isRunning ? stopTimer() : startTimer()

const handlePauseResumeClick = () => isPaused ? resumeTimer() : pauseTimer()


const startTimer = () => {
    time = countdown
    state = states.ready
    update('time')
    update('state')
    update('exercise')
    timer = setInterval(tick, 1000)
    isRunning = true
    startStopBtn.innerHTML = 'STOP'
    pauseResumeBtn.disabled = false
    disableHeader(true)
}

const stopTimer = () => {
    clearInterval(timer)
    isRunning = false
    isPaused = false
    state = states.done
    startStopBtn.innerHTML = 'RESTART'
    pauseResumeBtn.disabled = true
    update('time')
    update('state')
    update('exercise')
    disableHeader(false)
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


