var time, timer
var timerIsRunning = false, timerIsPaused = false

const timeDisplay = document.getElementById('timeDisplay')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')

const formatTime = (number) => {
    var minutes = Math.floor(number / 60)
    var seconds = number % 60
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return minutes + ':' + seconds
}

const setTimeDisplay = (time) => {
    timeDisplay.innerHTML = formatTime(time)
}

const incrementTime = () => {
    time = time + 1
    setTimeDisplay(time)
}

const startTimer = () => {
    time = 0
    timer = setInterval(incrementTime, 1000)
    timerIsRunning = true
    setTimeDisplay(time)
    startBtn.innerHTML = 'STOP'
    pauseBtn.disabled = false
}

const stopTimer = () => {
    clearInterval(timer)
    timerIsRunning = false
    timeDisplay.innerHTML = '--:--'
    startBtn.innerHTML = 'START'
    pauseBtn.innerHTML = 'PAUSE'
    pauseBtn.disabled = true
    timerIsPaused = false
}

const startOrStopTimer = () => {
    if (timerIsRunning) {
        stopTimer()
    } else {
        startTimer()
    }
}

const pauseTimer = () => {
    clearInterval(timer)
    timerIsPaused = true
    pauseBtn.innerHTML = 'RESUME'
}

const resumeTimer = () => {
    timer = setInterval(incrementTime, 1000)
    timerIsPaused = false
    pauseBtn.innerHTML = 'PAUSE'
}

const pauseOrResumeTimer = () => {
    if (timerIsPaused) {
        resumeTimer()
    } else {
        pauseTimer()
    }
}

startBtn.onclick = startOrStopTimer
pauseBtn.onclick = pauseOrResumeTimer
pauseBtn.disabled = true

