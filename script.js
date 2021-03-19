const times = [2, 3, 4, 3, 2]
var index = 0

var time = times[index]

console.log(time)
const tick = () => {
    time = time - 1
    if (time === 0) {
        index = index + 1    
        if (index === times.length) {
            clearInterval(timer)
            console.log('Finished!')
            return
        } else {
            time = times[index]
        }
    }
    console.log(time)
}
const timer = setInterval(tick, 1000)
