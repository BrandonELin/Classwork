let learner = 'Sami'
let learner2 = 'Chris'
let learner3 = 'Stephin'

let learners = ['Sami', 'Chris', 'Stephin']
let learners2 = ['nathan', 'kristy', 'Ronald']

learners
learners[0]
console.log(learners[0])
console.log(learners)

//length
console.log(learners.length)

//push
learners.push('4')

console.log(learners)

//pop
learners.pop()
console.log(learners)

//shift
learners.shift()
console.log(learners)

//shift
learners.unshift('Usman')
console.log(learners)

//spread

let everybody = [...learners, ... learners2]
console.log(everybody)

//rest
function add(...numbers) {
    for (let i=0; i<numbers.length;i++) {
            console.log(numbers[i])
    }
}

add(4,5,6,10,100,50)