var number = 0
const numberDiv = document.getElementById('number')
console.log(numberDiv)

const incrementer = () => {
    number = number + 1
    numberDiv.innerHTML = number
}

setInterval(incrementer, 1000)