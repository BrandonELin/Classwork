class Hamster {
    constructor(name){
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log("squeek squeek")
    }

    getPrice() {
        return this.price
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0
    }

    getName(){return this.name}

    getAge(){return this.age}

    getWeight(){return this.weight}

    greet(){
        console.log(`Hi, my name is ${this.name}`)
    }

    eat(){
        this.weight++
        this.mood++
    }

    exercise(){
        this.weight--
    }

    work(){
        //In the future, add if statement that 'Person' cannot work until 16
        this.bankAccount+= 10
        this.mood--
        console.log("It's a living")
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        if(this.age>6) {
            this.mood--
        } else {
            this.mood++
        }
        this.bankAccount+=10
        console.log("Happy Birthday")
    }

    buyHamster(newHamster){
        this.hamsters.push(newHamster)
        newHamster.owner = this.name
        this.mood+=10
        this.bankAccount -= (newHamster.getPrice())
        console.log(`Welcome Home ${newHamster.name}`)
    }
}
let rex = new Hamster("Rex")
let alex  = new Person("Alex")

//age alex up 5 years
// while(alex.age < 5){
//     alex.ageUp()
// }

// //eat 5 times
// alex.eat()
// alex.eat()
// alex.eat()
// alex.eat()
// alex.eat()

// //exercise 5 times
// alex.exercise()
// alex.exercise()
// alex.exercise()
// alex.exercise()
// alex.exercise()

// //age alex 9 years
// while(alex.age<14){
//     alex.ageUp()
// }

// //buy rex
// alex.buyHamster(rex)

// //age 15 times
// while(alex.age<29){
//     alex.ageUp()
// }

// //eat/exercise
// alex.eat()
// alex.eat()
// alex.exercise()
// alex.exercise()


// console.log(alex)

class Dinner {
    constructor(appetizer, entree, desert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.desert = desert;
    }
}
class Chef {
    cookMeal(appetizer, entree, desert){
        let newDinner = new Dinner(appetizer, entree, desert)
        return `For the appetizer we have, ${newDinner.appetizer}, the entree is a ${newDinner.entree}, and to finish to off, we have have a ${newDinner.desert}`
    }
}


let newChef = new Chef
console.log(newChef.cookMeal("beans", "more beans", "jelly beans"))
console.log(newChef.cookMeal("chips", "dips", "Tiramisu"))
console.log(newChef.cookMeal("calamari", "spaghetti", "toast"))
