const exercises = [
    { name: 'One', work: 3, rest: 2},
    { name: 'Two', work: 3, rest: 2},
    { name: 'Three', work: 3, rest: 2}
]

const audio = {
    applause: new Audio('./sound/applause.mp3'),
    workBell: new Audio('./sound/single_bell.mp3'),
    restBell: new Audio('./sound/triple_bell.mp3'),
}

const states = {
    countdown: 'Get Ready',
    work: 'Work',
    rest: 'Rest',
    ready: 'Finished!'
}