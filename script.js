console.log('exercise timer')

var time = 10

console.log(time)

const tick = () => {
    time = time - 1
    console.log(time)
    if (time === 0) {
        clearInterval(timer)
        console.log('Finished!')
    }
}
const timer = setInterval(tick, 1000)

