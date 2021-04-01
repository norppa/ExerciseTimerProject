const exercises = [
    { name: 'Knee Tap Run', work: 30, rest: 15},
    { name: 'Kneeling Cross Reach', work: 30, rest: 15},
    { name: 'Russian Twist', work: 30, rest: 15},
    { name: 'Mountain Climber', work: 30, rest: 15},
    { name: 'Reach-Up', work: 30, rest: 15},

    { name: 'Side Plank Reach Left', work: 30, rest: 15},
    { name: 'Side Plank Reach Right', work: 30, rest: 15},
    { name: 'Bicycle', work: 30, rest: 15},
    { name: 'Shoulder Pull', work: 30, rest: 15},
    { name: 'Plank In & Out', work: 30, rest: 15},

    { name: 'Hip Raises', work: 30, rest: 15},
    { name: 'Side Plank Crunch Left', work: 30, rest: 15},
    { name: 'Side Plank Crunch Right', work: 30, rest: 15},
    { name: 'Back Flutter', work: 30, rest: 15},
    { name: 'Star Crunch', work: 30, rest: 15},

    { name: 'Plank Side Dip', work: 30, rest: 15},
    { name: 'Chair Sit-Up', work: 30, rest: 15},
    { name: 'Side Plank Dip Left', work: 30, rest: 15},
    { name: 'Side Plank Dip Right', work: 30, rest: 15},
    { name: 'Plank Knee To Elbow', work: 30, rest: 15},

    { name: 'Superman Hold', work: 30, rest: 15},
    { name: 'Heel Touch', work: 30, rest: 15},
    { name: 'Boat Hold', work: 30, rest: 15},
    { name: 'Back Plank', work: 30, rest: 15},
    { name: 'Side Plank Left', work: 30, rest: 15}, 
    
    { name: 'Side Plank Right', work: 30, rest: 15},
    { name: 'Plank', work: 30, rest: 15},
]

const exercisesTest = [
    { name: 'one', work: 3, rest: 3},
    { name: 'two', work: 3, rest: 3},
    { name: 'three', work: 3},
]

const countdown = 15

const audio = {
    applause: new Audio('./sound/applause.mp3'),
    workBell: new Audio('./sound/single_bell.mp3'),
    restBell: new Audio('./sound/triple_bell.mp3'),
    tick: new Audio('./sound/tick.mp3')
}

const states = {
    ready: 'Get Ready',
    work: 'Work',
    rest: 'Rest',
    done: 'Finished!'
}