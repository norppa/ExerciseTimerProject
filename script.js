var time, timer
var timerIsRunning = false, timerIsPaused = false
const numberDiv = document.getElementById('number')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')

const incrementer = () => {
    time = time + 1
    numberDiv.innerHTML = formatter(time)
}

const formatter = (number) => {
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

const startTimer = () => {
    time = 0
    timer = setInterval(incrementer, 1000)
    timerIsRunning = true
    numberDiv.innerHTML = formatter(time)
    startBtn.innerHTML = 'STOP'
}

const stopTimer = () => {
    clearInterval(timer)
    timerIsRunning = false
    numberDiv.innerHTML = '--:--'
    startBtn.innerHTML = 'START'
}

const startStopTimer = () => {
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
    timer = setInterval(incrementer, 1000)
    timerIsPaused = false
    pauseBtn.innerHTML = 'PAUSE'
}

const pauseResumeTimer = () => {
    if (timerIsPaused) {
        resumeTimer()
    } else {
        pauseTimer()
    }
}

startBtn.onclick = startStopTimer
pauseBtn.onclick = pauseResumeTimer

