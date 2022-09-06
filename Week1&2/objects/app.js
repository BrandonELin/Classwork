//          0       1           2
let arr = ['kiwi', 'banana', 'apple']

//object literal
let cat = {
    name: 'Marcus',
    fur: 'grey, black, and white',
    legs: 4,
    age: 3,
    favoriteThings: ['yarn', 'string', 'food'],
    canSpeakFrench: false,
}

//access a property with a dot notation
// console.log(cat.name)
// console.log(cat.fur)
// console.log(cat.legs)

//access a property with brackets
// console.log(cat['name'])
// console.log(cat['fur'])
// console.log(cat['legs'])

cat.temperment = 'mild'

// console.log(cat.temperment)

// if (cat.canSpeakFrench === true) {
//     console.log('Oui')
// } else {
//     console.log('No')
// }

let eldenRing = {
    rightHand: ['Greatsword', 'Battle Hammer'],
    leftHand: ['Brass shield', 'Clawmark Seal'],
    runeLevel: 125,
    alive : true,
    die: function() {
        this.alive = false
        console.log('You Died')
    },
    revive() {
        this.alive = true
        console.log('Caelum')
    }
}

// eldenRing.die()
// console.log(eldenRing.alive)
// eldenRing.revive()
// console.log(eldenRing.alive)

let coffeePot = {
    roast: 'City',
    notes: ["malt", "milk chocolate"],
    amount: 1000,
    empty: false,
    pour(x) {
        this.amount -= x
        if (this.amount <= 0) {
            this.empty = true
            this.amount = 0
        }
    },
    refill: function() {
        this.amount+= 1000
        if (this.empty === true) {
            this.empty = false
        }
    }
}

// console.log(coffeePot.notes)
// coffeePot.pour(250)
// console.log(coffeePot.empty)
// coffeePot.pour(750)
// console.log(coffeePot['empty'])
// coffeePot.refill()
// console.log(coffeePot['empty'])

function characterCounter(x) {
    let count = {}
    for(let i = 0; i<x.length; i++){
        if (x[i] in count) {
            count[x[i]]++;
        } else {
            count[x[i]] = 1;
        }
    }
    return count

}

// console.log(characterCounter('Hello'))

function change(num,cost) {
    num *= 100
    cost *= 100
    //rC stands for returned Change
    let rC = {
        hundred: 0,
        fifty: 0,
        twenty: 0,
        ten: 0,
        five: 0,
        one: 0,
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,
    }

    while (num>cost) {
        if (num>=cost+10000) {
            num-=10000;
            rC.hundred++;
        } else if (num>=cost+5000) {
            num-=5000;
            rC.fifty++;
        } else if (num>=cost+2000) {
            num-=2000;
            rC.twenty++;
        } else if (num>=cost+1000) {
            num-=1000;
            rC.ten++;
        } else if (num>=cost+500) {
            num-=50;
            rC.five++;
        } else if (num>=cost+100) {
            num-=100;
            rC.one++;
        } else if (num>=cost+25) {
            num-=25;
            rC.quarter++;
        } else if (num>=cost+10) {
            num-=10;
            rC.dime++;
        } else if (num>=cost+5) {
            num-=5;
            rC.nickel++;
        }  else if (num>=cost+1) {
            num--;
            rC.penny++;
        }     
    }
    return (rC)
}

console.log(change(500, 48.19))