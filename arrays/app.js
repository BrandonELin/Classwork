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

panagram.sort()
let everyLetter = ((panagram.reduce((previousValue, currentValue) => previousValue + currentValue)).toUpperCase().split("")).sort()
console.log(everyLetter)
let total = 0, checkLetter = []
for(let i of everyLetter){
    if(!checkLetter.includes(i)){
        checkLetter.push(i)
    }
}
console.log(checkLetter)

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]

console.log(products.filter(num => num.price<10))

console.log(products.sort((a,b) => {
    const name1 = a["name"].toUpperCase()
    const name2 = b["name"].toUpperCase()
    if (name1 < name2) {
        return -1;
    }
    if (name1 > name2) {
        return 1;
    }
    
      // names must be equal
    return 0;
}))