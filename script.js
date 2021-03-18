var number = 0
const numberDiv = document.getElementById('number')
const startBtn = document.getElementById('start')

const incrementer = () => {
    number = number + 1
    numberDiv.innerHTML = formatter(number)
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
    numberDiv.innerHTML = formatter(number)
    setInterval(incrementer, 1000)
}

startBtn.onclick = startTimer

