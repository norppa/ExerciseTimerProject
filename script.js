var number = 0

const incrementer = () => {
    number = number + 1
    console.log(number)
}

setInterval(incrementer, 1000)