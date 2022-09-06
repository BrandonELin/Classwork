class Character {
    constructor(name, age, eyes, hair, lovesCats, lovesDogs){
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || true;
    }
    greet(otherCharacter) {
        console.log(`hi ${otherCharacter}`)
    }
    classGreeting(otherCharacter){
        console.log(`howdy ${otherCharacter}`)
    }
    setHair(hairColor){
        this.hair = hairColor;
    }
    smite(){
        console.log('I Smite thee')
    }
}

let hobbit = new Character('Mr Baggins', 110, 'green', 'brown', true)
console.log(hobbit)

class Hobbit extends Character {
    steal() {
        console.log('lets get away!');
    }
    greet (otherCharacter) {
        console.log(`Hello ${otherCharacter}`)
    }
}

let frodo = new Hobbit('Frodo', 30, 'brown', 'black', false)
console.log(frodo)
frodo.smite();
frodo.steal();
frodo.greet('Sam')