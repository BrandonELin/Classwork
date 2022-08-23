/////////////////////////////////
//Easy Going
/////////////////////////////////
for(let i = 0; i<20; i++){
    console.log(i)
}

/////////////////////////////////
//Get Even
/////////////////////////////////
for(let i = 0; i<200; i+=2){
    console.log(i)
}

/////////////////////////////////
//Fizzbuzz
/////////////////////////////////
for(let i = 0; i<100; i+=2){
    let fb = ""
    if (i%3==0){
        fb += "Fizz"
    }
    if (i%5==0){
        fb+= "Buzz"
    }
    if (i%5!=0 && i%3!= 0){
        fb = i
    }
    console.log(fb)
}

/////////////////////////////////
//Wild Wild Life
/////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-to"]
const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]
plantee[2]++
wolfy[3] = "Gotham City"
dart[3] = [dart[3],"Hawkins"]
wolfy.shift("Gameboy")
console.log(wolfy)
console.log(plantee)
console.log(dart)

/////////////////////////////////
//Yell at the Ninja Turtles
/////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let i of ninjaTurtles) {
    console.log(i.toUpperCase())
}

/////////////////////////////////
//Methods Revised
/////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
console.log(favMovies[favMovies.indexOf('Titanic')])
console.log(favMovies)
favMovies.sort()
console.log(favMovies)
//yes it changed the order
favMovies.pop()
favMovies.push('Guardians of the Galaxy')
favMovies.reverse()
favMovies.shift()
console.log(favMovies.unshift())
//it returns the length of the string
favMovies.splice(favMovies.indexOf("Django Unchained"),1, "Avatar")
//it will not permanently change our array, it needs to be saved
let someMovies = favMovies.slice(0, Math.floor(favMovies.length/2))
console.log(favMovies)
console.log(someMovies)
console.log(favMovies.indexOf('Volver'))
//We didn't delete Fast and furious, we deleted Volver. It returned -1
//const defines a constant reference, not a constant array

/////////////////////////////////
//
/////////////////////////////////

/////////////////////////////////
//
/////////////////////////////////

/////////////////////////////////
//
/////////////////////////////////

/////////////////////////////////
//
/////////////////////////////////

/////////////////////////////////
//
/////////////////////////////////
