class Vehicle {
    constructor(vinParam, makeParam, makeModel) {
        this.vin = vinParam;
        this.make = makeParam;
        this.model = makeModel;
        this.running = false;
    }

    goVroom(){
        console.log('vrrrooom')
    }

    start(){
        this.running = true;
        console.log('running...')
    }
    stop(){
        this.running = false;
        console.log('stopping...')
    }

    toString(){
        return `Yeah this is the new ${this.make}, it's a ${this.model}. My vin? It's ${this.vin}. No thank you officer`
    }
}

let fiat = new Vehicle('X123Y', 'Boeing', 'good one')
let dacia = new Vehicle()
// fiat.goVroom()

// console.log(fiat, robin)
// console.log(`Yeah this is the new ${fiat.make}, it's a ${fiat.model}. My vin? It's ${fiat.vin}. No thank you officer`)

let arr = [1,2,3]
// arr.forEach

// fiat.start()

// console.log(fiat.toString())

class Cat {
    constructor(catName, furColor, catBreed) {
        this.name = catName;
        this.color = furColor;
        this.breed = catBreed;
    }
    pur(){
        console.log('purrr')
    }
    dye(newColor){
        this.color = newColor;
    }
    toString(){
        return `This is ${this.name}, they have ${this.color} fur and they are a ${this.breed}`
    }
}

let c1 = new Cat('James', 'grey', 'tabby')
let c2 = new Cat('Alex', 'orange', 'calico')
// console.log(c1.toString())
// console.log(c2.toString())
// c1.pur()
// c2.dye('pink')
// console.log(c2.toString())

class Pirate {
    constructor(pirateName, numOfLegs, position) {
        this.name = pirateName;
        this.legs = numOfLegs;
        this.job = position;
        this.alive = true;
    }
    argh(){
        console.log('Arrrrrgh')
    }
    die(){
        this.alive = false
        console.log(`Oh no, not ${this.name}!`)
    }
    toString(){
        return `The name's ${this.name}, I got ${this.legs} legs and I'm the ${this.job} around here`
    }
}

let jollyRoger = [['Jack', 2, 'Captain'], ['Will', 2, 'First Mate'], ['Elizabeth', 2, 'Navigator']];
let blackPearl = [['Barbosa', 1, 'Captain'],['Eye Patch', 2, 'First'], ['Other Guy', 2, 'Navigator']]
// for(let i in jollyRoger) {
//     let p1 = new Pirate(jollyRoger[i][0],jollyRoger[i][1],jollyRoger[i][2])
//     if(Math.random()>0.5){
//         p1.die();
//     }
//     console.log(p1.toString())
// }

// for(let i in blackPearl) {
//     let p2 = new Pirate(blackPearl[i][0],blackPearl[i][1],blackPearl[i][2])
//     if(Math.random()>0.5){
//         p2.argh();
//     }
//     console.log(p2.toString())
// }

let freighter = []
for(i=0; i<100; i++){
    let newCar = []
    let randomMake = (Math.floor(Math.random()*3))
    let randomModel = (Math.floor(Math.random()*3))
    newCar.push(Math.floor(Math.random()*2000))
    if(randomMake===0) {
        newCar.push('Toyota')
    } else if (randomModel===1) {
        newCar.push('Nissan')
    } else {
        newCar.push('Chevy')
    }
    if(randomModel===0) {
        newCar.push('Sedan')
    } else if (randomModel===1) {
        newCar.push('Truck')
    } else {
        newCar.push('SUV')
    }
    
    
    freighter[i] = new Vehicle(newCar[0],newCar[1],newCar[2])
}

// console.log(freighter.length)
// for(let i =0; i<100; i++){
//     if(Math.random()>0.5){
//         freighter[i].start()
//     }
//     console.log(freighter[i])
// }

