// // function declaration
// function sayHello() {
//     return "Hello";
// }

// //function expression
// const sayHi = function() {
//     return "Hi";
// }

// // arrow function
// const sayHey = () => 'Hey!'

// console.log(sayHello())
// console.log(sayHi())
// console.log(sayHey())

// //parameters

// function add(x, y) {
//     return x + y
// }

// console.log(add(3,4))
// console.log(add("Bob ", "The Builder"))

// //exercise 1
// function computeArea(width, height) {
//     console.log("The area of a rectangle with a width of " + width +
//     " and a height of " + height + " is " + (width*height) + " square units.")
// }

// computeArea(3,4)

// //exercise 2
// const planetHasWater = function(planet) {
//     var planet1 = planet.toLowerCase(); 
//     if (planet1=="earth"||planet1=="mars") {
//         return "true"
//     } else {
//         return "false"
//     }
// }
// console.log(planetHasWater("earth"))
// console.log(planetHasWater("Mar"))

//arrow exercise 1&2
 const computeArea2 = (width, height) => "The area of a rectangle with a width of " + width +
 " and a height of " + height + " is " + (width*height) + " square units."
console.log(computeArea2(3,4))

const planetHasWater2 = (planet) => (planet.toLowerCase()==="earth"||planet.toLowerCase()==="mars") ? 'true' : 'false'
console.log(planetHasWater2("earths"))
console.log(planetHasWater2("Mars"))