let daysOfTheWeek = require('./daysOfTheWeek')
console.log(daysOfTheWeek)
const random = require('./utilities/random')
for(let i=0; i<10; i++){
    console.log(random(100,200))
}
const circle = require('./utilities/circle')
console.log(circle.area(3))
console.log(circle.circumference(3))
