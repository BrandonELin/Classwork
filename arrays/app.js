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

const nums = [1,2,3,4,5,6,7,8,9,10,0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//array methods take a callback functions as an argument
//callbacks are functions that will run at a later time

//every method
const lessThan8 = (word) => word.length < 8
const greaterThan0 = (number) => number >= 0
console.log(panagram.every(lessThan8))
console.log(nums.every(greaterThan0))

//filter method
console.log(nums.filter(num => num<4))
console.log(panagram.filter(word => word.length%2==0))

//find method
console.log(nums.find(num => num>5))
console.log(panagram.filter(word => word.length>5))

//Find index
console.log(nums.findIndex(num => num%3==0))
console.log(panagram.findIndex(word => word.length<2))

//forEach
nums.forEach(num =>console.log( num*=3))
panagram.forEach(word => console.log(word += "!"))

//The original array is fine
// yes

//map
console.log(nums.map(num => num*100))
console.log(panagram.map(word => word.toUpperCase()))

//nothing
// yes

//some
console.log(nums.some(num => num%7==0))
console.log(panagram.some(word => word.includes('a')))

//reduce
console.log(nums.reduce((previousValue, currentValue) => previousValue + currentValue))
console.log(panagram.reduce((previousValue, currentValue) => previousValue + currentValue))

//nothing

//sort
console.log(nums.sort())
console.log(panagram.sort())
console.log(nums.sort(function(a, b){return a - b}))
console.log(nums.sort(function(a, b){return b - a}))
console.log(panagram.sort(function(a, b){return a.length - b.length}))
console.log(panagram.sort(function(a, b){return b.length - a.length}))