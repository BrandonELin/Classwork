class Governer {

    static collegeGraduate = true;
    static citizenship = "United States";
    static resident() {
        console.log(`I have been a resident of this state for at least 6 years`)
    }
    constructor(name, state, yearsServed){
        this.name = name;
        this.state = state;
        this.yearsServed = yearsServed;
    }
}

let g1 = new Governer("Jeremy", "New Jersey", 8)
// Governer.resident()
// console.log(Governer.collegeGraduate)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.arms = 2;
        this.legs = 2;
        this.eyes = 2;
    }
    hello(otherPerson){
        console.log(`Hello ${otherPerson}`)
    }
    walk(miles){
        return `I walked for ${miles}`
    }
    birthday(){
        this.age+=1;
        console.log("Happy Birthday")
    }
}

class PostalWorker extends Person {
    deliverMail(letter){
        console.log(`You have ${letter} letters`)
    }
    takeMail(){
        console.log("I will deliver this for you")
    }
}

class Chef extends Person {
    makeMeal(){
        console.log(`Bon Appetit`)
    }
    newItem(food){
        console.log(`Our new dish is ${food}`)
    }
}

let p1 = new PostalWorker("Jeff", 33)
let p2 = new PostalWorker("Geoff", 44)
let c1 = new Chef("RoastalWorker", 22)
let c2 = new Chef("ReoastalWorker", 67)
// console.log(p1.walk(50))
// p2.hello('Eric')
// c1.birthday()
// console.log(c1.age)
// c2.newItem('pizza')
// c1.makeMeal()
// p1.takeMail()
// p2.deliverMail(4)

class BankAccount{
    constructor(ownerName, balance){
        this.name = ownerName;
        this.balance = balance;
        this.acctNum = Math.floor(Math.random()*2000)
    }
    deposit(money){
        this.balance += money;
    }
    withdraw(money){
        if (money<=this.balance){
            this.balance -= money;
        }else{
            console.log("Insufficient funds")
        }
    }
}

class CheckingAccount extends BankAccount{
    constructor(ownerName, balance, overDraft){
        super(ownerName, balance);
        this.overdraftEnabled = overDraft;
    }
    withdraw(money){
        if (money<=this.balance){
            this.balance -= money;
        }else if (this.overdraftEnabled===true) {
            this.balance -= money;
        } else {
            console.log("Would you like to enable overdraft?")
        }
    }
}

class SavingAccount extends BankAccount{
    withdraw(){
        console.log("You can only withdraw from the Checking Account")
    }
}

let b1 = new CheckingAccount("Paul", 1500,false)
let b2 = new SavingAccount("Pawl", 15000)
b1.deposit(400)
console.log(b1.balance)
b1.withdraw(2100)
b2.withdraw(100)
console.log(b2.balance)

console.log(b1)
console.log(b2)